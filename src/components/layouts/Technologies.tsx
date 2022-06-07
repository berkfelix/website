import {
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ITech, techs } from "../../data";

const Technologies = () => {
  return (
    <Flex my="4rem" direction="column">
      <Heading fontSize="1.5rem" color="neutral.100" m="5">
        Technologies I use
      </Heading>
      <SimpleGrid columns={[2, 3, 4]} minChildWidth="150px" spacing={7}>
        {techs.map((tech: ITech) => (
          <Flex
            key={tech.name}
            direction="row"
            bg={useColorModeValue("gray.200", "gray.900")}
            justifyContent="center"
            alignItems="center"
            p="10px"
            rounded="lg"
            maxW="sm"
          >
            <img src={tech.logo} alt={tech.name} className="h-7 w-7 " />
            <Spacer />
            <Text fontWeight="bold">{tech.name}</Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Technologies;
