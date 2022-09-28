import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />

            <div>
                <a href="./Home">Home</a>
                <a href="./shop">Shop</a>
                <a href="./inventoru">Inventory</a>
                <a href="./log in">log in</a>

            </div>
        </nav>
    );
};

export default Header;