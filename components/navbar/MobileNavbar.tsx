import { FormLabel } from '@chakra-ui/react'
import React from 'react'

const MobileNavbar = () => {
  return (
    <>
    <input type="checkbox" id="active"/>
    <FormLabel _dark={{color:'white'}} for="active" className="menu-btn"><span></span></FormLabel>
    <label for="active" className="close"></label>
    <div className="wrapper">
      <ul>
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Services</a></li>
<li><a href="#">Gallery</a></li>
<li><a href="#">Feedback</a></li>
</ul>
</div>
</>
  )
}

export default MobileNavbar