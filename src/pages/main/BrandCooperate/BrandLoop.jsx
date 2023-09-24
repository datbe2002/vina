import { motion } from 'framer-motion'
import { BRAND1, BRAND2, BRAND3, BRAND4 } from '../../../assets/brands/import'
import BrandLoopLine from './BrandLoopLine'

const BrandLoop = () => {
    return (
        <motion.div className='brand-second-container'>
            <BrandLoopLine props={BRAND1} />
            <BrandLoopLine props={BRAND2} />
            <BrandLoopLine props={BRAND3} />
            <BrandLoopLine props={BRAND4} />
        </motion.div>
    )
}

export default BrandLoop