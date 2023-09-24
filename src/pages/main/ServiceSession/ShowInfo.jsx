/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const ShowInfo = ({ index, dat }) => {

    const [isAnimate, setIsAnimate] = useState(false)


    return (
        <motion.div className='card-box' key={index}
            viewport={{ once: true, amount: 0.5 }}
            initial='hidden'
            whileInView="visible"
            transition={{ delay: index === 0 ? 0 : index * 0.2, duration: 0.8 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}>
            <div className='card-box-content'>
                <img src={dat.icon}></img>
                <div className='text-box-content'>{dat.text}</div>
            </div>
            <motion.div className='taskbar' onClick={() => setIsAnimate(!isAnimate)}
                whileHover={{
                    scale: 1.1,
                    height: '25px',
                    y: '-5px',
                    padding: '2px 0 2px 0'
                }}
                whileTap={{
                    scale: 0.8
                }}
            >
                <span className='text'>More info</span>
            </motion.div>
            <div className='content-box-content'>
                <motion.div className={'content-box-content-text'}
                    animate={{
                        y: isAnimate ? 0 : 200,
                        opacity: isAnimate ? 1 : 0,
                        scale: isAnimate ? 1 : 0.5
                    }}
                    initial={{
                        y: 200,
                        opacity: 0,
                    }}


                    transition={{
                        stiffness: 200
                    }}
                    drag
                    dragConstraints={{
                        top: 10,
                        right: 10,
                        bottom: 10,
                        left: 10
                    }}
                >
                    {dat.content}
                </motion.div>
            </div>
        </motion.div>

    )
}

export default ShowInfo