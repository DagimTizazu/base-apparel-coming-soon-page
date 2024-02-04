import React from 'react'
import GirlMobile from '../assets/hero-mobile.jpg'
import Arrow from '../assets/icon-arrow.svg'
import Error from '../assets/icon-error.svg'
import GirlDesktop from '../assets/hero-desktop.jpg'


function MainContent() {
  return (
    <>
      <img className='hero-img-desktop' src={GirlDesktop} alt="girl" />
    <main>
      <div className='main-content__wrapper'>
        <img className='hero-img-mobile' src={GirlMobile} alt="girl" />
          <div className="main-content__txt-wrapper">
              <h1 className='main-content__heading'>We're <span>coming soon</span></h1>
              <p className='main-content__txt'>Hello fellow shoppers! We're currently building our new fashion store. 
              Add your email below to stay up-to-date with announcements and our launch deals.</p>
          
          <form className='main-contnetn__form'>
            <input className='main-content__input' type="text" placeholder='Email Address' />
            <img className='main-content__error' src={Error} alt="error" />
            <button className='main-contnetn__btn'><img className='main-content__btn__img' src={Arrow} alt="" /></button>
          </form>
          <p className='main-contnent__error-msg'>Please Provide a valid email</p>
          </div>
    </div>
    </main>
    </>
  )
}

export default MainContent
