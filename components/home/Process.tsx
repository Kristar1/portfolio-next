import React from "react";
import { Icon } from "@iconify/react";
import { TbBulb} from 'react-icons/tb'
import {HiOutlineCode} from 'react-icons/hi'
import { Heading, Text } from "@chakra-ui/react";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// AOS.init();

export default function Process() {
  return (
    <div className="process" id="process">
      <Heading as='h2' fontSize='4xl' >My Process</Heading>
      <div className="processWrapper">
        <div className="processItem">
         <TbBulb className="processIcon" />
          <Heading as='h3' fontSize='2xl' pb='10px' pt='20px' >Discovery</Heading>
          <Text pt='20px' fontSize='lg' fontWeight='medium' > 
            I conduct user research to identify the problem I want to solve.
          </Text>
        </div>
       

        <div className="processItem">
          <Icon
            className="bottom"
            icon="mdi:draw"
            // color="#16CE51"
            width="40"
            height="40"
          />
          <Heading as='h3' fontSize='2xl'  pb='10px' pt='5px' >Ideate</Heading>
          <Text pt='20px'fontSize='lg' fontWeight='medium' > 
            I create wireframes using Figma and sketches of the product I’m
            about to design.
          </Text>
        </div>
        <div className="processItem">
         <HiOutlineCode className="processIcon"/>
          <Heading as='h3' fontSize='2xl' pb='10px' pt='20px'  >Development</Heading>
          <Text pt='20px' fontSize='lg' fontWeight='medium' > 
            After designing i develop the website using the tools preferred by
            the client.
          </Text>
        </div>
      </div>
    </div>
  );
}
