import { formatISO9075 } from 'date-fns'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BlogSession = () => {

    const blogs = useSelector((state) => state.blog?.blogCollection)

    const [counter, setCounter] = useState(0);

    const blogsToDisplay = blogs.slice(counter, counter + 3);


    if (blogs.length < 1) {
        return (
            <div>Error</div>
        )
    }
    return (
        <div className='blog-map-child'>
            {blogsToDisplay?.map(blog => {
                return (

                    <div key={blog._id}>
                        <Link to={`/blog/${blog._id}`} className='post'>

                            <img src="https://icdn.dantri.com.vn/zoom/516_344/2023/06/23/tong-bi-thu-va-tong-thong-han-1-1687523521526.jpg" alt="ss" />
                            <div className='post-content'>


                                <h1 className='post-title'>{blog.title}</h1>
                                <p className='info'>
                                    <a className='author'>{blog.author}</a>
                                    <time>{formatISO9075(new Date(blog.createdAt))}</time>
                                </p>
                                <div className='summary'>
                                    <p>{blog.summary}</p></div>
                            </div>
                        </Link>

                    </div>)
            })}
        </div>
    )
}

export default BlogSession