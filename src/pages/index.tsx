import type { NextPage } from "next";
import Head from "next/head";
import { Container, VStack } from "@chakra-ui/react";

import Navbar from "../components/layouts/Navbar";
import Hello from "../components/layouts/Hello";
import WeeklyStats from "../components/layouts/WeeklyStats";
import Projects from "../components/layouts/Projects";
import Technologies from "../components/layouts/Technologies";
import Footer from "../components/layouts/Footer";

const Home: NextPage = () => {
  return (
    <VStack h="100vh" className="dark:text-neutral-400  text-slate-800">
      <Head>
        <title>Berk Felix</title>
        <meta name="author" content="Berkay Çay" />
        <meta name="keywords" content="berkfelix, berkay, berkay çay" />
        <meta property="og:title" content="Berk Felix" />
        <meta property="og:image" name="og:image" content="/me.png" />
      </Head>
      <Container maxW="3xl" p="3" position="relative">
        <Navbar />
        <Hello />
        <Projects />
        <WeeklyStats />
        <Technologies />
        <Footer />
      </Container>
    </VStack>
  );
};

export default Home;
