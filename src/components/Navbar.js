import React, { useEffect, useState } from 'react'
import "../styles/Navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EmailIcon from '@mui/icons-material/Email';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


function Navbar () {
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
        console.log(position)

        if (position < 25) {
            setIndex(0)
        } else if (position < 50) {
            setIndex(1)
        } else if (position < 75) {
            setIndex(2)
        } else {
            setIndex(3)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleNavbar)
    },scrollPosition)

    return (
        <div className="navbar">
            <div className='links'>
               <Link to="/">
                    <button className={index === 0 ? 'button active' : 'button'} 
                    onClick={(() => {
                        window.scrollTo(0,0)
                    })}
                    > 
                        <HomeIcon/>
                    </button>
               </Link>
               <HashLink to="/#about-me">
                    <button className={index === 1 ? 'button active' : 'button'}>
                        <PersonIcon/>
                    </button>
               </HashLink>
                <HashLink to="/#projects">
                    <button className={index === 2 ? 'button active' : 'button'}>
                        <EmojiObjectsIcon/>
                    </button>
                </HashLink>
                <HashLink to="/#contact">
                    <button className={index === 3 ? 'button active' : 'button'}> 
                        <EmailIcon/>
                    </button>
                </HashLink>
            </div>
        </div>
    )
}
    
export default Navbar