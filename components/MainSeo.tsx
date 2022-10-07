import React from 'react'
import Head from "next/head";

const MainSeo = ({ children }) => {
  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        property="og:title"
        content="Krish Kedia - Full Stack Web developer and UI/UX Designer"
      />
      <meta
        property="og:description"
        content="Hello I am Krish a mern stack developer who can help with all of your websites queries from technologies like next.js, and react.js to SEO and related topics"
      />
      <meta property="og:url" content="https://krishkedia.com" />
      <meta
        property="og:image"
        content="https://images.unsplash.com/photo-1501159599894-155982264a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      

    </Head>
    {children}
  </>
  )
}

export default MainSeo