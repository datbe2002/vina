import { motion } from 'framer-motion'
const BorderInfo = () => {
    return (
        <motion.div className='box-info'
            viewport={{ once: true, amount: 0.8 }}
            initial='hidden'
            whileInView="visible"
            transition={{ delay: 0.4, duration: 0.3 }}
            variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 }
            }}
        >
            VINA (Vietnam Influencer Network Association) is an agency marketing company with strengths in the KOLs segment. In VINA,
            You can see &quot;Professional - Efficient - Reliable&quot;
        </motion.div>
    )
}

export default BorderInfo