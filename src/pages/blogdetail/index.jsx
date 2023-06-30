import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import './blogdetail.scss'
import { useSelector } from 'react-redux';

import { URL } from '../../../tkps';

const BlogDetail = () => {

    const [postInfo, setPostInfo] = useState(null);

    const auth = useSelector(state => state.blog?.USER)

    const { id } = useParams();
    useEffect(() => {
        fetch(URL + `api/blog/${id}`)
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
            <time>{format((new Date(postInfo.createdAt)), 'dd/MM/yyyy HH:mm')}</time>
            <div className="author">by {postInfo.author}</div>

            <div className="image">
                <img src={URL + postInfo.cover} alt="hinh" />
            </div>
            <h1>{postInfo.title}</h1>
            <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    );
}

export default BlogDetail