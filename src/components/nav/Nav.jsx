import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiCodeAlt} from 'react-icons/bi'
import {BsAward} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><BiHomeAlt/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><BiUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BiCodeAlt/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''}><BsAward/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav