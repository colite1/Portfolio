import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className ="experience__details-icon" />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className ="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className ="experience__details-icon" />
              <div><h4>Javascript</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
           
            <article className="experience__details">
              <BsFillPatchCheckFill className ="experience__details-icon" />
              <div><h4>ReactJS</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className ="experience__details-icon" />
              <div><h4>Redux</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className ="experience__details-icon" />
              <div><h4>Tailwind</h4>
              <small className='text-light'>Begineer</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsFillPatchCheckFill className ="experience__details-icon" />
              <div><h4>NodeJS</h4>
              <small className='text-light'>Begineer</small></div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className ="experience__details-icon" />
              <div><h4>MongoDB</h4>
              <small className='text-light'>Begineer</small></div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className ="experience__details-icon" />
              <div><h4>ExpressJS</h4>
              <small className='text-light'>Begineer</small></div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default experience