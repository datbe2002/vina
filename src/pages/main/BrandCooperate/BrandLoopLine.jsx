import React from 'react'

const BrandLoopLine = ({ props }) => {
    return (
        <div className='line'>
            {props.map((p) => (
                <div className='circle-container'>
                    <img src={p}></img>
                </div>
            ))}
        </div>

    )
}

export default BrandLoopLine