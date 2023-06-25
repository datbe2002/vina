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
            content: 'Building and managing social media channels such as TikTok, YouTube, etc., for individuals or businesses.',
        },
        {
            icon: calendar,
            text: 'Social Media Management',
            content: 'Building and managing social media channels such as TikTok, YouTube, etc., for individuals or businesses.',
        },
        {
            icon: insta,
            text: 'Social Media Management',
            content: 'Building and managing social media channels such as TikTok, YouTube, etc., for individuals or businesses.',
        },
        {
            icon: cart,
            text: 'Social Media Management',
            content: 'Building and managing social media channels such as TikTok, YouTube, etc., for individuals or businesses.',
        },
        {
            icon: camera,
            text: 'Social Media Management',
            content: 'Building and managing social media channels such as TikTok, YouTube, etc., for individuals or businesses.',
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