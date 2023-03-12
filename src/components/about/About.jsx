import React from 'react'
import './About.css'
import ME from '../../assets/mine2.png';
import {FaAward} from 'react-icons/fa';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about_me" />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1.2+ Years </small>
            </article>
          
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Education</h5>
              <small>BE (IT) </small>
            </article>
        
          
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Current</h5>
              <small>Global Data </small>
            </article>
            
            </div>
          <p>Hye I'm a aspiring Frontend Developer constantly working to improve my skill and learn latest Technologies
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About