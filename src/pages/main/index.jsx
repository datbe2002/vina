import HomeSession from './HomeSession'
import AboutSession from './AboutSession'
import ServiceSession from './ServiceSession'
import SolutionSession from './SolutionSession'
import PartnerSession from './PartnerSession'
import BrandCarouselAuto from './BrandCarouselAuto/BrandCarouselAuto'
import useScrollToTop from '../../hooks/useScrollToTop'
import useInitialDataFetch from '../../hooks/useInitialDataFetch'
import './mainPage.scss'

const MainPage = () => {
    useScrollToTop()
    useInitialDataFetch()
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