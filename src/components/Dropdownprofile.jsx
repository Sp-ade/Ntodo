import React from 'react'
import { Link } from 'react-router-dom'

const Dropdownprofile = () => {
  return (
    <div className='dropProfile'>
      <Link to='/' className='myLink'><h5>Home</h5></Link>
      <Link to='/Bin' className='myLink' ><h5>Bin</h5></Link>
    </div>
  )
}

export default Dropdownprofile
