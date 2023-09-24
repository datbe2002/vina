import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './admin.scss'
import { getAllContact, getAllContactDateOnly, getBlog, getBlogDateOnly } from '../../redux/slice/blogSlice'
import { Layout } from 'antd';
import BlogManagement from './BlogManagement';
import ContactFromUser from './ContactFromUser';
import { useNavigate } from 'react-router-dom';
const { Sider, Content } = Layout;
import logo from '../../assets/pics/logo.png'

const AdminSection = () => {

    const auth = useSelector(state => state.blog?.USER)

    const dispatch = useDispatch()

    const [change, setChange] = useState('Blogs')

    const navigate = useNavigate()

    const contentStyle = {
        textAlign: 'center',
        minHeight: 120,
        height: "100vh",
        lineHeight: '50px',
        color: '#fff',
        background: 'linear-gradient(90deg, #DBDEE3 0%, #C6E4FF 100%)'


    };
    const siderStyle = {
        textAlign: 'center',
        lineHeight: '50px',
        color: '#fff',
        height: "100vh",
        background: 'linear-gradient(90deg, rgba(156, 205, 219, 0.2) 0%, rgba(254, 159, 184, 0.2) 100%)'
    };

    useEffect(() => {
        dispatch(getBlog())
        dispatch(getBlogDateOnly())
        dispatch(getAllContact())
        dispatch(getAllContactDateOnly())
    }, [])

    if (!auth) {
        return (
            <div style={{
                paddingTop: "200px",
                textAlign: "center",
                width: '100vw',
                height: '100vh'
            }}>
                <div style={{ minHeight: "10vh", color: "red", fontSize: "2rem" }}>You are not authorized to access this site !</div>
                <button style={{
                    backgroundColor: "#5790AB",
                    border: 'none',
                    padding: "1rem 2rem",
                    color: "white",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontFamily: "Mon"
                }} onClick={() => navigate('/login')}>Go back</button>
            </div>
        )
    }

    return (
        <div className='admin-section'>
            <Layout>

                <Sider style={siderStyle}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: "5rem",
                    }}
                        onClick={() => navigate('/')}
                    >
                        <img style={{
                            cursor: 'pointer'
                        }} width={50} height={50} src={logo} alt="" />
                    </div>
                    <div className={change === "Blogs" ? ('admin-select  active') : ('admin-select')} onClick={() => setChange("Blogs")}>
                        Blogs
                    </div>
                    <div key={'contact'} className={change === "Contacts" ? ('admin-select  active') : ('admin-select')} onClick={() => setChange("Contacts")}>
                        Contacts
                    </div>
                </Sider>
                <Content style={contentStyle}>
                    {change === "Blogs" ? <BlogManagement /> : <ContactFromUser />}
                </Content>
            </Layout>
        </div>
    )
}

export default AdminSection