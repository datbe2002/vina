import { Carousel } from 'antd'
import { motion } from 'framer-motion'

const FirstCarousel = () => {


    return (
        <motion.div className='carousel-container' >
            <Carousel autoplay style={{
                fontFamily: 'Montserrat, sans-serif',
                color: '#072D44'
            }}>
                <div
                    className='carousel-element'>
                    <motion.h3
                        viewport={{ once: true, amount: 0.8 }}
                        initial='hidden'
                        whileInView="visible"
                        transition={{ duration: 1, bounce: 0.6, type: 'spring' }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        MISSION
                    </motion.h3>
                    <motion.span
                        viewport={{ once: true, amount: 0.8 }}
                        initial='hidden'
                        whileInView="visible"
                        transition={{ delay: 0.4, bounce: 0.6, type: 'spring' }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        Our mission is to empower brands to connect with their target audience by providing cutting-edge marketing solutions that generate measurable results, utilizing our unique network of close relationships with influencers to drive engagement and create lasting connections.
                    </motion.span>
                </div>
                <div
                    className='carousel-element'>
                    <h3 >
                        VISION
                    </h3>
                    <span>
                        Our mission is to become the go-to marketing agency for brands looking to tap into the power of influencer marketing, and to continuosly innovate abd evolve our strategies to ensure we remain at the forefront of the industry
                    </span>
                </div>
            </Carousel>
        </motion.div>
    )
}

export default FirstCarousel