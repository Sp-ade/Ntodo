import React, { useState } from 'react'
import logo from "../images/slack.png"
import { Link } from 'react-router-dom'
import chevron from "../images/down-chevron.png"
import Dropdownprofile from './Dropdownprofile'

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false)
  return (
    <div className='navi'>
      <div id='icon'><img src={logo} alt="LOGO" width="40px"  height="40px" /></div>
      <div id='chev'><img onClick={() => setOpenProfile((prev) => !prev)} src= {chevron} alt='chvron'/> </div>
      <div id='navitems'>
        <Link to='/' className='myLink'><h5>Home</h5></Link>
        <Link to='/Bin' className='myLink' ><h5>Bin</h5></Link>
      </div>
      {openProfile && <Dropdownprofile/>}
      
    </div>
  )
}

export default Navbar
