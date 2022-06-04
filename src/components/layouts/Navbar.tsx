import {
  Flex,
  Spacer,
  Heading,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

import ToggleColorMode from "@components/ToggleColorMode";

const Navbar = () => {
  const iconColor = useColorModeValue("blue.800", "neutral.300");

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap="2"
      id="navbar"
      className="relative mb-10"
    >
      <hr className="absolute bottom-[-10px] h-[0.5px] w-11/12 bg-gray-700" />
      <Heading
        as="h1"
        size="lg"
        noOfLines={1}
        letterSpacing="2px"
        fontFamily="heading"
      >
        BerkFelix
      </Heading>
      <Spacer />
      <Flex alignItems="center" gap="2" justifyContent="center">
        <Button as="a" href="https://github.com/berkfelix" variant="ghost">
          <Icon name="github" as={FaGithub} color={iconColor} w="5" h="5" />
        </Button>
        <ToggleColorMode />
      </Flex>
    </Flex>
  );
};

export default Navbar;
