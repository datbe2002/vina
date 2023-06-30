import { Button, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, getBlogDateOnly } from '../../redux/slice/blogSlice';
import { useNavigate } from 'react-router-dom';
const { Column } = Table;
import { EditOutlined, PlusCircleOutlined } from '@ant-design/icons'

const BlogManagement = () => {
    const blogs = useSelector(state => state.blog?.blogCollectionDateOnly)

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
            <div className='add-cont'>
                <div className='add-icon' onClick={() => navigate('/add')}>

                    <PlusCircleOutlined style={{ fontSize: '2rem' }} />
                </div>
            </div>
            <Table dataSource={blogs}>
                <Column title="Author" dataIndex="author" key="author" />
                <Column title="Title"
                    dataIndex="title"
                    key="title"
                    ellipsis={{ showTitle: false }}
                    render={(text) => (
                        <span title={text}>{text}</span>
                    )} />
                <Column title="Summary"
                    dataIndex="summary"
                    key="summary"
                    ellipsis={{ showTitle: false }}
                    render={(text) => (
                        <span title={text}>{text}</span>
                    )} />
                <Column title="Created time" dataIndex="createdAt" key="createdAt" />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <span>
                            <Button style={{ marginRight: '1rem' }} onClick={() => handleUpdate(record._id)}>Update</Button>
                            <Button danger onClick={() => handleDelete(record._id)}>Delete</Button>
                        </span>
                    )}
                />
            </Table>
        </div>
    )
}

export default BlogManagement