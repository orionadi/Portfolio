import React from 'react'
import './experience.css'
import {MdVerified} from 'react-icons/md'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light small">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>XML</h4>
                <small className="text-light small">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className="text-light small">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>BootStrap</h4>
              <small className="text-light small">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className="text-light small">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>JQuery</h4>
              <small className="text-light small">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className="text-light small">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>WordPress</h4>
              <small className="text-light small">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Java</h4>
              <small className="text-light small">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Kotlin</h4>
              <small className="text-light small">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className="text-light small">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className="text-light small">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className="text-light small">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className="text-light small">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>C++</h4>
              <small className="text-light small">Experienced</small>
              </div>
            </article>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Experience