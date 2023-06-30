import { format } from 'date-fns'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BlogSession = () => {

    const blogs = useSelector((state) => state.blog?.blogCollection)

    const [counter, setCounter] = useState(0);

    const blogsToDisplay = blogs.slice(counter, counter + 3);


    if (blogs.length < 1) {
        return (
            <div className='blog-map-child'>
                <div className='post'>
                    <div className='empty-blog'>
                        No blog to display....
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='blog-map-child'>
            {blogsToDisplay?.map(blog => {
                return (

                    <div key={blog._id}>
                        <Link to={`/blog/${blog._id}`} className='post'>

                            {/* <img src={URL + blog.cover} alt="ss" /> */}
                            <div className='post-content'>


                                <h2 className='post-title'>{blog.title}</h2>
                                <p className='info'>
                                    <a className='author'>By <span style={{ textDecoration: 'underline' }}> {blog.author}</span></a>
                                    <time>on {format(new Date(blog.createdAt), 'EEEE, dd MMMM yyyy')}</time>
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