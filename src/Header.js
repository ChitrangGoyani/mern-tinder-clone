import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className='header'>
           
            <IconButton><PersonIcon fontSize="large" className="header__icon"/></IconButton>
            <img
            className="header__logo"
            src="https://www.flaticon.com/svg/vstatic/svg/408/408790.svg?token=exp=1614678619~hmac=fb7ced7e17492f57804a2842a92540e2"
            alt="Tinder_Icon"
            
            ></img>

<IconButton><ForumIcon fontSize="large" className="header__icon"/></IconButton>
        </div>
    )
}

export default Header
