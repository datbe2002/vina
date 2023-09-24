import FirstCarousel from './FirstCarousel'
import SecondCarousel from './SecondCarousel'
import ServiceCard from './ServiceCard'
import { serviceCard } from '../../../constants/contentArray'

const ServiceSession = () => {
    return (
        <div className='service-session'>
            <div className='service-introduce'>
                SERVICES
            </div>
            <ServiceCard serviceCard={serviceCard} />
            <FirstCarousel />
            <SecondCarousel />
        </div>
    )
}

export default ServiceSession