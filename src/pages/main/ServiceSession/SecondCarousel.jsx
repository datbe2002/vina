import { Carousel } from 'antd'
import { motion } from 'framer-motion'

const SecondCarousel = () => {

    return (
        <div className='carousel-container'>
            <h1>CORE VALUE</h1>
            <motion.div >
                <Carousel autoplay style={{
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#072D44'
                }}>
                    <motion.div
                        viewport={{ once: true, amount: 0.8 }}
                        initial='hidden'
                        whileInView="visible"
                        transition={{ duration: 1, bounce: 0.6, type: 'spring' }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        className='carousel-element'
                    >

                        <span>
                            Our mission is to empower brands to connect with their target audience by providing cutting-edge marketing solutions that generate measurable results, utilizing our unique network of close relationships with influencers to drive engagement and create lasting connections.
                        </span>
                    </motion.div>
                    <motion.div
                        className='carousel-element'>

                        <span>
                            Our mission is to become the go-to marketing agency for brands looking to tap into the power of influencer marketing, and to continuosly innovate abd evolve our strategies to ensure we remain at the forefront of the industry
                        </span>
                    </motion.div>
                    <motion.div
                        className='carousel-element'>

                        <span>
                            Our mission is to become the go-to marketing agency for brands looking to tap into the power of influencer marketing, and to continuosly innovate abd evolve our strategies to ensure we remain at the forefront of the industry
                        </span>
                    </motion.div>
                    <motion.div
                        className='carousel-element'>

                        <span>
                            Our mission is to become the go-to marketing agency for brands looking to tap into the power of influencer marketing, and to continuosly innovate abd evolve our strategies to ensure we remain at the forefront of the industry
                        </span>
                    </motion.div>
                </Carousel>
            </motion.div>
        </div>
    )
}

export default SecondCarousel