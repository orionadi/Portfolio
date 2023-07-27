import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {BsStack} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaGraduationCap className='about__icon'/>
              <h5>Dropout</h5>
              <small>BTech(CSE) II Year</small>
            </article>

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Fresher</h5>
              <small>Hire Me!</small>
            </article>

            <article className="about__card">
              <BsStack className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
          I am an aspiring Software Engineer and a college dropout. I am good at programming and problem-solving, packed with a creative mindset. Currently, I am looking forward to opportunities to work in software development fields (FullStack/AndroidDev) and showcase my skills to achieve organizational goals and also prove that anyone can get along in this field WITHOUT a college degree, but with associated skills. Looking for an internship/job to kick-start my career journey with an innovative organization that somehow impacts people's lives and their lifestyles along with my personal goal that might lead to a revolution in tech.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About