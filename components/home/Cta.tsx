import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  chakra,
  Icon,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing={0}
      >
        <Flex>
          <Image
            src="/assets/chat2.png"
            fit="cover"
            w="full"
            h={{
              base: 64,
              md: "full",
            }}
            loading="lazy"
          />
        </Flex>
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{
            base: 4,
            md: 8,
            lg: 20,
          }}
          py={24}
          zIndex={3}
        >
          {/* <chakra.span
            color="brand.600"
            _dark={{
              color: "gray.300",
            }}
            fontSize="lg"
            textTransform="uppercase"
            fontWeight="extrabold"
          >
            Award winning support
          </chakra.span> */}
          <chakra.h1
            mb={4}
            fontSize={{
              base: "4xl",
              md: "4xl",
              lg: "5xl",
            }}
            fontWeight="bold"
            color={'blue.400'}
           
            lineHeight="shorter"
            textShadow="2px 0 currentcolor"
          >
        Currently looking for Freelance or Part Time Opportunities
          </chakra.h1>
          <chakra.p
            pr={{
              base: 0,
              lg: 16,
            }}
            mb={4}
            fontSize="lg"
            letterSpacing="wider"
            color={"gray.500"}
            _dark={{ color: "gray.200" }}
          >
            Have an exciting project you need help with? Send me an email or
            contact me via instant message!
          </chakra.p>
          <Box display="inline-flex" rounded="md" shadow="md">
            {/* <chakra.a
              mt={2}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              _light={{
                color: "white",
              }}
              bg="brand.600"
              _dark={{
                bg: "brand.500",
              }}
              _hover={{
                bg: "brand.700",
                _dark: {
                  bg: "brand.600",
                },
              }}
            >
              Contact me
            </chakra.a> */}
             <Link href='/contact' >
              <Button
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                mt='5'
                colorScheme={'#0919cd'}
                bg={'#0919cd'}
                _dark={{color:'white'}}
                className='btn-blue-tr'
                >
                Contact me
              </Button>
              </Link>
          </Box>
        </Flex>
      </SimpleGrid>
    </>
  );
};

export default Cta;
