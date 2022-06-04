import { NextApiResponse, NextApiRequest } from "next";
import { getRepositories } from "@lib/repositories";

interface IRepo {
  name: string;
  html_url: string;
  created_at: string;
  pushed_at: string;
  language: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  license: {
    name: string;
  };
  topics: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    `Cache-Control`,
    `public, s-maxage=1200, stale-while-revalidate=600`
  );

  const data = await getRepositories();

  res.status(200).json(data);
}
