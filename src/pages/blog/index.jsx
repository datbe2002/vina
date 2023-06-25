import React, { useEffect, useState } from 'react'
import './blog.scss'
import PostComponent from '../../components/PostComponent'
import ImgLogoBlog from '../../components/ImgLogoBlog'
import { useDispatch } from 'react-redux'
import { getBlog } from '../../redux/slice/blogSlice'
import { UNSAFE_useScrollRestoration } from 'react-router-dom'

const Blog = () => {

    const scrollRestoration = UNSAFE_useScrollRestoration();

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getBlog())
    }, [])


    return (
        <div className='blog-page-container' {...scrollRestoration}>
            <ImgLogoBlog />
            <PostComponent />
        </div>
    )
}

export default Blog