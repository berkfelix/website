import type { NextPage } from "next";
import Head from "next/head";
import { Container, VStack } from "@chakra-ui/react";

import Navbar from "@layouts/Navbar";
import Hello from "@layouts/Hello";

const Home: NextPage = () => {
  return (
    <VStack h="100vh" className="dark:text-neutral-400  text-slate-800">
      <Head>
        <title>Berk Felix</title>
      </Head>
      <Container maxW="3xl" p="3" position="relative">
        <Navbar />
        <Hello />
      </Container>
    </VStack>
  );
};

export default Home;
