import React, { useState } from 'react'

const ShowInfo = ({ index, dat }) => {
    const [isAct, setIsAct] = useState(true)

    const handleShowInfo = () => {
        setIsAct(!isAct)
    }
    return (
        <div className='card-box' key={index}>
            <div className='card-box-content'>
                <img src={dat.icon}></img>
                <div className='text-box-content'>{dat.text}</div>
            </div>
            <div className='taskbar' onClick={handleShowInfo}>
                <span className='text'>More info</span>
            </div>
            <div className='content-box-content'>
                {isAct === true ? (
                    <span className={'content-box-content-text'}>
                        {dat.content}
                    </span>
                ) : (
                    <span className={'content-box-content-text text'}>
                        {dat.content}
                    </span>
                )}
            </div>
        </div>

    )
}

export default ShowInfo