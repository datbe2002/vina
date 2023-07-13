import { Button } from 'antd'
import React, { useState } from 'react'

const ButtonCus = () => {
    const [IsActive, setIsActive] = useState()
    const scrollToAboutSession = () => {
        const aboutSessionElement = document.querySelector('.introduce');
        if (aboutSessionElement) {
            aboutSessionElement.scrollIntoView({ behavior: 'smooth' });
            setIsActive(true);
        }
    };
    return (
        <div className='custom-button'>
            <Button className='button-started' type="primary" onClick={scrollToAboutSession}>Get Started</Button>
        </div>
    )
}

export default ButtonCus