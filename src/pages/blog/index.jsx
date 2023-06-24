import React from 'react'
import './blog.scss'
import PostComponent from '../../components/PostComponent'
import ImgLogoBlog from '../../components/ImgLogoBlog'

const Blog = () => {
    return (
        <div className='blog-page-container'>
            <ImgLogoBlog />
            <PostComponent />

        </div>
    )
}

export default Blog