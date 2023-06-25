import React from 'react'
import MainPictureCore from './MainPictureCore'
import ButtonCus from './ButtonCus'
import BorderInfo from './BorderInfo'

const HomeSession = () => {

    return (
        <div className='home-session'>
            <MainPictureCore />
            <ButtonCus />
            <BorderInfo />
            <div className='introduce'></div>
        </div>
    )
}

export default HomeSession