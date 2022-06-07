import type { NextApiRequest, NextApiResponse } from "next";

import { getStats } from "../../lib/wakatime";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    `Cache-Control`,
    `public, s-maxage=900, stale-while-revalidate=600`
  );

  const data = await getStats();

  return res.status(200).json({
    ...data,
  });
}
