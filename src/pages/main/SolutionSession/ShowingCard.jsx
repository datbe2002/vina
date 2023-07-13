import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import pic1 from "../../../assets/pics/picture1.png"
import pic2 from "../../../assets/pics/picture2.png"
import pic3 from "../../../assets/pics/picture3.png"
import { useInView } from 'react-intersection-observer'
import './FlipCard.scss';

const ShowingCard = () => {

    const items = [
        {
            id: 1,
            title: 'Marketing',
            pic: pic1,
            detail: 'Drawing from our extensive experience in collaborating with diverse brands across various industries, we are well-equipped to offer tailored marketing solutions for each of our clients unique projects.'
        },
        {
            id: 2,
            title: 'Production',
            pic: pic2,
            detail: 'Our production business is spearheaded by a team of proficient photographers, each with a wealth of experience in managing image production for a myriad of large and small-scale projects, events, and campaigns. Our founder also has a solid track record in the field, further bolstering our capabilities.'

        },
        {
            id: 3,
            title: 'Event organization',
            pic: pic3,
            detail: 'Our team comprises seasoned professionals with extensive experience in the event industry, having delivered successful corporate events and large-scale external events in the past.'

        },
    ]


    const [cardRef, inView] = useInView()

    const animationAbout = useAnimation()

    useEffect(() => {
        if (inView) {
            animationAbout.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1
                }

            })

        }
        if (!inView) {
            animationAbout.start({
                y: '20vh',
                opacity: 0,
                transition: {
                    duration: 1
                }
            })
        }
    }, [inView])

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
            <motion.div className="show-card-container" ref={cardRef} animate={animationAbout}>
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`show-card-element ${flippedItems.includes(item.id) ? 'flipped' : ''}`}
                        onClick={() => handleItemClick(item.id)}
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
                    </div>
                ))}
            </motion.div>
        </>

    )
}

export default ShowingCard