import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './editPage.scss'
import { useParams } from 'react-router-dom'
import Editor from '../../components/Editor'
const EditPage = () => {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    const auth = useSelector(state => state.blog?.USER)

    const { id } = useParams()


    const [postInfo, setPostInfo] = useState()
    console.log(postInfo)

    useEffect(() => {
        fetch(`http://localhost:3000/api/blog/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    }, []);

    if (!auth) {
        return (
            <div style={{ paddingTop: "200px", minHeight: "60vh", textAlign: "center", color: "red", fontSize: "2rem" }}>You are not authorized to access this site !</div>
        )
    }

    return (
        <form
            //  onSubmit={createNewPost} 
            className='edit-page-container'>

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

export default EditPage