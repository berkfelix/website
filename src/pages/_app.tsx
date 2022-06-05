import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

/* Styles */
import "../styles/globals.css";
import theme from "../styles/theme";
import "../styles/tailwind.css";

function Website({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Website;
