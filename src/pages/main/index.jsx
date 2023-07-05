import React, { useEffect } from 'react'
import './mainPage.scss'
import HomeSession from './HomeSession'
import AboutSession from './AboutSession'
import ServiceSession from './ServiceSession'
import SolutionSession from './SolutionSession'
import BrandCooperate from './BrandCooperate'
import Blog from './BlogSession/Blog'
import { useDispatch } from 'react-redux'
import { getBlog } from '../../redux/slice/blogSlice'
import PartnerSession from './PartnerSession'
const MainPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBlog())
    }, [])


    return (
        <div className='main-page-container'>
            <HomeSession />
            <AboutSession />
            <ServiceSession />
            <SolutionSession />
            <PartnerSession />

            <BrandCooperate />
            <Blog />
            <div style={{ height: "10rem" }}></div>
        </div>
    )
}

export default MainPage