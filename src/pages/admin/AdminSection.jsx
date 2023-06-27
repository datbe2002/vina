import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './admin.scss'
import { getAllContact, getBlog } from '../../redux/slice/blogSlice'
import { Layout } from 'antd';
import BlogManagement from './BlogManagement';
import ContactFromUser from './ContactFromUser';
const { Sider, Content } = Layout;
const AdminSection = () => {

    const auth = useSelector(state => state.blog?.USER)

    const dispatch = useDispatch()

    const [change, setChange] = useState('Blogs')

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
        dispatch(getAllContact())
    }, [])

    if (!auth) {
        return (
            <div style={{ paddingTop: "200px", minHeight: "60vh", textAlign: "center", color: "red", fontSize: "2rem" }}>You are not authorized to access this site !</div>
        )
    }

    return (
        <div className='admin-section'>
            <Layout>
                <Sider style={siderStyle}>

                    <div className={change === "Blogs" ? ('admin-select  active') : ('admin-select')} onClick={() => setChange("Blogs")}>
                        Blogs
                    </div>
                    <div className={change === "Contacts" ? ('admin-select  active') : ('admin-select')} onClick={() => setChange("Contacts")}>
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