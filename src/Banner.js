import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import Search from './Search';
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState
    (false);

    return (
        <div className='banner'>
          <div className='banner_info'>
              
              <h1>The world is waiting for YOU :) </h1>
              <Button onClick={() => history.push('/search')}
              variant='outlined'>
                  Showcase your Skills!
              </Button>
              </div>  
        </div>
    )
}

export default Banner
