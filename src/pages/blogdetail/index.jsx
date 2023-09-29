import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import './blogdetail.scss'

import { URL } from '../../../tkps';

const BlogDetail = () => {

    const [postInfo, setPostInfo] = useState(null);


    const { id } = useParams();
    useEffect(() => {
        fetch(URL + `api/blog/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    }, [id]);



    if (!postInfo) return '';

    console.log(postInfo)

    return (
        <div className="post-page">
            <h1>{postInfo.title}</h1>
            <div className="image">
                <img src={URL + postInfo.cover} alt="hinh" />
            </div>
            <time>{format((new Date(postInfo.createdAt)), 'dd/MM/yyyy HH:mm')}</time>
            <div className="author">by {postInfo.author}</div>
            <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    );
}

export default BlogDetail