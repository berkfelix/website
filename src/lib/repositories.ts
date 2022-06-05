import axios from "axios";

export interface IRepo {
  name: string;
  html_url?: string;
  forks?: number;
  url?: string;
  description: string;
  stargazers_count: number;
  created_at: string;
  pushed_at: string;
  language: string;
  forks_count: number;
  license: {
    spdx_id?: string;
  };
  topics: string[];
}

export const getRepositories = async () => {
  const repositories = await axios.get(
    `https://api.github.com/users/berkfelix/repos?per_page=20`
  );
  const filter = repositories.data.filter((r: any) => !r.fork);

  const data = filter.map((data: IRepo) => ({
    name: data.name,
    url: data.html_url,
    description: data.description || "Not Description",
    stargazers_count: data.stargazers_count,
    created_at: data.created_at,
    pushed_at: data.pushed_at,
    language: data.language || "Empty",
    forks: data.forks_count || 0,
    license: (data.license && data.license.spdx_id) || "Not found",
    topics: data.topics,
  }));

  return data;
};
