import React, { createContext, useEffect, useState } from 'react';
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
      <div className="galleryItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={item.image} alt={item.title} />
        {hovered && <h2>{item.name}</h2>}
      </div>
    );
  };

  return (
    <div>
      <div>
        <div className="partner-session">
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
                <li>
                  <button onClick={() => gallery_filter(item)}>{item}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="galleryContainer">
            {data.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSession;
