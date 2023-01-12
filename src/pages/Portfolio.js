import React, { useEffect, useState } from 'react'
import '../styles/About.css'
import photo from '../Picture.jpg'


function Portfolio() {

  const [index, setIndex] = useState()

  const [scrollPosition, setScrollPosition] = useState(0)

  const goToResume = () => {
    window.location.href = '/resume'
  }
  
  const getScrollPercent = () => {
      var h = document.documentElement, 
          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight';
      return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  }


  const handleNavbar = () => {
      const position = getScrollPercent()
      setScrollPosition(position)

    if (position < 13) {
      setIndex(0)
    } else if (position < 40) {
      setIndex(1)
    } else {
      setIndex(2)
    }
  }

  useEffect(() => {
      window.addEventListener("scroll", handleNavbar)
  })


  return (
    <div className='about-me' id='about-me'>
      <h1 className={index === 1 ? 'title show' : 'title hidden'}>
        ABOUT ME
      </h1>
      <div className={index === 1 ? 'content show' : 'content hidden'}>
        <div className='imagebox'>
          <img src={photo} className='photo'></img>
        </div>
        <div className='description'>
          <p>
            I am an undergraduate student studying Computer Science. I am an eager learner who enjoys learning new 
            technologies and creating expansive projects. My expected graduation date is May/December 2025.
          </p>
          <button className='button-resume button-hover' onClick={goToResume}>
            Resume
          </button>


        </div>
      </div>
    </div>
  )
}

export default Portfolio