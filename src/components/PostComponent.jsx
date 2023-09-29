/* eslint-disable react/prop-types */
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { URL } from '../../tkps'
import { motion } from 'framer-motion'
const PostComponent = ({ blogs }) => {

    return (
        <div className='postlist-wrap'>
            {blogs?.map(blog => (
                <div key={blog._id}>
                    <Link to={`/blog/${blog._id}`} className='postitem-wrap'>
                        <motion.img
                            viewport={{ once: true, amount: 0.8 }}
                            initial='hidden'
                            whileInView="visible"
                            transition={{ delay: 0.2, duration: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, y: -40 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            src={URL + blog.cover} alt="hinh" className='postitem-cover' />

                        <motion.div
                            viewport={{ once: true, amount: 0.5 }}
                            initial='hidden'
                            whileInView="visible"
                            transition={{ duration: 0.4 }}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className='postitem-content'>
                            <h2>{blog.title}</h2>
                            <div className='postitem-summary'>{blog.summary}</div>
                            <div className='postitem-author'>
                                <h4>Admin</h4>
                                <p><time>{format((new Date(blog.createdAt)), 'dd/MM/yyyy HH:mm')}</time></p>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default PostComponent