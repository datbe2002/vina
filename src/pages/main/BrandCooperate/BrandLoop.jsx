import React, { useEffect } from 'react'
import BrandLoopLine from './BrandLoopLine'
import { motion, useAnimation } from 'framer-motion'
import pic1 from '../../../assets/pics/picture1.png'
import pic2 from '../../../assets/pics/picture2.png'
import pic3 from '../../../assets/pics/picture3.png'
import { useInView } from 'react-intersection-observer'
import { BRAND1 } from '../../../assets/brands/import'
import { BRAND2 } from '../../../assets/brands/import'
import { BRAND3 } from '../../../assets/brands/import'
import { BRAND4 } from '../../../assets/brands/import'

const BrandLoop = () => {

    //1 dong 5 brands

    const [motionRef, inView] = useInView()

    const animated = useAnimation()
    const animated2 = useAnimation()

    // useEffect(() => {
    //     if (inView) {
    //         animated.start({
    //             x: 0,
    //             opacity: 1,
    //             transition: {
    //                 duration: 1,
    //             }
    //         })
    //         animated2.start({
    //             x: 0,
    //             opacity: 1,
    //             transition: {
    //                 duration: 1,
    //             }
    //         })
    //     }
    //     if (!inView) {
    //         animated.start({
    //             x: 4000,
    //             opacity: 1,
    //             transition: {
    //                 duration: 10,
    //             }
    //         })
    //         animated2.start({
    //             x: -4000,
    //             opacity: 1,
    //             transition: {
    //                 duration: 10,
    //             }
    //         })
    //     }
    // }, [inView])

    return (
        <div className='brand-second-container' ref={motionRef}>
            <motion.div animate={animated}>
                <BrandLoopLine props={BRAND1} />
            </motion.div>
            <motion.div animate={animated2}>
                <BrandLoopLine props={BRAND2} />
            </motion.div>
            <motion.div animate={animated}>
                <BrandLoopLine props={BRAND3} />
            </motion.div>
            <motion.div animate={animated2}>
                <BrandLoopLine props={BRAND4} />
            </motion.div>
        </div>


    )
}

export default BrandLoop