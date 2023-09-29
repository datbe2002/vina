import { motion } from 'framer-motion'
import vninflu from '../../../assets/pics/vni2.png'

const MainPictureCore = () => {
    return (
        <motion.div className='main-picture'
            viewport={{ once: true, amount: 0.8 }}
            initial='hidden'
            whileInView="visible"
            transition={{ duration: 0.3 }}
            variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 }
            }}
        >
            <img src={vninflu} width={900} height={500} />
        </motion.div>
    )
}

export default MainPictureCore