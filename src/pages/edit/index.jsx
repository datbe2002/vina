import React from 'react'
import { useSelector } from 'react-redux'
import './editPage.scss'
const EditPage = () => {


    const auth = useSelector(state => state.blog?.USER)

    if (!auth) {
        return (
            <div style={{ paddingTop: "200px", minHeight: "60vh", textAlign: "center", color: "red", fontSize: "2rem" }}>You are not authorized to access this site !</div>
        )
    }

    return (
        <div className='edit-page-container'>
            edit
        </div>
    )
}

export default EditPage