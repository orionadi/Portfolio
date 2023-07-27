import React from 'react'
import './footer.css'
import {BsTwitter, BsFacebook, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">A D I T Y A</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Achievements</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/aditya.saurabh.73" target='_blank'><BsFacebook/></a>
        <a href="https://www.instagram.com/orion_adi" target='_blank'><BsInstagram/></a>
        <a href="https://twitter.com/orionadi" target='_blank'><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aditya Orion Saurabh. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer