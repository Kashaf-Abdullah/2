import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import navlogo from '../Assets/nav-logo.svg'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
    
      <img src={logo} alt="logo" />
     
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
