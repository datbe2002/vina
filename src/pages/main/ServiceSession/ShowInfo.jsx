import React, { useEffect, useState } from 'react'
import { animate, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ShowInfo = ({ index, dat }) => {

    const [isAnimate, setIsAnimate] = useState(false)

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
        <motion.div className='card-box' key={index} ref={cardRef} animate={animationAbout}>
            <div className='card-box-content'>
                <img src={dat.icon}></img>
                <div className='text-box-content'>{dat.text}</div>
            </div>
            <motion.div className='taskbar' onClick={() => setIsAnimate(!isAnimate)}
                whileHover={{
                    scale: 1.1,
                    height: '25px',
                    y: '-5px',
                    padding: '2px 0 2px 0'
                }}
                whileTap={{
                    scale: 0.8
                }}
            >
                <span className='text'>More info</span>
            </motion.div>
            <div className='content-box-content'>
                <motion.div className={'content-box-content-text'}
                    animate={{
                        y: isAnimate ? 0 : 200,
                        opacity: isAnimate ? 1 : 0,
                        // rotate: isAnimate ? 0 : 36000,
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
        </motion.div>

    )
}

export default ShowInfo