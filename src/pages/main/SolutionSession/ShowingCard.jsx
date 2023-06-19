import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import pic1 from "../../../assets/pics/picture1.png"
import pic2 from "../../../assets/pics/picture2.png"
import pic3 from "../../../assets/pics/picture3.png"


const ShowingCard = () => {

    const [selectedId, setSelectedId] = useState(null)
    const [whenChose, setWhenChose] = useState(null)


    const items = [
        {
            id: 1,
            title: 'Marketing',
            pic: pic1
        },
        {
            id: 2,
            title: 'Production',
            pic: pic2

        },
        {
            id: 3,
            title: 'Event organization',
            pic: pic3

        },
    ]

    const set = (item) => {
        setSelectedId(item.id)
        setWhenChose(item)
    }

    return (
        <>
            <motion.div

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
                            <img src={whenChose.pic} alt="" />
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