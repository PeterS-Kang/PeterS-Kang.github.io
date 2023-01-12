import React, { useEffect, useState } from 'react'
import MessageForm from '../components/MessageForm'
import "../styles/Contact.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {

  const linkedInButton = () => {
    window.location.href="https://www.linkedin.com/in/peter-kang-234626243/"
  }

  const gitHubButton = () => {
    window.location.href="https://github.com/PeterS-Kang"
  }
  
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

      if (position < 90) {
        setIndex(3)
      } else {
        setIndex(4)
      }
      
  }

  useEffect(() => {
      window.addEventListener("scroll", handleNavbar)
  })

  return (
    <div className='contact' id='contact'>
      <div></div>
      <h1 className={index === 4 ? 'title show' : 'title hidden'}>
        Say Hi
      </h1>
      <div className='content'>
        <div className={index === 4 ? 'info-show' : 'info-hidden-left'}>
          <div>
            <h3>Phone</h3>
            <p>503-746-1730</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>kangpeter03@gmail.com</p>
          </div>
          <div className='icons'>
            <button className='iconbutton' onClick={linkedInButton}>
              <LinkedInIcon fontSize='large' className='icon'/>
            </button>
            <button className='iconbutton' onClick={gitHubButton}>
              <GitHubIcon fontSize='large' className='icon'/>
            </button>
          </div>
        </div>
        <div className={index === 4 ? 'form-container form-container-show' : 'form-container form-container-hidden'}>
          <MessageForm/>
        </div>
      </div>
    </div>
  )
}

export default Contact