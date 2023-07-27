import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data=[
  {
    id: 1,
    image: IMG1,
    title: 'Personal Portfolio',
    small: '(React)',
    github: 'https://github.com/orionadi/PersonalPortfolio',
    demo: 'https://orionbelt.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Weather App',
    small: '(JavaScript+API)',
    github: 'https://github.com/orionadi/WeatherApp',
    demo: 'https://codepen.io/orionadi/details/PoxoeMv'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Movie Review',
    small: '(JavaScript+API)',
    github: 'https://github.com/orionadi/MovieReviewApp',
    demo: 'https://codepen.io/orionadi/details/NWEbVQa'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Random Gift Picker',
    small: '(JQuery+CSS Animation)',
    github: 'https://github.com/orionadi/Random-gift-picker',
    demo: 'https://codepen.io/orionadi/details/PomezMd'
  },
  {
    id: 5,
    image: IMG5,
    title: 'CRUD REST API',
    small: '(Java+Springboot+MySQL)',
    github: 'https://github.com/orionadi/CRUD-RESTful-API',
    demo: 'https://github.com/orionadi/CRUD-RESTful-API'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Unscrammble Game',
    small: '(Kotlin+Android Studio)',
    github: 'https://github.com/orionadi/UnscrambleApp',
    demo: 'https://github.com/orionadi/UnscrambleApp'
  }
    
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio Projects</h2>

      <div className="container portfolio__container">
        {data.map(({id, image, title, github, demo, small})=>{
          return(
            <article key={id} className="portfolio__item">
          
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>

              <h3>{title} <span className='text-light little'>{small}</span></h3>

              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>

            </article>
          )
        })
        
        }
      </div>
      <div className='seemore'>
        <a href="https://github.com/orionadi?tab=repositories" target='_blank'>See more...</a>
      </div>
      
    </section>
  )
}

export default Portfolio