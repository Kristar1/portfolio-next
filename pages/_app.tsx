// import "swiper/css";
import "../styles/globals.scss";

import { ChakraProvider, extendTheme,ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import MainSeo from "../components/MainSeo";


function MyApp({ Component, pageProps }: AppProps) {
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
    <MainSeo>


      <Layout>
      <ColorModeScript initialColorMode='dark'/>
      <Component {...pageProps} />
      </Layout>
    </MainSeo>
    </ChakraProvider>
    </>
  );
}

export default MyApp;
