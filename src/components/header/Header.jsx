import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from './../../assets/mine1.png'
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Ankit Pawar</h2>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
            <img src={ME} className= "me_img" alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
        
      </div>

    </header>
  )
}

export default Header