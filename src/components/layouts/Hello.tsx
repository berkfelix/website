import {
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FaSpotify, FaTwitter, FaDiscord } from "react-icons/fa";
import Spotify from "../Spotify";
import DailyCodingStats from "../DailyCodingStats";

const Hello = () => {
  return (
    <Flex
      p="5"
      direction={{ base: "column-reverse", md: "row" }}
      alignItems={{ base: "center" }}
    >
      <Box p="5" w="100%" animation="fadeInLeft 1s">
        <span className="text-2xl">Hello I'm</span>
        <Text
          fontSize="5xl"
          fontWeight="bold"
          m="0 1rem 0"
          color={useColorModeValue("gray.800", "whiteAlpha.800")}
          fontFamily="title"
        >
          Berk Felix
        </Text>
        <Text fontSize="xl" color={useColorModeValue("", "gray.300")}>
          a{" "}
          <a
            href="https://www.w3schools.com/whatis/whatis_frontenddev.asp"
            className="dark:text-teal-500 text-teal-700"
            target="_blank"
          >
            Front-end Developer
          </a>
          &nbsp; From Turkey
        </Text>
        <Text
          fontSize="md"
          color={useColorModeValue("neutral.600", "gray.400")}
        >
          I am 17 years old and a student. I started the programming by coding a
          discord bot then i met HTML and CSS. I've come this far and I'm still
          trying to improve myself.
        </Text>
        <Flex m="2" gap="2" animation="fadeInUp 1s">
          <IconButton
            aria-label="twitter"
            rounded="full"
            size="md"
            as="a"
            href="https://twitter.com/berkfelix0"
            _hover={{ bg: useColorModeValue("twitter.500", "twitter.700") }}
            icon={<FaTwitter className="text-white-600" />}
          />
          <IconButton
            aria-label="spotify"
            rounded="full"
            size="md"
            as="a"
            href="https://open.spotify.com/user/6y9zzpwv7gdsex5in1mc8xcwq?si=ec8a1bcd5bb24c1e&nd=1"
            _hover={{ bg: useColorModeValue("green.400", "green.600") }}
            icon={<FaSpotify className="text-white-600" />}
          />
          <IconButton
            aria-label="discord"
            rounded="full"
            size="md"
            as="a"
            href="https://discord.com/users/608920145032904715"
            _hover={{ bg: useColorModeValue("facebook.400", "facebook.500") }}
            icon={<FaDiscord className="text-white-600" />}
          />
        </Flex>
        <Spotify />
        <DailyCodingStats />
      </Box>
      <Image
        animation="fadeInRight 1s"
        boxSize="200px"
        objectFit="cover"
        src="/me.png"
        alt="I will add my photo here"
        transform="rotate(0deg)"
        transition="transform 200ms ease-in-out"
        _hover={{ transform: "rotate(20deg) scale(1.1)" }}
      />
    </Flex>
  );
};

export default Hello;
