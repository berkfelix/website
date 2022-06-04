import {
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FaSpotify, FaTwitter, FaDiscord } from "react-icons/fa";
import Spotify from "@components/Spotify";

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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          eligendi nemo suscipit, amet unde ratione, dignissimos consequatur
          dolores tenetur, praesentium architecto eveniet tempora quisquam
          fugiat ex quae non qui eos?
        </Text>
        <Flex m="2" gap="2" animation="fadeInUp 1s">
          <IconButton
            aria-label="twitter"
            rounded="full"
            size="md"
            as="a"
            _hover={{ bg: useColorModeValue("twitter.500", "twitter.700") }}
            icon={<FaTwitter className="text-white-600" />}
          />
          <IconButton
            aria-label="spotify"
            rounded="full"
            size="md"
            as="a"
            _hover={{ bg: useColorModeValue("green.400", "green.600") }}
            icon={<FaSpotify className="text-white-600" />}
          />
          <IconButton
            aria-label="discord"
            rounded="full"
            size="md"
            as="a"
            _hover={{ bg: useColorModeValue("facebook.400", "facebook.500") }}
            icon={<FaDiscord className="text-white-600" />}
          />
        </Flex>
        <Spotify />
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
