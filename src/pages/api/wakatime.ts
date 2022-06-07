import type { NextApiRequest, NextApiResponse } from "next";

import { getStats } from "../../lib/wakatime";
import timer from "../../lib/timer";

type Data = {
  totalSeconds?: number;
  time?: any;
  duration?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader(
    `Cache-Control`,
    `public, s-maxage=900, stale-while-revalidate=600`
  );

  const response = await getStats();
  const data = response.data;

  const totalSeconds = data
    .map((item: Data) => item.duration)
    .reduce((a: number, b: number) => a + b, 0);

  const time = timer(totalSeconds * 1000);
  return res.status(200).json({
    totalSeconds,
    time: time,
  });
}
