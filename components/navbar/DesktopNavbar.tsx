import { useColorModeValue,Image, useDisclosure, chakra, Flex, Button, CloseButton, VStack, IconButton, Box, HStack, useColorMode } from '@chakra-ui/react';
import React from 'react'
import Link from 'next/link'
import { BsMoonStars, BsSunFill } from 'react-icons/bs';

const DesktopNavbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const bg = useColorModeValue("white", "gray.800");
        const mobileNav = useDisclosure();
  return (
    <Box width='100vw' position='fixed' zIndex='9999'   bg={'#02054b'}
              shadow="md"
            >
    
        <div className="navContainer">
        
          <React.Fragment>
            <chakra.header
            //   bg={bg}
              w="full"

              px={{
                base: 2,
                sm: 4,
              }}
              className='mobile-none'
              py={4}
            >
              <Flex alignItems="center" justifyContent="space-between" mx="auto">
                <Flex>
                  <chakra.a
                    href="/"
                    title="Home page"
                    display="flex"
                    alignItems="center"
                  >
                  <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                    {/* Krish */}
                  </chakra.h1>
                  <Image height={'50px'} src='/assets/logo4.png'/> 
                  </chakra.a>
                </Flex>
                <HStack display="flex" alignItems="center" spacing={1}>
                  <HStack
                    spacing={1}
                    mr={1}
                    color="brand.500"
                    display={{
                      base: "none",
                      md: "inline-flex",
                    }}
                  >
                    <Link href='/#projects' >
                    <Button color={'white'} _dark={{color:'white'}} _hover={{color:'blue'}} variant="ghost">Projects</Button>
                    </Link>
                    <Link href='/#process' >
                    <Button color={'white'} _dark={{color:'white'}} _hover={{color:'blue'}} variant="ghost">Process</Button>
                    </Link>
                    <Link href='/about' >
                    <Button color={'white'} _dark={{color:'white'}}  _hover={{color:'blue'}}variant="ghost">About</Button>
                    </Link>
                    <Link href='/contact' >
                      <Button color={'white'} _dark={{color:'white'}} _hover={{color:'blue'}} variant="ghost">Contact</Button>
                    </Link>
                  </HStack>
                  <a href='https://drive.google.com/file/d/16IBYURhVK2iYh7QaiOxBBcuNnLSHsndK/view?usp=sharing' target='_blank' rel='noreferrer' >
                  <Button color='white' bg="#0919cd" size="md" _hover={{transform:'scale(1.1)', backgroundColor:'blue'}} transition='0.5s ease-in-out' >
                    Resume
                  </Button>
                  </a>
                  <Box color='white'  padding='3' paddingLeft={'5'} onClick={toggleColorMode}>
                {colorMode === 'light' ? <BsMoonStars /> : <BsSunFill />}
              </Box>
                  <Box
                    display={{
                      base: "inline-flex",
                      md: "none",
                    }}
                  >
                    <IconButton
                      display={{
                        base: "flex",
                        md: "none",
                      }}
                      aria-label="Open menu"
                      fontSize="20px"
                      color="gray.800"
                      _dark={{
                        color: "inherit",
                      }}
                      variant="ghost"
                    //   icon={<AiOutlineMenu />}
                      onClick={mobileNav.onOpen}
                    />
      
                    <VStack
                      pos="absolute"
                      top={0}
                      left={0}
                      right={0}
                      display={mobileNav.isOpen ? "flex" : "none"}
                      flexDirection="column"
                      p={2}
                      pb={4}
                      m={2}
                      bg={bg}
                      spacing={3}
                      rounded="sm"
                      shadow="sm"
                    >
                      <CloseButton
                        aria-label="Close menu"
                        onClick={mobileNav.onClose}
                      />
      
                      <Button w="full" variant="ghost">
                        Features
                      </Button>
                      <Button w="full" variant="ghost">
                        Pricing
                      </Button>
                      <Button w="full" variant="ghost">
                        Blog
                      </Button>
                      <Button w="full" variant="ghost">
                        Company
                      </Button>
                      <Button w="full" variant="ghost">
                        Sign in
                      </Button>
                    </VStack>
                  </Box>
                </HStack>
              </Flex>
            </chakra.header>
          </React.Fragment>
          </div>
          </Box>
        
      
  )
}

export default DesktopNavbar