import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from 'react'
import "./header.scss"
import { Link, NavLink } from 'react-router-dom';
import '../../assets/scss/variable.scss'
import logo from '../../assets/pics/logo.png'
import scrollBehaviourHook from "./scrollBehaviourHook";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

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
        scrollBehaviourHook({ className: '.home-session' });
    };

    const scrollToAboutSession = () => {
        scrollBehaviourHook({ className: '.introduce' });
    };

    const scrollToServiceSession = () => {
        scrollBehaviourHook({ className: '.service' });
    };

    const scrollToPartnerSession = () => {
        scrollBehaviourHook({ className: '.partner' });
    };

    const { scrollYProgress } = useScroll();

    const NAV_LINK = [
        {
            text: 'About',
            onClick: scrollToAboutSession,
        },
        {
            text: 'Service',
            onClick: scrollToServiceSession,
        },
        {
            text: 'Partner',
            onClick: scrollToPartnerSession,
        },
        {
            text: 'Blog',
            path: '/blog'
        },
        {
            text: 'Contact',
            path: '/contact'
        },
    ]


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
                            <NavLink onClick={scrollToHomeSession} >
                                Home
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <div className='grid-nav'>
                    <ul className='ul-navbar'>
                        {NAV_LINK.map((nav, index) => (
                            <li key={index} className='li-navbar'>
                                {nav.path ? <NavLink to={nav.path} >
                                    {nav.text}
                                </NavLink> : <NavLink onClick={nav.onClick} >
                                    {nav.text}
                                </NavLink>}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <motion.div style={{ scaleX: scrollYProgress }} className='progress-bar' />
        </div >
    )
}

export default Header