/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

const BrandLoopLine = ({ props }) => {
    return (
        <div className='line'>
            {props.map((p, index) => (
                <motion.div
                    viewport={{ once: true, amount: 0.8 }}
                    initial='hidden'
                    whileInView="visible"
                    transition={{ delay: index === 0 ? 0 : 0.3, duration: 0.9 }}
                    variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    key={index} className='circle-container'>
                    <img src={p}></img>
                </motion.div>
            ))}
        </div>

    )
}

export default BrandLoopLine