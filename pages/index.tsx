import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Hero2 from "../components/home/Hero2.jsx";
import Process from "./../components/home/Process";
import Projects from "../components/home/Projects";
import Cta from "../components/home/Cta";

const Home: NextPage = () => {
  //   Preloading Animation
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //  setLoading(true)
  //  setTimeout(()=>{
  //   setLoading(false)
  //  },2000)
  // }, [])

  return (
    <div className="container">
        <Hero2 />
        <Projects />
        <Process/>
        <Cta />
    </div>
  );
};

export default Home;
