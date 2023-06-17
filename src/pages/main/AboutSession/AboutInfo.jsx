import React from 'react'
import pic1 from '../../../assets/pics/picture1.png'
import pic2 from '../../../assets/pics/picture2.png'
import pic3 from '../../../assets/pics/picture3.png'


const AboutInfo = () => {
    return (
        <>
            <div className='about-info'>
                <div className='about-line-one-left'>
                    <img src={pic1} alt="hinh" />
                </div>
                <div className='about-line-one-right'>
                    VINA is a reputable marketing agency that specializes in Kols community in Vietnam. We offer access to over 200 KOLs from various fields such as lifestyle, beauty, travel, food, and more. We handpicked our KOL community based on a myriad of selection criteria to ensure their international standards of training and professionalism.
                </div>
                <div className='about-line-two-left'>
                    Our founder, Mr. Mike Nhan Phan, has dedicated over seven years of his career to working as a KOL while collaborating with hundreds of both prominent and emerging brands. As a result, he boasts of a vast network of KOLs and valuable professional relationships with a range of brands. Besides, he previously resided in Korea for seven years, where he became proficient in Korean and gained extensive knowledge of Korean society and its market. Therefore, our agency mainly focuses on collaborating with Korean brands. We have acquired considerable experience in this field, which exemplifies our dedication to excellence and quality service delivery
                </div>
                <div className='about-line-two-right'>
                    <img src={pic2} alt="hinh" />
                </div>
            </div>
            <div className='under'>
                <div className='picture-under'>
                    <img src={pic3} alt="hinh" />
                </div>
            </div>
        </>

    )
}

export default AboutInfo