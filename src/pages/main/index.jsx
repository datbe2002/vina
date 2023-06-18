import React from 'react'
import './mainPage.scss'
import HomeSession from './HomeSession'
import AboutSession from './AboutSession'
import ServiceSession from './ServiceSession'
import SolutionSession from './SolutionSession'
const MainPage = () => {
    return (
        <div className='main-page-container'>
            <HomeSession />
            <AboutSession />
            <ServiceSession />
            <SolutionSession />
        </div>
    )
}

export default MainPage