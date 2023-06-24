import { formatISO9075 } from 'date-fns'
import React from 'react'
import { useSelector } from 'react-redux'

const PostComponent = () => {

    const blogs = useSelector((state) => state.blog?.blogCollection)



    return (
        <>
            {blogs?.map(blog => (
                <div className='post' key={blog._id}>
                    <img src="https://icdn.dantri.com.vn/zoom/516_344/2023/03/03/wagner-crop-1677838337926.jpeg" alt="hinh" />
                    <div className='post-content'>
                        <h2 className='post-title'>{blog.title}</h2>
                        <p className='info'>
                            <a className='author'>Admin</a>
                            <time>{formatISO9075(new Date(blog.createdAt))}</time>
                        </p>
                        <p className='summary'>{blog.summary}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PostComponent