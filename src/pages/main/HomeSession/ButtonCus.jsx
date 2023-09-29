import { Button } from 'antd'
import { motion } from 'framer-motion'
const ButtonCus = () => {
    const scrollToAboutSession = () => {
        const aboutSessionElement = document.querySelector('.introduce');
        if (aboutSessionElement) {
            aboutSessionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <motion.div className='custom-button'
            viewport={{ once: true, amount: 0.8 }}
            initial='hidden'
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.3 }}
            variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 }
            }}
        >
            <Button className='button-started' type="primary" onClick={scrollToAboutSession}>Get Started</Button>
        </motion.div>
    )
}

export default ButtonCus