import { Box } from '@chakra-ui/react'
import React from 'react'
import Cta from '../components/about/Cta'
import Section1 from '../components/about/Section1'
import Tools from '../components/about/Tools'

import Portfolio from '../components/Portfolio/Portfolio'


const about = () => {
  return (
   <Box minH='100vh'>
   <Section1/>
   <Tools/>
   <Cta/>
   </Box>
  )
}

export default about