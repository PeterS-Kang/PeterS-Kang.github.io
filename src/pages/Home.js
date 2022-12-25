import React, { useEffect } from 'react'
import TypewriterComponent, { TypewriterClass } from 'typewriter-effect'

import '../styles/Home.css'
import Portfolio from './Portfolio'

function Home() {


  return (
    <div className='home'>
      <div className='header'>
        <h1 className='intro'>
          Hi, my name is <span className='name name-hover'>Peter Kang.</span>
          <div className='typewriter'>
          <TypewriterComponent
          options={{
            strings: ["a Computer Science student at \nPurdue University", "an Avid Learner","a Full Stack Developer"],
            autoStart: true,
            loop: true
          }}/>
        </div>
        </h1>
      </div>
    </div>
  )
}

export default Home