import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { useState } from "react";
import React from 'react'
import Head from "next/head";


const Contact = () => {
  const [message, setMessage] = useState('')

  return (
    <>
      <Head>
        <title>Contact Krish Kedia - Full Stack Web developer and UI/UX Designer</title>

        <link rel="canonical" href="/contact" />
        <meta
          name="description"
          data-rh="true"
          content="Hello I am Krish a mern stack developer who can help with all of your websites queries from technologies like next.js, and react.js to SEO and related topics"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Container bg={["#02054B", "#9DC4FB"]} maxW="full" mt={0} centerContent overflow="hidden" pt={['30px', '100px']} >
        <Flex>
          <Box
            bg="#02054B"
            color="white"
            borderRadius={['none', "lg"]}
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          // width={["unset", "60vw"]}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box width={['90vw', 'unset']} display={['flex']} flexDirection={'column'} alignItems='center' justifyContent={'center'} >
                    <Heading>Get in touch</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      By filling the contact form
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          href="tel:+917003920639"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}
                        >
                          <a href="tel:+917003920639">

                            +917003920639
                          </a>
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="250px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}
                        >
                          <a src='mailto:thekrishkedia@gmail.com'>
                            thekrishkedia@gmail.com
                          </a>
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                        >
                          Kolkata, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <a href="https://twitter.com/KrishKedia_" target='_blank' rel="noreferrer" >
                        <IconButton
                          aria-label="twitter"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#0D74FF" }}
                          icon={<BsTwitter size="28px" />}
                        />
                      </a>
                      <a href="https://github.com/Kristar1" target='_blank' rel="noreferrer" >
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#0D74FF" }}
                          icon={<BsGithub size="28px" />}
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/krish-kedia/" target='_blank' rel="noreferrer" >
                        <IconButton
                          aria-label="Linkedin"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#0D74FF" }}
                          icon={<BsLinkedin size="28px" />}
                        />
                      </a>
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg" width={['90vw', 'unset']}  >
                    <Box m={8} color="#0B0E3F" width={["unset", "25vw"]}>
                      <form action='https://formsubmit.co/kediak32@gmail.com' method="POST" value="table">
                        {/* <input type="hidden" name="_next" value="https://myportfolio-krish.vercel.app"></input> */}
                        <input type="hidden" name="_subject" value="New submission!"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <VStack spacing={5}>
                          <FormControl id="name">
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                              >
                                <BsPerson color="gray.800" />
                              </InputLeftElement>
                              <Input name="name" placeholder="name" type="text" size="md" _dark={{ color: 'black' }} />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Your Email</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                              >
                                <MdOutlineEmail color="gray.800" />
                              </InputLeftElement>
                              <Input name="email" placeholder="email" type="email" size="md" />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: "gray.300",
                              }}
                              _dark={{ color: 'black' }}
                              placeholder="message"
                              name="message"
                            />
                          </FormControl>
                          <FormControl id="name" float="right">
                            <Button
                              variant="solid"
                              bg="#0D74FF"
                              color="white"
                              width={['100%', 'unset']}
                              _hover={{}}
                              type='submit' onClick={() => { setMessage(' Thank You for your message, I will reply asap :)') }}
                            >
                              Send Message
                            </Button>
                            {<p className='message'>{message}</p>}

                          </FormControl>
                        </VStack>
                      </form>

                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>

  )
}

export default Contact
