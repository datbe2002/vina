import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import './blogdetail.scss'
import LoginPopup from './LoginPopup';
import { useSelector } from 'react-redux';

import { EditOutlined, PlusCircleOutlined } from '@ant-design/icons'

const BlogDetail = () => {

    const [postInfo, setPostInfo] = useState(null);

    const auth = useSelector(state => state.blog?.USER)

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:3000/api/blog/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    }, []);

    const navigate = useNavigate()
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const handleEditClick = () => {

        if (auth) {
            navigate(`/edit/${postInfo._id}`);
        }
        if (!auth) {
            setShowLoginPopup(true);
        }
    };

    if (!postInfo) return '';



    return (
        <div className="post-page">
            <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            <div className="author">by {postInfo.author}</div>

            <div className="edit-row">
                <div className="edit-btn" onClick={handleEditClick}>
                    <EditOutlined style={{ fontSize: '1rem', alignItems: "center", color: "white" }} />
                </div>
                {auth && <div className='add-btn' onClick={() => navigate('/add')}>
                    <PlusCircleOutlined style={{ fontSize: '1rem', alignItems: "center", color: "white" }} />
                </div>}

            </div>
            {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} />}

            <div className="image">
                <img src={"http://localhost:3000/" + postInfo.cover} alt="" />
            </div>
            <h1>{postInfo.title}</h1>
            <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    );
}
//https://icdn.dantri.com.vn/zoom/516_344/2023/03/03/wagner-crop-1677838337926.jpeg
//http://localhost:4000/${postInfo.cover}
export default BlogDetail