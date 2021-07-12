import React from 'react'
import "../CSS-Components/Header.css"
import PersonPinIcon from '@material-ui/icons/PersonPin';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonPinIcon fontSize='large' className="header__icon" />
            </IconButton>

            <img className="header__logo" 
                src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png"
                alt="tinder logo" 
            />
            <IconButton >
                <ChatIcon fontSize="large" className="header__icon"/>
            </IconButton>
            
            
        </div>
    )
}

export default Header
