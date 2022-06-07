import { stringify } from "query-string";

import timer from "./timer";

type Data = {
  totalSeconds?: number;
  time?: any;
  duration?: number;
};

const getTodayDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
};

const _getAccessToken = async () => {
  const response = await fetch("https://wakatime.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: stringify({
      client_id: `${process.env.WAKATIME_CLIENT_ID}`,
      client_secret: `${process.env.WAKATIME_CLIENT_SECRET}`,
      grant_type: "refresh_token",
      refresh_token: process.env.WAKATIME_REFRESH_TOKEN,
    }),
  });

  return response.json();
};

const getDailyStats = async (access_token: string) => {
  return fetch(
    `https://wakatime.com/api/v1/users/BerkFelix/durations?date=${getTodayDate()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  ).then((response) => {
    return response.json().then(({ data }: any) => {
      const totalSeconds = data
        .map((item: Data) => item.duration)
        .reduce((a: number, b: number) => a + b, 0);

      const daily_coding_time = timer(totalSeconds * 1000);
      return {
        daily_coding_time,
      };
    });
  });
};

export const getStats = async () => {
  const { access_token } = await _getAccessToken();
  const dailyStats = await getDailyStats(access_token);

  return fetch(
    `https://wakatime.com/api/v1/users/BerkFelix/stats/last_7_days`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  ).then((response: any) =>
    response.json().then((data: any) => ({
      ...dailyStats,
      ...data,
    }))
  );
};
