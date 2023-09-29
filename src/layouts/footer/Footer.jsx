import './footer.scss'
import logoBlog from '../../assets/pics/logoblog.png'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
const Footer = () => {

    const THINGS = [{ label: 'Email', infos: 'mikenhanphan@vinamedia.co' }, { label: 'Phone Number', infos: '+ 84 935 496 388 (Mr. Phan Nhan)' }, { label: 'Address', infos: '27 Phung Khac Hoan, District 1, Ho Chi Minh City' }]

    const TEXT = { second: 'Your next step', under: 'If you have any questions about our packages or would like us to help you scale your social media presence so you could focus on your core business then get in touch and let us help you dominate your niche on social media!' }

    const nav = useNavigate()

    return (
        <div className='footer-container'>
            <div className='footer-container__text'>
                <h4>Let&apos;s keep in touch</h4>
            </div>
            <div className='divider-border'></div>
            <div className='footer-container__contact'>
                <div className='footer-container__contact--infos'>
                    {THINGS.map((t, index) => (

                        <div key={index} className='contain-icon-info'>
                            <span className='imageee'>
                                {t.label}
                            </span>
                            <span className='infosss'>{t.infos}</span>
                        </div>
                    ))}
                </div>
                <div className='footer-container__contact--textlot'>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <img src={logoBlog} alt="" width={50} height={50} />
                            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Vina </div>
                        </div>
                        <div>
                            <Button style={{
                                backgroundColor: '#064469',
                                border: 'none',
                                fontWeight: 'bold',
                                color: 'white',
                                height: 40,
                                width: 100
                            }}
                                onClick={() => nav('/contact')}>Try now</Button>
                        </div>

                    </div>
                    {/* <div className='text-second'>
                        {TEXT.second}
                    </div> */}
                    <div className='text-under'>
                        {TEXT.under}
                    </div>
                </div>
            </div>
            <div className='divider-border'></div>
            <div className="footer-container__register-title">
                <span>@2023 VINA. All rights reserved </span>
            </div>
        </div>
    )
}

export default Footer