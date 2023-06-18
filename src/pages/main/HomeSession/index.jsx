import React, { useRef } from 'react'
import MainPictureCore from './MainPictureCore'
import ButtonCus from './ButtonCus'
import BorderInfo from './BorderInfo'
import { useScroll, useTransform, motion } from 'framer-motion'

const HomeSession = () => {

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])


    return (
        <motion.div className='home-session'
            style={{ opacity }}
            ref={targetRef}>
            <motion.div
                style={{ scale }}
            >
                <MainPictureCore />
                <ButtonCus />
                <BorderInfo />
                <div className='introduce'></div>
            </motion.div>

        </motion.div>
    )
}

export default HomeSession