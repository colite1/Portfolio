import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter,BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#about' className='footer__logo'>Ankit</a>
      <ul className='permalinks'>
        <li><a href='#about'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href='https://linkedin.com' target = '_blank' rel='noreferrer noopener'><BsLinkedin/></a>
        <a href='https://github.com' target = '_blank' rel='noreferrer noopener'><BsTwitter/></a>
        <a href='https://instagram.com' target = '_blank' rel='noreferrer noopener'><BsInstagram/></a>
      </div>
    
    </footer>
  )
}

export default Footer