import React from 'react'
import './Header.css';

import FlashOnIcon from '@material-ui/icons/FlashOn';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
function Header() {
    return (
        <div className="header">
                <div className="header__icons">
                <div className="header__icon header__icon--active">
                <HomeIcon/>
                <p>Home</p>
                </div>

            
                <div className="header__icon">
                <FlashOnIcon/>
                <p>Trending</p>
                </div>


                <div className="header__icon">
                <LiveTvIcon/>
                <p>verified</p>
                </div>


                <div className="header__icon">
                <ShopTwoIcon/>
                <p>Collection</p>
                </div>


                <div className="header__icon">
                <SearchIcon/>
                <p>Search</p>
                </div>


                <div className="header__icon">
                <PermIdentityIcon/>
                <p>Account</p>
                </div>
               
               
                
                
               
                </div>

                <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"/>
        </div>
    )
}

export default Header
