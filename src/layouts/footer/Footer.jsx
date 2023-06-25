import React from 'react'
import './footer.scss'
import mailIcon from '../../assets/icons/MailIcon.svg'
import phoneIcon from '../../assets/icons/Phone.svg'
import locationIcon from '../../assets/icons/Location.svg'

const Footer = () => {

    const things = [{ icon: mailIcon, infos: 'mikenhanphan@vinamedia.co' }, { icon: phoneIcon, infos: '+ 84 935 496 388 (Mr. Phan Nhan)' }, { icon: locationIcon, infos: '27 Phung Khac Hoan, District 1, Ho Chi Minh City' }]


    return (
        <div className='footer-container'>
            <div className='footer-container__text'>
                <h4>Let's Keep in Touch</h4>
            </div>
            <div className='footer-container__contact'>
                <div className='footer-container__contact--infos'>
                    {things.map((thing, index) => (
                        <div key={index} className='contain-icon-info'>
                            <span className='imageee'><img src={thing.icon} /></span>
                            <span className='infosss'>{thing.infos}</span>
                        </div>
                    ))}
                </div>
                <div className='footer-container__contact--textlot'>
                    <div className='text-second'>
                        Your next step
                    </div>
                    <div className='text-under'>
                        If you have any questions about our packages or would like us to help you scale your social media presence so you could focus on your core business then get in touch and let us help you dominate your niche on social media!
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer