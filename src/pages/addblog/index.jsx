import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Editor from '../../components/Editor'
import './add.scss'
import { createBlog } from '../../redux/slice/blogSlice'
const AddBlog = () => {
    const auth = useSelector(state => state.blog?.USER)
    if (!auth) {
        return (
            <div style={{ paddingTop: "200px", minHeight: "60vh", textAlign: "center", color: "red", fontSize: "2rem" }}>You are not authorized to access this site !</div>
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