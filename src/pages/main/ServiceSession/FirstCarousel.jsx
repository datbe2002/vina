import { Carousel } from 'antd'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FirstCarousel = () => {


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
        <motion.div className='carousel-container' ref={cardRef} animate={animationAbout}>
            <Carousel autoplay style={{
                fontFamily: 'Montserrat, sans-serif',
                color: '#072D44'
            }}>
                <motion.div
                    drag
                    dragConstraints={{
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                    className='carousel-element'>
                    <h3 >
                        MISSION
                    </h3>
                    <span>
                        Our mission is to empower brands to connect with their target audience by providing cutting-edge marketing solutions that generate measurable results, utilizing our unique network of close relationships with influencers to drive engagement and create lasting connections.
                    </span>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }}
                    whileTap={{ cursor: 'grabbing' }}

                    className='carousel-element'>
                    <h3 >
                        VISION
                    </h3>
                    <span>
                        Our mission is to become the go-to marketing agency for brands looking to tap into the power of influencer marketing, and to continuosly innovate abd evolve our strategies to ensure we remain at the forefront of the industry
                    </span>
                </motion.div>
            </Carousel>
        </motion.div>
    )
}

export default FirstCarousel