import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './editPage.scss'
import { useNavigate, useParams } from 'react-router-dom'
import Editor from '../../components/Editor'
import { updateBlog } from '../../redux/slice/blogSlice'
import { URL } from '../../../tkps'
import logo from '../../assets/pics/logo.png'
import LoadingSpin from '../../components/LoadingSpin'
const EditPage = () => {
    const auth = useSelector(state => state.blog?.USER)
    const loading = useSelector(state => state.blog?.loading)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [cover, setCover] = useState('');

    const updatePost = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);

        if (files && files.length > 0) {
            data.append('file', files?.[0]);
        }
        dispatch(updateBlog({ data, navigate }))
    }


    useEffect(() => {
        fetch(URL + `api/blog/${id}`)
            .then(response => {
                response.json().then(p => {
                    setTitle(p.title)
                    setSummary(p.summary)
                    setContent(p.content)
                    setCover(p.cover)
                });
            });
    }, []);

    if (!auth) {
        return (
            <div style={{ paddingTop: "200px", height: "100vh", textAlign: "center", color: "red", fontSize: "2rem" }}>You are not authorized to access this site !</div>
        )
    }

    return (
        <>
            <div style={{
                width: '100vw',
                textAlign: "center",
            }}>
                <img className='image-edit' src={URL + cover} alt="" />
            </div>
            <form
                onSubmit={updatePost}
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
                    accept="image/*" />
                <Editor value={content} onChange={setContent} />
                <button style={{ marginTop: '5px' }}>
                    {loading ? <LoadingSpin /> : 'Edit blog'}
                </button>
            </form>
        </>
    )
}

export default EditPage