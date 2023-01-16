import React, { useState, useEffect } from 'react'
import "../styles/Experience.css"

function Experience() {

  const [index, setIndex] = useState()

  const [scrollPosition, setScrollPosition] = useState(0)

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

      if (position < 65) {
        setIndex(2)
      } else if (position < 90) {
        setIndex(3)
      } else {
        setIndex(4)
      }
  }

  useEffect(() => {
      window.addEventListener("scroll", handleNavbar)
  })

  return (
    <div className='experience' id='experience'>
      <h1 className={index === 3 ? 'title show' : 'title hidden'}>
        Academics and Activities
      </h1>
      <h3 className={index === 3 ? 'show content' : 'hidden content'}>
        <div>
          <h2>Education</h2>
          <p>GPA: 4.0</p>
        </div>
        <div>
          <h2>Activities</h2>
          <p></p>
        </div>
      </h3>
    </div>
  )
}

export default Experience