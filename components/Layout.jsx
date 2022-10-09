import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
// import Navbar from './navbar/Navbar'
  import Footer from './Footer/Footer'
import DesktopNavbar from './navbar/DesktopNavbar'
import MobileNavbar from './navbar/MobileNavbar'

const Layout = ({children}) => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    })
  
    document.addEventListener('click', () => {
        cursor.classList.add("expand");
  
        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    })
  
  }, [])
  

  return (
    <>
   <DesktopNavbar/>
    <MobileNavbar/>
    <div zIndex={'10000'} className="cursor"></div>
    {children}
    <Footer/>
    </>

  )
}

export default Layout