import { Box, Flex, SimpleGrid, chakra, Button , Image, Tabs, TabList, Tab, TabPanels, TabPanel, Text} from '@chakra-ui/react'
import React from 'react'

const Section1 = () => {
  return (
    <Flex
    // bg="#edf3f8"
    // _dark={{
    //   bg: "#3e3e3e",
    // }}
    p={[0,20]}
    pt={['70px','150px']}
    position='static'
    w="full"
    justifyContent="center"
    alignItems="center"
    // pt='70px'
  >
    <Box
    //   shadow="xl"
    //   bg="white"
    //   _dark={{
    //     bg: "gray.800",
    //   }}
      px={8}
    //   py={20}
      mx="auto"
    >
      <SimpleGrid
        alignItems="start"
        columns={{
          base: 1,
          md: 2,
        }}
        mb={24}
        spacingY={{
          base: 10,
          md: 32,
        }}
        spacingX={{
          base: 10,
          md: 24,
        }}
      >
       
        <Box
        //   w="fit-content"
        //   h="full"
        //   py={48}
        //   bg="gray.200"
        //   _dark={{
        //     bg: "gray.700",
        //   }}
          display='flex'
          alignItems='center'
          justifyContent='center'

        >
            <Image height='600px' src='/assets/pic.jpg' />
        </Box>
         <Box>
          <chakra.h2
            mb={4}
            fontSize={{
              base: "2xl",
              md: "4xl",
            }}
            textAlign={{
              base: "center",
              md: "left",
            }}
            color="gray.900"
            _dark={{
              color: "white",
            }}
            lineHeight={{
              md: "shorter",
            }}
            textShadow="2px 0 currentcolor"
          >
           About Me
          </chakra.h2>
          <Tabs variant='enclosed'>
          <Text fontSize='sm' textTransform='uppercase' fontWeight='thin' mb='20px' >Adjust bio length</Text>
  <TabList>
    <Tab >Long</Tab>
    <Tab>Medium</Tab>
    <Tab >Short</Tab>
  </TabList>
  <TabPanels>
  <TabPanel>
    <chakra.p
            mb={5}
            textAlign='left'
            color="gray.600"
            _dark={{
              color: "white",
            }}
            fontSize={{
              md: "xl",
            }}
            fontWeight='medium'
           
          >
            Hi,I am Krish Kedia a self taught and passionate MERN Stack Developer and UI/UX Designer from India currently looking for new exciting projects.
          </chakra.p>
          <chakra.p
            mb={5}
            textAlign='left'
            color="gray.600"
            _dark={{
              color: "white",
            }}
            fontSize={{
              md: "xl",
            }}
            fontWeight='medium'
          >
            I develop websites with Next.js, React, Mongodb as database and Node.js . I can also build professional websites with webflow.


          </chakra.p>
          <chakra.p
            mb={5}
            textAlign='left'
            color="gray.600"
            _dark={{
              color: "white",
            }}
            fontSize={{
              md: "xl",
            }}
            fontWeight='medium'
          >
          As a wearer of many hats, my experience also includes graphic design, typography and UI/UX Design . I&apos;m always curious and always learning...


          </chakra.p>
    </TabPanel>
    
    <TabPanel>
    <chakra.p
            mb={5}
            textAlign='left'
            color="gray.600"
            _dark={{
              color: "white",
            }}
            fontSize={{
              md: "xl",
            }}
            fontWeight='medium'
          >
            Hi,I am Krish Kedia a self taught and passionate MERN Stack Developer and UI/UX Designer from India currently looking for new exciting projects.
          </chakra.p>
          <chakra.p
            mb={5}
            textAlign='left'
            color="gray.600"
            _dark={{
              color: "white",
            }}
            fontSize={{
              md: "xl",
            }}
            fontWeight='medium'
          >
            I develop websites with Next.js, React, Mongodb as database and Node.js . I can also build professional websites with webflow.


          </chakra.p>
    </TabPanel>
    <TabPanel>
    <chakra.p
            mb={5}
            textAlign='left'
            color="gray.600"
            _dark={{
              color: "white",
            }}
            fontSize={{
              md: "xl",
            }}
            fontWeight='medium'
          >
            Hi,I am Krish Kedia a self taught and passionate MERN Stack Developer and UI/UX Designer from India .
          </chakra.p>
    </TabPanel>
   
  </TabPanels>
</Tabs>
        
          {/* <Button
            w={{
              base: "full",
              sm: "auto",
            }}
            size="lg"
            bg="gray.900"
            _dark={{
              bg: "gray.700",
            }}
            _hover={{
              bg: "gray.700",
              _dark: {
                bg: "gray.600",
              },
            }}
            color="gray.100"
            as="a"
          >
            Learn More
          </Button> */}
        </Box>
      </SimpleGrid>
     
    </Box>
  </Flex>
  )
}

export default Section1