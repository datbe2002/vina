/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useState } from 'react';
import './FlipCard.scss';

const ShowingCard = ({ showingCard }) => {


    const [flippedItems, setFlippedItems] = useState([]);

    const handleItemClick = (itemId) => {
        setFlippedItems((prevFlippedItems) => {
            if (prevFlippedItems.includes(itemId)) {
                return prevFlippedItems.filter((id) => id !== itemId);
            }
            return [...prevFlippedItems, itemId];
        });
    };

    return (
        <>
            <motion.div className="show-card-container"

            >
                {showingCard?.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`show-card-element ${flippedItems.includes(item.id) ? 'flipped' : ''}`}
                        onClick={() => handleItemClick(item.id)}
                        viewport={{ once: true, amount: 0.5 }}
                        initial='hidden'
                        whileInView="visible"
                        transition={{ delay: index === 0 ? 0 : index * 0.2, duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, y: '20vh' },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <div className="flip-card">
                            <motion.div className="flip-card-inner">
                                <motion.div
                                    className="flip-card-front"
                                    initial={{ rotateY: 0 }}
                                    animate={{ rotateY: flippedItems.includes(item.id) ? 180 : 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h2>{item.title}</h2>
                                </motion.div>
                                <motion.div
                                    className="flip-card-back"
                                    initial={{ rotateY: 180 }}
                                    animate={{ rotateY: flippedItems.includes(item.id) ? 0 : 180 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <p>{item.detail}</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </>

    )
}

export default ShowingCard