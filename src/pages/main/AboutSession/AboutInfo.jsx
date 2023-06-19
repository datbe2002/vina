import React, { useEffect } from 'react'
import pic1 from '../../../assets/pics/picture1.png'
import pic2 from '../../../assets/pics/picture2.png'
import pic3 from '../../../assets/pics/picture3.png'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const AboutInfo = () => {

    const [ref, inViewAboutPicOne] = useInView()
    const animationAbout = useAnimation()
    const animationAbout2 = useAnimation()
    const animationAbout3 = useAnimation()
    const animationAbout4 = useAnimation()
    const animationAbout5 = useAnimation()
    useEffect(() => {
        if (inViewAboutPicOne) {
            animationAbout.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1
                }
            })
            animationAbout2.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1
                }
            })
            animationAbout3.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1
                }
            })
            animationAbout4.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1
                }
            })
            animationAbout5.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1
                }
            })
        }
        if (!inViewAboutPicOne) {
            animationAbout.start({
                y: '20vh',
                opacity: 0,
                transition: {
                    duration: 1
                }
            })
            animationAbout2.start({
                y: '30vh',
                opacity: 0,
                transition: {
                    duration: 1
                }
            })
            animationAbout3.start({
                y: '40vh',
                opacity: 0,
                transition: {
                    duration: 1
                }
            })
            animationAbout4.start({
                y: '50vh',
                opacity: 0,
                transition: {
                    duration: 1
                }
            })
            animationAbout5.start({
                x: '-100vh',
                opacity: 0,
                transition: {
                    duration: 1
                }
            })
        }
    }, [inViewAboutPicOne])


    return (
        <>
            <div ref={ref} className='about-info'>
                <motion.div className='about-line-one-left'
                    animate={animationAbout}
                >
                    <img src={pic1} alt="hinh" />
                </motion.div>
                <motion.div className='about-line-one-right'
                    animate={animationAbout2}
                >
                    VINA is a reputable marketing agency that specializes in Kols community in Vietnam. We offer access to over 200 KOLs from various fields such as lifestyle, beauty, travel, food, and more. We handpicked our KOL community based on a myriad of selection criteria to ensure their international standards of training and professionalism.
                </motion.div>
                <motion.div className='about-line-two-left'
                    animate={animationAbout3}>
                    Our founder, Mr. Mike Nhan Phan, has dedicated over seven years of his career to working as a KOL while collaborating with hundreds of both prominent and emerging brands. As a result, he boasts of a vast network of KOLs and valuable professional relationships with a range of brands. Besides, he previously resided in Korea for seven years, where he became proficient in Korean and gained extensive knowledge of Korean society and its market. Therefore, our agency mainly focuses on collaborating with Korean brands. We have acquired considerable experience in this field, which exemplifies our dedication to excellence and quality service delivery
                </motion.div>
                <motion.div className='about-line-two-right'
                    animate={animationAbout4}>
                    <img src={pic2} alt="hinh" />
                </motion.div>
            </div>
            <div className='under'>
                <motion.div className='picture-under'
                    animate={animationAbout5}>
                    <img src={pic3} alt="hinh" />
                </motion.div>
            </div>
        </>

    )
}

export default AboutInfo