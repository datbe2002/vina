import { Table } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const { Column } = Table;

const ContactFromUser = () => {
    const contacts = useSelector(state => state.blog?.contactCollection)
    console.log(contacts)
    return (
        <div className='table-contan'>
            <Table dataSource={contacts}>
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Subject" dataIndex="subject" key="subject" />
                <Column title="Message" dataIndex="message" key="message" />
                <Column title="Created time" dataIndex="createdAt" key="createdAt" />
            </Table>
        </div>
    )
}

export default ContactFromUser