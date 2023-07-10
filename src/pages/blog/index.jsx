import React, { useEffect, useState } from 'react'
import './blog.scss'
import PostComponent from '../../components/PostComponent'
import ImgLogoBlog from '../../components/ImgLogoBlog'
import { useDispatch } from 'react-redux'
import { getBlog } from '../../redux/slice/blogSlice'
import { UNSAFE_useScrollRestoration, useNavigate } from 'react-router-dom'

const Blog = () => {

    const scrollRestoration = UNSAFE_useScrollRestoration();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBlog())
    }, [])

    const navigate = useNavigate()

    return (
        <div className='blog-page-container' {...scrollRestoration}>
            {/* <button onClick={() => navigate('/login')}>login</button> */}
            <ImgLogoBlog />
            <PostComponent />
        </div>
    )
}

export default Blog