import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBlog } from '../../../redux/slice/blogSlice'
import BlogSession from './BlogSession'
import ReadmoreButton from './ReadmoreButton'

const Blog = () => {

    return (
        <div className='blog-container'>
            <div className='blog-introduce'>
                BLOG
            </div>
            <BlogSession />
            <ReadmoreButton />
        </div>
    )
}

export default Blog