/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion';
import { createContext, useEffect, useState } from 'react';
import '../PartnerSession/partner.scss';
import { GalleryData } from './GalleryData';

export const MovieContext = createContext();


const PartnerSession = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.titile))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.titile === itemData);
    setData(filterData);
  };

  const GalleryItem = ({ item }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
    };


    return (
      <motion.div
        viewport={{ once: true, amount: 0.5 }}
        initial='hidden'
        whileInView="visible"
        transition={{ duration: 0.9 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
      >

        <motion.div
          className="galleryItem"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}


          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={item.image}
            alt={item.title}
            layout
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          {hovered && <h2>{item.name}</h2>}
        </motion.div>
      </motion.div>
    );
  };

  return (


    <div id="partner-session">
      <div>
        <div>
          <div className="partner-session">
            <div className="partner"></div>

            <h3 className="partner-title">PARTNER</h3>
            <div className="partner-title-content">
              <div>
                GCC (Global Creator Club) is a marketing company holding thousands of KOLs in Korea.
              </div>
              <div>
                MORE THAN 100 BIG KOLS and 200 KOCS IN VIETNAM always ready to cooperate with VINA.
              </div>
            </div>
          </div>
        </div>
        <div className="App">
          <div className="galleryWrapper">
            <div className="filterItem">
              <ul>
                {collection.map((item) => (
                  <li key={item}>
                    <motion.button
                      whileHover={{
                        scale: 1.1,
                      }}
                      whileTap={{
                        scale: 0.8
                      }}
                      onClick={() => gallery_filter(item)}>{item}</motion.button>
                  </li>
                ))}
              </ul>
            </div>
            <AnimatePresence>
              <motion.div
                key="gallery"
                className="galleryContainer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {data.map((item) => (
                  <GalleryItem key={item.id} item={item} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSession;
