import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("light", "dark");
    body.classList.add(colorMode === "light" ? "light" : "dark");
  }, [colorMode]);

  return (
    <Button onClick={() => toggleColorMode()} variant="ghost">
      {colorMode === "dark" ? (
        <SunIcon color="orange.200" />
      ) : (
        <MoonIcon color="blue.700" />
      )}
    </Button>
  );
};

export default ToggleColorMode;
