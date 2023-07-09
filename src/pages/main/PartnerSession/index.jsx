import React, { createContext, useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import '../PartnerSession/partner.scss';
import { GalleryData } from './GalleryData';
import { useInView } from 'react-intersection-observer';

export const MovieContext = createContext();

const ScrollAnimationWrapper = ({ children }) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      });
    });

    const target = document.querySelector('#partner-session');

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return <div id="partner-session">{children(isInView)}</div>;
};

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
      <motion.div ref={cardRef} animate={animationAbout}>

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
    <ScrollAnimationWrapper>
      {(isInView) => (
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
                {isInView && (
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
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </ScrollAnimationWrapper>
  );
};

export default PartnerSession;
