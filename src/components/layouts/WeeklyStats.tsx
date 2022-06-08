import React from "react";
import {
  Flex,
  Heading,
  useColorModeValue,
  Text,
  Progress,
} from "@chakra-ui/react";
import useSWR from "swr";

const WeeklyStats = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("api/wakatime", fetcher);

  return (
    data && (
      <Flex w="100%" p="5" direction="column" my="3rem" alignItems="center">
        <Heading fontSize="1.5rem" m="5">
          Weekly Coding Stats
        </Heading>
        <Flex direction="column" w={["100%", "85%"]}>
          <Flex
            bg={useColorModeValue("gray.200", "gray.900")}
            direction="column"
            borderRadius="15px"
            w="100%"
            p="2"
          >
            {data.data.languages.map((language: any) => (
              <Flex
                position="relative"
                key={language.name}
                m="5"
                alignItems="center"
              >
                <Text fontSize="1rem" w="6rem">
                  {language.name}
                </Text>
                <Progress
                  colorScheme="pink"
                  value={language.percent}
                  size="sm"
                  borderRadius="15px"
                  w="90%"
                  h="18px"
                  mx="2"
                >
                  <span className="absolute top-0 left-1/2 font-bold text-sm">
                    {language.text}
                  </span>
                </Progress>

                <span className="ml-1 text-sm">{language.percent}%</span>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    )
  );
};

export default WeeklyStats;
