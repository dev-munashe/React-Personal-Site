import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.avif'
import IMG2 from '../../assets/portfolio2.webp'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.avif'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="pot1" />
          </div>
          <h3>Crypto Currency Dashboard & Financial Visualization</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="pot1" />
          </div>
          <h3>Charts Templates & infographics in Figma</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="pot1" />
          </div>
          <h3>Figma Dashboard UI kit for data design web apps</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://www.figma.com/file/pwCBLD0olSg7PE9zgbBoEZ/Data-Design-Web-App?t=ywjPxVchowJYOuBj-" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="pot1" />
          </div>
          <h3>Maintaining tasks and tracking progress</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="pot1" />
          </div>
          <h3>Charts Templates & infographics in Figma</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="pot1" />
          </div>
          <h3>Charts Templates & infographics in Figma</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio