import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub,BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target = '_blank' rel='a'><BsLinkedin/></a>
        <a href='https://github.com' target = '_blank' rel='a'><BsGithub/></a>
        <a href='https://instagram.com' target = '_blank' rel='a'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials