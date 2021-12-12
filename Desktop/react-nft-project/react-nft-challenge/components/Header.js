import React from 'react';
import './Header.css';
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchBar from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png';

const Header = () => {
    return (
        <div className='header'>≈
            <div className='logoContainer'>
                <h2>I'm the Header</h2>
                <img src={punkLogo} className='punkLogo' alt=''></img>
            </div>

            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} />
                </div>
                <input className='searchInput' placeholder='Collection, item or user ...' />
            </div>

            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            
            <div className='headerActions'>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon} />
                </div>
            </div>

            <div className='loginButton'>
                GET IN
            </div>
        </div>
    )
}
export default Header;