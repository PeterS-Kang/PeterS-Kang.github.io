import React, { useState, useEffect } from 'react'
import "../styles/Projects.css"
import photo from "../Marketplace.png"
import Boilerhunt from "../Boilerhunt.png"

function Projects() {

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

    if (position < 50) {
      setIndex(1)
    } else if (position < 75) {
      setIndex(2)
    } else {
      setIndex(3)
    }
  }

  useEffect(() => {
      window.addEventListener("scroll", handleNavbar)
  })

  return (
    <div className='projects' id='projects'>
      <h1 className={index === 2 ? 'title show' : 'title hidden'}>
        PROJECTS
      </h1>
      <div className='content'>
        <div className={index === 2 ? 'project-show' : 'project-left-hidden'}>
          <div className='project-content'>
            <h2>BoilerHunt</h2>
            <img className='project-photo' src={Boilerhunt}></img>
            <p className='project-info'>
              A mobile application created with React Native, Express, NodeJs, and MongoDB. <br/> <br/>
              Utilizes location tracking and an interactive map to serve as a guide to Purdue's vast campus. <br/> <br/>
              Used HTTP requests to access/modify data from MongoDB.
            </p>
          </div>
        </div>
        <div className={index === 2 ? 'project-show' : 'project-right-hidden'}>
          <div className='project-content'>
            <h2>Marketplace</h2>
            <img className='project-photo' src={photo}></img>
            <p className='project-info'>
              Created a Marketplace using Java for users to sell/buy items and edit account information. <br/> <br/> 
              The system takes each client on a thread and concurrently updates the status of the availability and quantity of items in the Marketplace. <br/> <br/>
              Utilizes Java's Swing toolkit to craft GUIs to create an accessible system. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects