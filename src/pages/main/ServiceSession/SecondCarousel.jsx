import { Carousel } from 'antd'
import React from 'react'
import { motion } from 'framer-motion'

const SecondCarousel = () => {
    return (
        <div className='carousel-container'>
            <h1>CORE VALUE</h1>
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

                    <span>
                        Our mission is to become the go-to marketing agency for brands looking to tap into the power of influencer marketing, and to continuosly innovate abd evolve our strategies to ensure we remain at the forefront of the industry
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

                    <span>
                        Our mission is to become the go-to marketing agency for brands looking to tap into the power of influencer marketing, and to continuosly innovate abd evolve our strategies to ensure we remain at the forefront of the industry
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

                    <span>
                        Our mission is to become the go-to marketing agency for brands looking to tap into the power of influencer marketing, and to continuosly innovate abd evolve our strategies to ensure we remain at the forefront of the industry
                    </span>
                </motion.div>
            </Carousel>
        </div>
    )
}

export default SecondCarousel