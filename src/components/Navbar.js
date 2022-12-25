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
    const [index, setIndex] = useState(-1)

    const [scrollPosition, setScrollPosition] = useState(0)

    const handleNavbar = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
        if (position > 3500) {
            setIndex(4)
        } else if (position > 2600)  {
            setIndex(3)
        } else if (position > 1700) {
            setIndex(2)
        } else if (position > 900) {
            setIndex(1) 
        } else if (position < 900) {
            setIndex(0)
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
                <HashLink to="/#experience">
                    <button className={index === 3 ? 'button active' : 'button'}>
                        <WorkIcon/>
                    </button>
                </HashLink>
                <HashLink to="/#contact">
                    <button className={index === 4 ? 'button active' : 'button'}> 
                        <EmailIcon/>
                    </button>
                </HashLink>
            </div>
        </div>
    )
}
    
export default Navbar