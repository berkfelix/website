import { stringify } from "query-string";

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

const getTodayDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
};

export const getStats = async () => {
  const { access_token } = await _getAccessToken();
  return fetch(
    `https://wakatime.com/api/v1/users/BerkFelix/durations?date=${getTodayDate()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  ).then((response) => response.json());
};
