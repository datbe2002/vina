import { format } from 'date-fns'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { URL } from '../../tkps'

const PostComponent = () => {

    const blogs = useSelector((state) => state.blog?.blogCollection)




    return (
        <>
            {blogs?.map(blog => (
                <div key={blog._id}>
                    <Link to={`/blog/${blog._id}`} className='post'>

                        <img src={URL + blog.cover} alt="hinh" className='imgBlog'/>
                        <div className='post-content'>
                            <h2 className='post-title'>{blog.title}</h2>
                            <p className='info'>
                                <a className='author'>Admin</a>
                                <time>{format((new Date(blog.createdAt)), 'dd/MM/yyyy HH:mm')}</time>
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