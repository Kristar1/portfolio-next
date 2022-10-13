import React from 'react'
import { Box, Image , chakra, Tabs, TabList, Tab, TabPanels, TabPanel, Center} from '@chakra-ui/react';
import { Icon } from '@iconify/react';

const Tools = () => {
  return (
      <Box className='Skills' >
           <chakra.h2
            mb={4}
            fontSize={{
              base: "2xl",
              md: "4xl",
            }}
            textAlign={{
              base: "center",
              md: "center",
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
           Tech Stack I Know
          </chakra.h2>

          <Tabs   variant='soft-rounded' colorScheme='blue'>
<Center>
  <TabList my='10'margin='0 10px' backgroundColor='white' p={['5px','10px']} borderRadius='40px' className='TabList' >
    <Tab fontSize={{base:'13px'}} >Frontend</Tab>
    <Tab fontSize={{base:'13px'}} >Backend</Tab>
    <Tab fontSize={{base:'13px'}} >Website Builders</Tab>
    <Tab fontSize={{base:'13px'}} >CSS Libraries</Tab>

    
  </TabList>
</Center>

  <TabPanels>
    <TabPanel color='white' >
  <Center>
      <Box display='flex' flexWrap='wrap' width={['80vw','50vw']} >

    <Icon className='Icon' icon="logos:react" rotate={1} hFlip={true} />
    <Icon  className='Icon' icon="vscode-icons:file-type-html" />
   <Icon  className='Icon color-blue'   icon="akar-icons:css-fill" />
   <Icon className='Icon' icon="logos:javascript"  />
   <Icon className='Icon' icon="logos:typescript-icon" />
   <Icon className='Icon color-white'  icon="file-icons:nextjs"  />
   <Icon className='Icon color-white' icon="akar-icons:github-fill" />
   <Icon  className='Icon' icon="logos:figma" />
   <Icon  className='Icon' icon="logos:react-query-icon" />
   <Icon className='Icon color-orange' icon="fa6-brands:git-alt" />
   <Icon   className='Icon'  icon="logos:netlify" />
   <Image height='50px' mt='60px' src='/assets/vercel.png' />
   </Box>
  </Center>

    </TabPanel>
    <TabPanel>
      <Center>
      <Box display='flex' flexWrap='wrap' width={['80vw','50vw']} >

    <Icon className='Icon'  icon="vscode-icons:folder-type-mongodb"  />
    <Icon  className='Icon color-white'  icon="simple-icons:express" />
    <Icon className='Icon' icon="logos:nodejs-icon" />
    <Icon  className='Icon'   icon="logos:axios" />
   <Image width='300px' src='/assets/strapi.png'/>
   <Image width='200px'  mt='60px'  height='104px' src='/assets/graphql.png'/>
   </Box>
      </Center>
    </TabPanel>
    <TabPanel>
     <Center>
     <Box display='flex' flexWrap='wrap' width={['80vw','50vw']} >

   <Icon  className='Icon'  icon="logos:webflow" />
   <Icon  className='Icon' icon="logos:figma" />
   <Image m='10' src='/assets/wordpress.png' width='100px'/>
   <Image mt='70px' src='/assets/wix.webp' width='100px' height='30px' />
   <Image  mt='60px' src='/assets/squarespace.png' width='400px' height='90px' />
   <Icon  className='Icon' icon="logos:shopify" />

   </Box>

     </Center>
    </TabPanel>
    <TabPanel>
    <Center>
     <Box display='flex' flexWrap='wrap' width={['80vw','50vw']} >

    <Icon className='Icon' icon="logos:material-ui" />
    <Icon className='Icon color-blue' icon="simple-icons:chakraui" />
    <Icon  className='Icon' icon="logos:tailwindcss-icon" />
    <Icon  className='Icon' icon="logos:bootstrap" />
    </Box>

</Center>
    </TabPanel>
  </TabPanels>
</Tabs>

      </Box>
  )
}

export default Tools