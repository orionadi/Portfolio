import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodepen} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aditya-o-saurabh/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/orionadi" target='_blank'><FaGithub/></a>
        <a href="https://codepen.io/orionadi" target='_blank'><SiCodepen/></a>
    </div>
  )
}

export default HeaderSocials