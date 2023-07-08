import { motion, useScroll } from "framer-motion"
import React, { useEffect, useState } from 'react'
import "./header.scss"
import { Link, NavLink } from 'react-router-dom';
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
    const scrollToAboutSession = () => {
        const aboutSessionElement = document.querySelector('.introduce');
        if (aboutSessionElement) {
            aboutSessionElement.scrollIntoView({ behavior: 'smooth' });
            setIsActive(true);
        }
    };
    const scrollToServiceSession = () => {
        const serviceSessionElement = document.querySelector('.service');
        if (serviceSessionElement) {
            serviceSessionElement.scrollIntoView({ behavior: 'smooth' });
            setIsActive(true);
        }
    };
    const scrollToPartnerSession = () => {
        const partnerSessionElement = document.querySelector('.partner');
        if (partnerSessionElement) {
            partnerSessionElement.scrollIntoView({ behavior: 'smooth' });
            setIsActive(true);
        }
    };

    const { scrollYProgress } = useScroll();
    return (

        <div className='header-container'>

            <nav className={`header-navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className='grid-nav'>
                    <ul className='ul-navbar' style={{ display: 'flex', justifyContent: 'center' }}>
                        <span>
                            <Link to={'/'}>
                                <img src={logo} width={55} height={55} alt="loogo" />
                            </Link>
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
                            <NavLink onClick={scrollToAboutSession} style={({ isActive }) => (
                                { color: isActive ? '$secondary-color' : '$middlecolor' })}>
                                About
                            </NavLink>
                        </li>
                        <li className='li-navbar'>
                            <NavLink onClick={scrollToServiceSession} style={({ isActive }) => (
                                { color: isActive ? '$secondary-color' : '$middlecolor' })}>
                                Service
                            </NavLink>
                        </li>
                        <li className='li-navbar'>
                            <NavLink onClick={scrollToPartnerSession} to="#" style={({ isActive }) => (
                                { color: isActive ? '$secondary-color' : '$middlecolor' })}>
                                Partner
                            </NavLink>
                        </li>
                        <li className='li-navbar'>
                            <NavLink to="/blog" style={({ isActive }) => (
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
            <motion.div style={{ scaleX: scrollYProgress }} className='progress-bar' />
        </div >
    )
}

export default Header