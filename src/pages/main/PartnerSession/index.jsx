import React, { createContext, useEffect, useState } from 'react';
import '../PartnerSession/partner.scss';
import { GalleryData } from './GalleryData';

export const MovieContext = createContext();

const PartnerSession = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([... new Set(GalleryData.map((item) => item.titile))])
  }, [])

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.titile == itemData);
    setData(filterData);
  }

  return (
    <div>
      <div>
        <div className='partner-session'>
          <h3 className='partner-title'>PARTNER</h3>
          <div className='partner-title-content'>
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
              {
                collection.map((item) => <li><button onClick={() => { gallery_filter(item) }}>{item}</button></li>)
              }
            </ul>
          </div>
          <div className="galleryContainer">
            {
              data.map((item) => <div key={item.id} className="galleryItem"><img src={item.image} /></div>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSession;
