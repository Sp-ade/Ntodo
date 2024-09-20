import React from 'react'
import { Link } from 'react-router-dom'
import {openProfile} from './Navbar'
const Dropdownprofile = () => {
  return (
      <Link to='/' className='myLink'><h5>Home</h5></Link>
      <Link to='/Bin' className='myLink' ><h5>Bin</h5></Link>

  )
}

export default Dropdownprofile
