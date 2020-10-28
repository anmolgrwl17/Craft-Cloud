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
           src="https://cdn.logo.com/hotlink-ok/logo-social.png"
           alt=""
           />
        </Link>

        <div className="header_center">
            <input type="text" />
            <SearchIcon />
            </div>
        
        <div className="header_right">
            <a>Explore</a>
            <a>Messages</a>
            <a>Orders</a>
            <a>Profile</a>
            <LanguageIcon/>
            <ExpandMoreIcon/>
            <Avatar/>
        </div>
        </div>
    )
}

export default Header
 