import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ShowInfo = ({ index, dat }) => {

    const [isAnimate, setIsAnimate] = useState(false)





    return (
        <div className='card-box' key={index}>
            <div className='card-box-content'>
                <img src={dat.icon}></img>
                <div className='text-box-content'>{dat.text}</div>
            </div>
            <div className='taskbar' onClick={() => setIsAnimate(!isAnimate)}>
                <span className='text'>More info</span>
            </div>
            <div className='content-box-content'>
                <motion.div className={'content-box-content-text'}
                    animate={{
                        y: isAnimate ? 0 : 200,
                        opacity: isAnimate ? 1 : 0,
                        // rotate: isAnimate ? 360 : 0,
                        scale: isAnimate ? 1 : 0.5
                    }}
                    initial={{
                        y: 200,
                        opacity: 0,
                    }}

                    transition={{
                        stiffness: 200
                    }}
                    drag
                    dragConstraints={{
                        top: 10,
                        right: 10,
                        bottom: 10,
                        left: 10
                    }}
                >
                    {dat.content}
                </motion.div>
            </div>
        </div>

    )
}

export default ShowInfo