import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>My Milestones</h5>
      <h2>Achievements</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Completed 10+ Projects</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Built Websites/Webpages from scratch</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Certified in HTML, CSS, JS</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Certified in React, jQuery</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Completed courses on PHP, SQL, MongoDB, WordPress</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implemented Responsive Designs</p>
            </li>
             
          </ul>
        </article>
        {/* end of 1st service */}

        <article className="service">
          <div className="service__head">
            <h3>Android Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Completed 20+ Projects</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Built Android apps from scratch</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Certified/Learnt from reputable platforms</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient in Kotlin, Java</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed innovative UI/UX designs</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implemented Firebase features</p>
            </li>

            
          </ul>
        </article>
        {/* end of 2nd service */}

        <article className="service">
          <div className="service__head">
            <h3>Data Structures & Algorithms</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Solved 200+ Problems</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Learnt from different platforms</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Participated in coding challenges</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Active on competitive platform like <a href="https://leetcode.com/orioninthespace/">Leetcode</a></p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient in Java, Python, C++</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Received Positive feedbacks from Peers, Mentors</p>
            </li>

            
          </ul>
        </article>
        {/* end of 3rd service */}
      </div>
    </section>
  )
}

export default Services