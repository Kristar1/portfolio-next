import { Box } from '@chakra-ui/react'
import React from 'react'
import Cta from '../components/about/Cta'
import Section1 from '../components/about/Section1'
import Tools from '../components/about/Tools'
import Head from "next/head";


const about = () => {
  return (
    <>
     <Head>
      <title>About Krish Kedia - Full Stack Web developer and UI/UX Designer</title>

      <link rel="canonical" href="/about" />
        <meta
          name="description"
          data-rh="true"
          content="Hello I am Krish a mern stack developer who can help with all of your websites queries from technologies like next.js, and react.js to SEO and related topics"
        />
        <meta property="og:type" content="website" />
      </Head>
   <Box minH='100vh'>
   <Section1/>
   <Tools/>
   <Cta/>
   </Box>
   </>

  )
}

export default about