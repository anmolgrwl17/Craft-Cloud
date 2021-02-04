import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header"> 
        <Link to='/'>
           <img
            className="header_icon"
           src="https://i.pinimg.com/originals/39/8a/8b/398a8ba62237e893f95962919506f087.jpg"
           alt=""
           />
        </Link>

        <div className="header_center">
            <input type="text" />
            <SearchIcon />
            </div>
        
        <div className="header_right">
            <a>Explore</a>
            <a>Login/Register</a>
            <LanguageIcon/>
            <ExpandMoreIcon/>
            <Avatar/>
        </div>
        </div>
    )
}

export default Header
 