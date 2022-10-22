import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Hero2 from "../components/home/Hero2.jsx";
import Process from "./../components/home/Process";
import Projects from "../components/home/Projects";
import Cta from "../components/home/Cta";
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
 
  return (
    <Box className="container" pt='70px' >
      <Head>
      <title>Krish Kedia - Full Stack Web developer and UI/UX Designer</title>

      <link rel="canonical" href="/" />
        <meta
          name="description"
          data-rh="true"
          content="Hello I am Krish a mern stack developer who can help with all of your websites queries from technologies like next.js, and react.js to SEO and related topics"
        />
        <meta property="og:type" content="website" />
      </Head>
        <Hero2 />
        <Projects />
        <Process/>
        <Cta />
    </Box>
  );
};

export default Home;
