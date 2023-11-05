import { useEffect } from 'react'
import PostComponent from '../../components/PostComponent'
import ImgLogoBlog from '../../components/ImgLogoBlog'
import { useDispatch, useSelector } from 'react-redux'
import { getBlog } from '../../redux/slice/blogSlice'
import LoadingSpin from '../../components/LoadingSpin'
import './blog.scss'
import useScrollToTop from '../../hooks/useScrollToTop'

const Blog = () => {
    useScrollToTop()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBlog())
    }, [dispatch])

    const blogs = useSelector((state) => state.blog?.blogCollection)

    if (blogs.length < 1) {
        return (
            <div className='blog-page-container'>
                <ImgLogoBlog />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '30vh',
                    }}
                >
                    Chưa có blog
                </div>
            </div>
        );
    }


    return (
        <>
            {blogs.length < 1 ? <LoadingSpin size={50} color={'black'} /> : <div className='blog-page-container' >
                <ImgLogoBlog />
                <PostComponent blogs={blogs} />
            </div>}
        </>



    )
}

export default Blog