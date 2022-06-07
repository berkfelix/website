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

import { IRepo } from "../lib/repositories";

interface Props {
  repo: IRepo;
}

const Repository = ({ repo }: Props) => {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "cyan",
    "teal",
    "whiteAlpha",
  ];
  return (
    <Flex
      animation="fadeInUp 1s"
      p="5"
      direction="column"
      borderRadius="15px"
      w="350px"
      h="225px"
      bg={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex
        as="a"
        href={repo.url}
        p="0"
        transition="color 300ms ease-in-out"
        _hover={{ color: "blue.500" }}
      >
        <Text fontSize="1.3rem" fontWeight="bold">
          {repo.name}
          <Text>
            {repo.topics.map((topic, index) => (
              <Badge
                key={index}
                fontSize="0.6rem"
                mx="0.5"
                colorScheme={colors[Math.floor(Math.random() * colors.length)]}
                variant="solid"
              >
                #{topic}
              </Badge>
            ))}
          </Text>
        </Text>
        <Spacer />
        <Icon as={FaGithub} name="github" w="5" h="5" />
      </Flex>
      <Spacer />
      <Text>{repo.description}</Text>
      <Spacer />
      <Flex>
        <Button mx="1" size="xs" leftIcon={<AiFillStar />}>
          {repo.stargazers_count}
        </Button>
        <Button mx="1" size="xs" leftIcon={<AiOutlineFork />}>
          {repo.forks}
        </Button>
        <Button mx="1" size="xs" leftIcon={<TbLicense />}>
          {repo.license as string}
        </Button>
        <Spacer />
        <Text>{repo.language}</Text>
      </Flex>
    </Flex>
  );
};

export default Repository;
