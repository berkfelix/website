import type { NextApiRequest, NextApiResponse } from "next";

import { getNowPlaying } from "../../lib/spotify";

type Data = {
  isPlaying: boolean;
  name?: string;
  url?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader(
    `Cache-Control`,
    `public, s-maxage=60, stale-while-revalidate=30`
  );

  const response = await getNowPlaying();

  if (response.status > 400 || response.status === 204) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  return res.status(200).json({
    isPlaying: song.is_playing,
    name: song.item.name,
    url: song.item.external_urls.spotify,
  });
}
