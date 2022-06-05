import { NextApiResponse, NextApiRequest } from "next";
import { getRepositories } from "../../lib/repositories";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    `Cache-Control`,
    `public, s-maxage=900, stale-while-revalidate=600`
  );
  const fakeData = [
    {
      name: "Website",
      url: "https://berkfelix.vercel.app",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam. ",
      stargazers_count: 5,
      created_at: "string;",
      pushed_at: "string;",
      language: "Typescript",
      forks: 9,
      topics: ["chakra-ui", "nextjs"],
    },
  ];
  const data =
    process.env.NODE_ENV === "development" ? fakeData : await getRepositories();

  res.status(200).json(data);
}
