import React, { useEffect, useState } from 'react'
import "./header.scss"
import { NavLink } from 'react-router-dom';
import '../../assets/scss/variable.scss'
import logo from '../../assets/pics/logo.png'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToHomeSession = () => {
        const homeSessionElement = document.querySelector('.home-session');
        if (homeSessionElement) {
            homeSessionElement.scrollIntoView({ behavior: 'smooth' });
            setIsActive(true);
        }
    };

    return (
        <div className='header-container'>
            <nav className={`header-navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className='grid-nav'>
                    <ul className='ul-navbar' style={{ display: 'flex', justifyContent: 'center' }}>
                        <span >
                            <img src={logo} width={55} height={55} alt="loogo" />
                        </span>
                        <li className='li-navbar' style={{ fontSize: '32px' }}>
                            <NavLink onClick={scrollToHomeSession} style={{
                                color: isActive ? '$secondary-color' : '$middlecolor'
                            }}>
                                Home
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <div className='grid-nav'>

                    <ul className='ul-navbar'>
                        <li className='li-navbar'>
                            <NavLink to="#" style={({ isActive }) => (
                                { color: isActive ? '$secondary-color' : '$middlecolor' })}>
                                About
                            </NavLink>
                        </li>
                        <li className='li-navbar'>
                            <NavLink to="#" style={({ isActive }) => (
                                { color: isActive ? '$secondary-color' : '$middlecolor' })}>
                                Service
                            </NavLink>
                        </li>
                        <li className='li-navbar'>
                            <NavLink to="#" style={({ isActive }) => (
                                { color: isActive ? '$secondary-color' : '$middlecolor' })}>
                                Partner
                            </NavLink>
                        </li>
                        <li className='li-navbar'>
                            <NavLink to="#" style={({ isActive }) => (
                                { color: isActive ? '$secondary-color' : '$middlecolor' })}>
                                Blog
                            </NavLink>
                        </li>
                        <li className='li-navbar'>
                            <NavLink to="/contact" style={({ isActive }) => (
                                { color: isActive ? '$secondary-color' : '$middlecolor' })}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header