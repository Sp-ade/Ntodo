import React, { useState } from 'react'
import logo from "../images/slack.png"
import { Link } from 'react-router-dom'
import chevron from "../images/down-chevron.png"


const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false)
    
  
  return (
    <div className='navi'>
      <div id='icon'><img src={logo} alt="LOGO" width="40px"  height="40px" /></div>
      <div id='chev'><i className={`icn fa fa-chevron-up ${openProfile? 'active' : 'inactive'}`} onClick={() => setOpenProfile(!openProfile)} /></div>
      <div id='navitems'>
        <Link to='/' className='myLink'><h5>Home</h5></Link>
        <Link to='/Bin' className='myLink' ><h5>Bin</h5></Link>
      </div>
      <div className={`dropProfile ${openProfile? 'active' : 'inactive'}`}>
      <Link to='/' className='myLink'><h5>Home</h5></Link>
      <Link to='/Bin' className='myLink' ><h5>Bin</h5></Link>
    </div>
    </div>
  )
  
  
}


export default Navbar
