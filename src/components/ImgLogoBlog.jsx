import logoBlog from '../assets/pics/logoblog.png'
import { motion } from 'framer-motion'
const ImgLogoBlog = () => {

    const headerVariant = {
        hidden: {
            opacity: 0,
            x: '-5rem'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                bounce: 0.5,
                duration: 0.8,
            }
        }
    }


    return (
        <motion.div variants={headerVariant} initial="hidden" animate="visible" className='introduce-blog'>
            <img src={logoBlog} alt="" />
            <h1>
                WELCOME TO OUR BLOG
            </h1>
        </motion.div>
    )
}

export default ImgLogoBlog