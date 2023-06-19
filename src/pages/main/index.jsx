import React from 'react'
import './mainPage.scss'
import HomeSession from './HomeSession'
import AboutSession from './AboutSession'
import ServiceSession from './ServiceSession'
import SolutionSession from './SolutionSession'
import BrandCooperate from './BrandCooperate'
const MainPage = () => {
    return (
        <div className='main-page-container'>
            <HomeSession />
            <AboutSession />
            <ServiceSession />
            <SolutionSession />
            <BrandCooperate />
        </div>
    )
}

export default MainPage