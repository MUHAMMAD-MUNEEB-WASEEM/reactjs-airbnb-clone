import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './Banner.css';
import Search from './Search';

function Banner() {
    const [showSearch, setShowSearch] = useState(false)
    
    //Its like browser tracking your history. Its redirecting us to required place
    const history = useHistory();

    return (
        <div className='banner'>
            
            <div className='banner__search'>
                
                {showSearch && <Search/>}
                {/*if show picker state becomes true, then search part will run*/}
                {/*we do this by making setShowSearch((!showSearch) on clicking this button */}
                
                <Button 
                 variant="outlined"
                 className='banner__searchButton'
                 onClick={()=>setShowSearch(!showSearch)}>
                     {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>


            <div className='banner__info'>
            
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button 
                /*it will take us to search page*/
                 onClick={()=>history.push('/search')}
                 variant="outlined" >
                     Explore Nearby
                </Button>
            </div>

        </div>
    )
}

export default Banner
