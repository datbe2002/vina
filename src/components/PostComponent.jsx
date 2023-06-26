import { formatISO9075 } from 'date-fns'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PostComponent = () => {

    const blogs = useSelector((state) => state.blog?.blogCollection)

    const url = "http://localhost:3000/"


    return (
        <>
            {blogs?.map(blog => (
                <div key={blog._id}>
                    <Link to={`/blog/${blog._id}`} className='post'>

                        <img src={"http://localhost:3000/" + blog.cover} alt="hinh" />
                        <div className='post-content'>
                            <h2 className='post-title'>{blog.title}</h2>
                            <p className='info'>
                                <a className='author'>Admin</a>
                                <time>{formatISO9075(new Date(blog.createdAt))}</time>
                            </p>
                            <div className='summary'>
                                <p>
                                    {blog.summary}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default PostComponent