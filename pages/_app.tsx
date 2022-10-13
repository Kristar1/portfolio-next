import "../styles/globals.scss";
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { ChakraProvider, extendTheme,ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import MainSeo from "../components/MainSeo";
import AOS from 'aos';
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";



function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  const colors = {
    brand:{
      500 :'#07C6B9',
      600 :'#2E8AB0',
      900 :'#2E8AB0'
    }
  };
  const theme = extendTheme({ colors });
  return (
    <>

    <ChakraProvider  theme={theme} >
    <AnimatePresence exitBeforeEnter>
    <MainSeo>
      <Layout>
      <ColorModeScript initialColorMode='dark'/>
      <Component {...pageProps} />
      </Layout>
    </MainSeo>
    </AnimatePresence>
    </ChakraProvider>
    </>
  );
}

export default MyApp;
