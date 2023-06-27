import { Button, Table } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog } from '../../redux/slice/blogSlice';
import { useNavigate } from 'react-router-dom';
const { Space, Column } = Table;
const BlogManagement = () => {
    const blogs = useSelector(state => state.blog?.blogCollection)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleDelete = (id) => {
        const confirmed = window.confirm("Do you want to delete")
        if (confirmed) {
            dispatch(deleteBlog({ id }))
        }
    }

    const handleUpdate = (id) => {
        navigate(`/admin/control/Mxh8m6fIlKps3L5qDdi0/update/${id}`)
    }

    return (
        <div className='table-contan'>
            <Table dataSource={blogs}>
                <Column title="Author" dataIndex="author" key="author" />
                <Column title="Title" dataIndex="title" key="title" />
                <Column title="Summary" dataIndex="summary" key="summary" />
                <Column title="Created time" dataIndex="createdAt" key="createdAt" />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <span>
                            <Button onClick={() => handleUpdate(record._id)}>Update</Button>
                            <Button onClick={() => handleDelete(record._id)}>Delete</Button>
                        </span>
                    )}
                />
            </Table>
        </div>
    )
}

export default BlogManagement