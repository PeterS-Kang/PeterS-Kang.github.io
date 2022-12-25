import React from 'react'
import '../styles/About.css'
import photo from '../Picture.jpg'

function Portfolio() {
  return (
    <div className='about-me' id='about-me'>
      <h1 className='title'>
        ABOUT ME
      </h1>
      <div className='content'>
        <div className='imagebox'>
          <img src={photo} className='photo'></img>
        </div>
        <div className='description'>
          <p>
            I am an undergraduate student studying Computer Science. I am an eager learner who enjoys learning new technologies and creating expansive projects. My expected graduation date is December 2025.
          </p>
          <button className='button-resume button-hover'>
            Resume
          </button>


        </div>
      </div>
    </div>
  )
}

export default Portfolio