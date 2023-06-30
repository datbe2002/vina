import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import Editor from '../../components/Editor'
import './add.scss'
import { createBlog } from '../../redux/slice/blogSlice'
const AddBlog = () => {
    const auth = useSelector(state => state.blog?.USER)
    const navigate = useNavigate()
    if (!auth) {
        return (
            <div style={{
                paddingTop: "200px",
                textAlign: "center",
                width: '100vw'
            }}>
                <div style={{ minHeight: "10vh", color: "red", fontSize: "2rem" }}>You are not authorized to access this site !</div>
                <button style={{
                    backgroundColor: "#5790AB",
                    border: 'none',
                    padding: "1rem 2rem",
                    color: "white",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontFamily: "Mon"
                }} onClick={() => navigate('/login')}>Go back</button>
            </div>
        )
    }

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    const dispatch = useDispatch()

    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        if (files && files.length > 0) {
            data.append('file', files[0]);
        }
        console.log(data)
        ev.preventDefault();
        dispatch(createBlog(data))
        setRedirect(true)
    }


    if (redirect) {
        return <Navigate to={'/blog'} />
    }

    return (

        <form onSubmit={createNewPost} className='add-container'>

            <input type="title"
                placeholder={'Title'}
                value={title}
                onChange={ev => setTitle(ev.target.value)}
                required />
            <input type="summary"
                placeholder={'Summary'}
                value={summary}
                onChange={ev => setSummary(ev.target.value)}
                required />
            <input type="file"
                onChange={ev => setFiles(ev.target.files)}
                accept="image/*"
                required />
            <Editor value={content} onChange={setContent} />
            <button style={{ marginTop: '5px' }}>Create blog</button>
        </form>
    )
}

export default AddBlog