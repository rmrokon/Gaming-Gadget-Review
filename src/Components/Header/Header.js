import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='links'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='dashboard'>Dashboard</CustomLink>
                <CustomLink to='reviews'>Reviews</CustomLink>
                <CustomLink to='blog'>Blog</CustomLink>
                <CustomLink to='about'>About</CustomLink>
            </div>
            <hr className='header-hr' />
        </div>
    );
};

export default Header;