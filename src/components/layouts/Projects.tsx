import React from "react";
import { Flex, SimpleGrid, Heading, useColorModeValue } from "@chakra-ui/react";
import useSWR from "swr";
import { IRepo } from "../../lib/repositories";

import Repository from "../../components/Repository";

const Projects = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("api/repositories", fetcher);

  return (
    data && (
      <Flex w="100%" p="5" direction="column" my="3rem">
        <Heading fontSize="1.5rem" color="neutral.100" m="5" textAlign="center">
          My Projects
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          placeItems="center"
          spacing={10}
        >
          {data.map((repo: IRepo, index: number) => (
            <Repository key={index} repo={repo} />
          ))}
        </SimpleGrid>
      </Flex>
    )
  );
};

export default Projects;
