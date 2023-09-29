import { useEffect } from 'react'
import './blog.scss'
import PostComponent from '../../components/PostComponent'
import ImgLogoBlog from '../../components/ImgLogoBlog'
import { useDispatch, useSelector } from 'react-redux'
import { getBlog } from '../../redux/slice/blogSlice'
import { useLocation } from 'react-router-dom'
import LoadingSpin from '../../components/LoadingSpin'
const Blog = () => {
    const dispatch = useDispatch()
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        dispatch(getBlog())
    }, [dispatch])

    const blogs = useSelector((state) => state.blog?.blogCollection)
    console.log(blogs)
    return (
        <div className='blog-page-container' >
            <ImgLogoBlog />
            {!blogs.length == 0 ? <PostComponent blogs={blogs} /> : <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '30vh'
            }}>
                <LoadingSpin size={50} color={'black'} />
            </div>}
        </div>
    )
}

export default Blog