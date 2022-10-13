import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  shouldForwardProp,
  chakra
} from "@chakra-ui/react";
import Link from "next/link";
import { isValidMotionProp, motion } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Hero2() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        height="100vh"
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack
          flex={1}
          spacing={{ base: 5, md: 10 }}
          // as={motion.div}
          // initial={{
          //   x: "-1000",
          // }}
          // transition="3s"
          // animate={{
          //   // y:299,
          //   x: 0,
          // }}
        >
          <Text fontSize={"20px"}>Hi , I&apos;m</Text>
          <Heading
            as="h1"
            style={{ marginTop: "20px" }}
            lineHeight={1.1}
            fontWeight={600}
            
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text  position={"relative"}
            as={motion.div}
            initial={{
              x: "-1000",
            }}
            transition="0.2s"
            animate={{
              // y:299,
              x: 0,
            }}
            >
              Krish kedia
            </Text>
            {/* <br /> */}
            <Text color={"blue.400"}  as={motion.div}
          initial={{
            x: "-1000",
          }}
          transition="0.4s"
          animate={{
            // y:299,
            x: 0,
          }}>
              I build things for the web.
            </Text>
          </Heading>
          <Text color={"gray.500"} fontSize="lg" _dark={{ color: "gray.200" }}  as={motion.div}
          initial={{
            x: "-1000",
          }}
          transition="0.8s"
          animate={{
            // y:299,
            x: 0,
          }}>
            I will help your team win customers by building value through
            strategic web design, people-centric digital experiences, and
            developing high-quality websites that stand out from the
            competition.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Link href="/contact">
              <Button
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"#0919cd"}
                bg={"#0919cd"}
                _dark={{ color: "white" }}
                className="btn-blue-tr"
              >
                Contact me
              </Button>
            </Link>
          </Stack>
        </Stack>
        <ChakraBox

          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
          as={motion.div}
          // animation={animation}
          initial={{
            y:50
          }}
          animate={{
            y:20
          }}
           transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
          
         
        >
          <Image
            alt={"Hero Image"}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={"100%"}
            src={"/assets/dev.png"}
          />
        </ChakraBox>
      </Stack>
    </Container>
  );
}

