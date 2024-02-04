import React from 'react'
import Logo from '../assets/logo.svg'

function Header() {
  return (
    <header>
      <img className='header__logo' src={Logo} alt="logo" />
    </header>
  )
}

export default Header
