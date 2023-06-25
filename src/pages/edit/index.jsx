import React from 'react'
import ErrorPage from '../error'
import { useSelector } from 'react-redux'

const EditPage = () => {


    const auth = useSelector(state => state.blog?.USER)

    if (!auth) {
        return (
            <div style={{ paddingTop: "200px", minHeight: "60vh", textAlign: "center", color: "red", fontSize: "2rem" }}>You are not authorized to access this site !</div>
        )
    }

    return (
        <div>EditPage</div>
    )
}

export default EditPage