import React, { useState } from 'react'
import global from '../../../assets/icons/global.svg'
import calendar from '../../../assets/icons/calendar.svg'
import insta from '../../../assets/icons/insta.svg'
import cart from '../../../assets/icons/cart.svg'
import camera from '../../../assets/icons/camera.svg'
import ShowInfo from './ShowInfo'


const ServiceCard = () => {
    // console.log(isAct)
    const data = [
        {
            icon: global,
            text: 'Social Media Management',
            content: 'Building and managing social media channels such as TikTok, YouTube, etc., for individuals or businesses. ',
        },
        {
            icon: calendar,
            text: 'Kpop Event Packages',
            content: 'Kpop Idol and Korean Celebs Booking Package for concerts and events.',
        },
        {
            icon: insta,
            text: 'Korean Press Packages',
            content: 'Korean Press Packages for hotels and restaurants targeting Korean tourists.',
        },
        {
            icon: cart,
            text: 'Low-Cost Market Entry',
            content: 'Marketing package for Korean brands looking to enter the Vietnamese market with the lowest cost. E-commerce package for Korean brands looking to enter the Vietnamese market.',
        },
        {
            icon: camera,
            text: 'Influencer Experience',
            content: 'Top Kols and Korean bloggers package for experiencing and reviewing services.',
        },
    ]


    return (
        <div className='loop-card-info'>
            {data.map((dat, index) => (
                <ShowInfo index={index} dat={dat} />
            ))}
        </div>
    )
}

export default ServiceCard