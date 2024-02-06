import React from 'react'
import Logo from '../assets/logo.svg'

function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src={Logo} alt="logo" />
    </div>
  )
}

export default Header
