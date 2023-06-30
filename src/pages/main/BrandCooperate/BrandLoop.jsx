import React, { useEffect } from 'react'
import BrandLoopLine from './BrandLoopLine'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BRAND1 } from '../../../assets/brands/import'
import { BRAND2 } from '../../../assets/brands/import'
import { BRAND3 } from '../../../assets/brands/import'
import { BRAND4 } from '../../../assets/brands/import'

const BrandLoop = () => {


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
                y: '5vh',
                opacity: 0,
                transition: {
                    duration: 1
                }
            })
        }
    }, [inView])
    return (
        <motion.div ref={cardRef} animate={animationAbout} className='brand-second-container'>
            <motion.div>
                <BrandLoopLine props={BRAND1} />
            </motion.div>
            <motion.div>
                <BrandLoopLine props={BRAND2} />
            </motion.div>
            <motion.div>
                <BrandLoopLine props={BRAND3} />
            </motion.div>
            <motion.div>
                <BrandLoopLine props={BRAND4} />
            </motion.div>
        </motion.div>


    )
}

export default BrandLoop