import { Button, Flex, FormLabel, chakra, Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <Box>
      <input type="checkbox" id="active" checked={toggle} />
      {/* <Flex height='70px' width='100vw' justifyContent='space-between' >
      <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                    Krish
                  </chakra.h1>
    </Flex> */}
      <FormLabel
        _dark={{ color: "white" }}
        htmlFor="active"
        className="menu-btn"
        zIndex={"9999"}
        position="fixed"
        onClick={() => setToggle(!toggle)}
      >
        <span></span>
      </FormLabel>
      <label
        htmlFor="active"
        className="close"
      ></label>
      <Box height="80px" bg="#02054b"  className="desktop-none mobile-nav" display={'flex'} alignItems='center' justifyContent={'start'} p='0 40px'  >
        <Link href='/'>
      <Image height={'40px'} mt='20px' src='/assets/logo4.png'/> 
        </Link>

      </Box>

      <Box zIndex={"9998"} className="wrapper">
        <ul>
          <li onClick={() => setToggle(false)}>
            <Link href="/#projects">
              Projects
            </Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link href="/#process">
              Process
            </Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link href="/about">
              About
            </Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link href="/contact">
              Contact
            </Link>
          </li>

          <a
            href="https://drive.google.com/file/d/1jUxldSVrsVHZDdxvBoUcYcDLzEIC2UUi/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <Button
                bg="#0919cd"
                fontSize="2xl"
                p="30px 60px"
                _hover={{ transform: "scale(1.1)", backgroundColor: "blue" }}
                transition="0.5s ease-in-out"
              >
                Resume
              </Button>
            </li>
          </a>
        </ul>
      </Box>
    </Box>
  );
};

export default MobileNavbar;
