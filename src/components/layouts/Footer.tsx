import {
  Flex,
  Text,
  Spacer,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <Flex
      position="relative"
      alignItems="center"
      justifyContent="center"
      direction={["column-reverse", "row"]}
      gap="2"
    >
      <hr className="absolute top-[-15px] h-[0.5px] w-11/12 bg-gray-700" />
      <Flex m="2" gap="2">
        <IconButton
          aria-label="twitter"
          rounded="lg"
          size="sm"
          as="a"
          variant="outline"
          href="https://twitter.com/berkfelix0"
          _hover={{ bg: useColorModeValue("twitter.500", "twitter.700") }}
          icon={<FaTwitter className="text-white-600" />}
        />
        <IconButton
          aria-label="mail"
          rounded="lg"
          size="sm"
          as="a"
          variant="outline"
          href="mailto:berkayyan75@gmail.com"
          _hover={{ bg: useColorModeValue("green.400", "green.600") }}
          icon={<HiMail className="text-white-600" />}
        />
        <IconButton
          variant="outline"
          aria-label="github"
          rounded="lg"
          size="sm"
          as="a"
          href="https://github.com/berkfelix"
          _hover={{ bg: useColorModeValue("gray.400", "gray.500") }}
          icon={<FaGithub className="text-white-600" />}
        />
      </Flex>
      <Spacer />
      <Text>This website is open source on Github</Text>
    </Flex>
  );
};

export default Footer;
