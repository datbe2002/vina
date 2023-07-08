import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import pic1 from "../../../assets/pics/picture1.png"
import pic2 from "../../../assets/pics/picture2.png"
import pic3 from "../../../assets/pics/picture3.png"
import { useInView } from 'react-intersection-observer'


const ShowingCard = () => {

    const [selectedId, setSelectedId] = useState(null)
    const [whenChose, setWhenChose] = useState(null)


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

    const set = (item) => {
        setSelectedId(item.id)
        setWhenChose(item)
    }

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

    return (
        <>
            <motion.div
                ref={cardRef}
                animate={animationAbout}
                className='show-card-container'>
                {items.map(item => (
                    <motion.div
                        className='show-card-element'
                        layoutId={item.id} onClick={() => set(item)}>
                        <motion.div className='title'>
                            {item.title}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
            <AnimatePresence>
                {selectedId && (
                    <motion.div className='modal-show-card' layoutId={selectedId}>
                        <motion.div className='modal-image'>
                            <div>{whenChose.detail}</div>
                        </motion.div>
                        <motion.button className='modal-close-button' onClick={() => setSelectedId(null)}>
                            &times;
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>

    )
}

export default ShowingCard