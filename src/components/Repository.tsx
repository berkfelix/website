import React from "react";
import {
  Flex,
  Box,
  Text,
  Spacer,
  useColorModeValue,
  Icon,
  Button,
  Badge,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { AiFillStar, AiOutlineFork } from "react-icons/ai";
import { TbLicense } from "react-icons/tb";

import { IRepo } from "@lib/repositories";

interface Props {
  repo: IRepo;
}

const Repository = ({ repo }: Props) => {
  const colors = ["red", "blue", "green", "teal"];
  return (
    <Flex
      p="5"
      direction="column"
      borderRadius="15px"
      w="350px"
      h="200px"
      bg={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex
        as="a"
        href={repo.url}
        p="0"
        transition="color 300ms ease-in-out"
        _hover={{ color: "blue.500" }}
      >
        <Text fontSize="1.2rem">
          {repo.name}
          <span>
            {repo.topics.map((topic) => (
              <Badge
                key={topic}
                fontSize="0.5rem"
                mx="0.5"
                colorScheme={colors[Math.floor(Math.random() * colors.length)]}
                variant="subtle"
              >
                #{topic}
              </Badge>
            ))}
          </span>
        </Text>
        <Spacer />
        <Icon as={FaGithub} name="github" w="5" h="5" />
      </Flex>
      <Spacer />
      <Text>{repo.description}</Text>
      <Spacer />
      <Flex>
        <Text>{repo.language}</Text>
        <Spacer />
        <Button mx="1" size="xs" leftIcon={<AiFillStar />}>
          {repo.stargazers_count}
        </Button>
        <Button mx="1" size="xs" leftIcon={<AiOutlineFork />}>
          {repo.forks}
        </Button>
        <Button mx="1" size="xs" leftIcon={<TbLicense />}>
          {repo.license?.name || "No license"}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Repository;
