import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import HomeSession from './HomeSession'
import AboutSession from './AboutSession'
import ServiceSession from './ServiceSession'
import SolutionSession from './SolutionSession'
// import BrandCooperate from './BrandCooperate'
// import Blog from './BlogSession/Blog'
import PartnerSession from './PartnerSession'
import './mainPage.scss'

import { getAllContact, getAllContactDateOnly, getBlog, getBlogDateOnly } from '../../redux/slice/blogSlice'
import BrandCarouselAuto from './BrandCarouselAuto/BrandCarouselAuto'
const MainPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBlog())
        dispatch(getBlogDateOnly())
        dispatch(getAllContact())
        dispatch(getAllContactDateOnly())
    }, [dispatch])


    return (
        <div className='main-page-container'>
            <HomeSession />
            <AboutSession />
            <ServiceSession />
            <SolutionSession />
            <BrandCarouselAuto />
            <PartnerSession />
            {/* <BrandCooperate /> */}
            {/* <Blog /> */}
            <div style={{ height: "10rem" }}></div>
        </div>
    )
}

export default MainPage