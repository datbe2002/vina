import React from 'react'
import ServiceCard from './ServiceCard'
import FirstCarousel from './FirstCarousel'
import SecondCarousel from './SecondCarousel'

const ServiceSession = () => {
    return (
        <div className='service-session'>
            <div className='service-introduce'>
                SERVICES
            </div>
            <ServiceCard />
            <FirstCarousel />
            <SecondCarousel />
        </div>
    )
}

export default ServiceSession