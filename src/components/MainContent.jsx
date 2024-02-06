import React, { useState } from 'react'
import GirlMobile from '../assets/hero-mobile.jpg'
import Arrow from '../assets/icon-arrow.svg'
import Error from '../assets/icon-error.svg'
import GirlDesktop from '../assets/hero-desktop.jpg'
import Header from './Header'


function MainContent() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(true);
  const [send, setSend] = useState(false);

  const emailValidation = (e) => {
    setSend(false); // to clear previous success message on the next email change

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //regular expression to validate emails
    var emailValue = e.target.value;
    setEmail(emailValue);

    if (email.match(emailRegex)) {
      setMessage(true);
    } else {
      setMessage(false);
    }
  }

  function handleClick() {
    //if email is falsy(empty) set message to false(error elements) and if email is true and message is true(email match with email regex), send=true (success message)
    (!email) ? setMessage(false) : setSend(message);
  }
  
  return (
    <>
      <img className='hero-img-desktop' src={GirlDesktop} alt="girl" />
      <div className='main-content'>
       <Header /> 
      <div className='main-content__wrapper'>
        <img className='hero-img-mobile' src={GirlMobile} alt="girl" />
          <div className="main-content__txt-wrapper">
              <h1 className='main-content__heading'>We're <span>coming soon</span></h1>
              <p className='main-content__txt'>Hello fellow shoppers! We're currently building our new fashion store. 
              Add your email below to stay up-to-date with announcements and our launch deals.</p>
          
            <div className={message ? 'main-content__form' : 'main-content__form main-content__form-error'} >
            <input id='email' className='main-content__input' type="text" placeholder='Email Address' autoComplete='off' value={email} onChange={emailValidation} required />
              {message ? null : <img className='main-content__error' src={Error} alt="error" /> }
              <button className='main-contnetn__btn' onClick={handleClick} id="send" title="send"><img className='main-content__btn__img' src={Arrow} alt="" /></button>
            </div>
            {message ? null : <p className='main-content__msg error-msg'>Please Provide a valid email</p>}
            {send && (<p className='main-content__msg success-msg'>Thank you! We will keep you updated.</p>)}
          </div>
    </div>
    </div>
    </>
  )
}

export default MainContent
