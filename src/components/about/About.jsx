import React from 'react'
import './about.css'
import Me from '../../assets/shawty.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt='me'/>
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ months of studying</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>4+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>Hard-working listing programmer with a flair for creating elegant solutions in the least amount of time.
               As a freelance programmer, created SAS datasets of clinical data and developed macro programs to improve 
               efficiency and quality of data management for Takeda Pharmaceuticals.
            </p>

            <a href='#contact' className='btn btn-primary'>Let`s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About