import React from 'react'
// import Navbar from './navbar/Navbar'
  import Footer from './Footer/Footer'
import MobileNavbar from './navbar/MobileNavbar'

const Layout = ({children}) => {
  return (
    <>
    <MobileNavbar/>
    {/* <Navbar/> */}
    {children}
    <Footer/>
    </>

  )
}

export default Layout