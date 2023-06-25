import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
// import {UserContext} from "../UserContext";
import { Link } from 'react-router-dom';
import './blogdetail.scss'
import LoginPopup from './LoginPopup';
import { useSelector } from 'react-redux';

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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </div>
            </div>
            {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} />}

            <div className="image">
                <img src={`https://icdn.dantri.com.vn/zoom/516_344/2023/03/03/wagner-crop-1677838337926.jpeg`} alt="" />
            </div>
            <h1>{postInfo.title}</h1>
            <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    );
}
//https://icdn.dantri.com.vn/zoom/516_344/2023/03/03/wagner-crop-1677838337926.jpeg
//http://localhost:4000/${postInfo.cover}
export default BlogDetail