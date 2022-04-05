import { MenuAlt4Icon, MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className='bg-orange-100'>
                <div onClick={() => setIsOpen(!isOpen)} className='w-6 h-6 md:hidden'>
                    {isOpen ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={`md:flex justify-center items-center text-center md:static absolute duration-500 md:text-lg md:h-16 font-bold bg-orange-100 ease-in w-full ${isOpen ? 'top-6' : 'top-[-120px]'}`}>
                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='dashboard'>Dashboard</CustomLink>
                    <CustomLink to='reviews'>Reviews</CustomLink>
                    <CustomLink to='blog'>Blog</CustomLink>
                    <CustomLink to='about'>About</CustomLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;