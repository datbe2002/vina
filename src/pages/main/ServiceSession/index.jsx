import React, { useEffect } from 'react'
import ServiceCard from './ServiceCard'
import FirstCarousel from './FirstCarousel'
import SecondCarousel from './SecondCarousel'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const ServiceSession = () => {
    const [cardRef, inView] = useInView()

    const animationAbout = useAnimation()

    useEffect(() => {
        if (inView) {
            animationAbout.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1
                }

            })

        }
        if (!inView) {
            animationAbout.start({
                y: '20vh',
                opacity: 0,
                transition: {
                    duration: 1
                }
            })
        }
    }, [inView])
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