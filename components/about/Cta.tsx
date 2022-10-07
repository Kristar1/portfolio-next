import { Box, Flex , chakra, Stack, Link, Heading, Button} from '@chakra-ui/react'
import React from 'react'

const Cta = () => {
  return (
    <Flex
  _dark={{
    bg: "#000000",
  }}
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Flex
    justify="center"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    w="full"
  >
    <Box

      w={{
        base: "full",
        md: "75%",
        lg: "50%",
      }}
      px={4}
      py={20}
      textAlign={{
        base: "left",
        md: "center",
      }}
    >
      <chakra.span
        fontSize={{
          base: "3xl",
          sm: "4xl",
        }}
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="shorter"
        color="gray.900"
        _dark={{
          color: "gray.100",
        }}
        mb={6}
      >
        <Heading as='h2' display="block">Have a project in mind?</Heading>
        <Heading
        as='h2'
          display="block"
          color="brand.600"
          _dark={{
            color: "gray.200",
          }}
        >
        Feel free to share it!
        </Heading>
      </chakra.span>
      <Stack
        justifyContent={{
          base: "left",
          md: "center",
        }}
        direction={{
          base: "column",
          sm: "row",
        }}
        spacing={2}
        mt={2}
      >
        <Box display="inline-flex" rounded="md" shadow="md"  mt='6'
           >
          <Link href='/contact' textDecoration='none' _hover={{textDecoration:'none'}} >
              <Button
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'#0919cd'}
                bg={'#0919cd'}
                _dark={{color:'white'}}

                className='btn-blue-tr'
                >
                Contact me
              </Button>
        </Link>
        </Box>
        <Box ml={3} display="inline-flex" rounded="md" shadow="md">
          {/* <Link
            w="full"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            rounded="md"
            color="brand.600"
            bg="white"
            _hover={{
              bg: "brand.50",
            }}
          >
            Learn more
          </Link> */}
        </Box>
      </Stack>
    </Box>
  </Flex>
</Flex>
  )
}

export default Cta