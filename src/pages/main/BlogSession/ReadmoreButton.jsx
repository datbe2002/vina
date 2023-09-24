import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const ReadmoreButton = () => {



    return (

        <motion.div className='readmore-button'>
            <Link to={'/blog'}>
                <button className='button'>
                    READ MORE...
                </button>
            </Link>
        </motion.div>
    )
}

export default ReadmoreButton