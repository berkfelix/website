import React from "react";
import { Flex, SimpleGrid, Heading } from "@chakra-ui/react";
import useSWR from "swr";
import { IRepo } from "../../lib/repositories";

import Repository from "../../components/Repository";

const Projects = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("api/repositories", fetcher);

  return (
    data && (
      <Flex w="100%" p="5" direction="column">
        <Heading fontSize="1.5rem" color="neutral.100" m="5">
          My Projects
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          placeItems="center"
          spacing={10}
        >
          {data.map((repo: IRepo) => (
            <Repository key={repo.name} repo={repo} />
          ))}
        </SimpleGrid>
      </Flex>
    )
  );
};

export default Projects;
