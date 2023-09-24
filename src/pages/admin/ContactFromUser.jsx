import { Button, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../../redux/slice/blogSlice';
const { Column } = Table;

const ContactFromUser = () => {
    const contacts = useSelector(state => state.blog?.contactCollectionDateOnly)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        const confirmed = window.confirm("Do you want to delete")
        if (confirmed) {
            dispatch(deleteContact({ id }))
        }
    }
    return (
        <div className='table-contan'>
            <div style={{
                height: "5rem"
            }}></div>
            <Table dataSource={contacts}>
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Subject"
                    dataIndex="subject"
                    key="subject"
                    ellipsis={{ showTitle: false }}
                    render={(text) => (
                        <span title={text}>{text}</span>
                    )} />
                <Column title="Message"
                    dataIndex="message"
                    key="message"
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
                            <Button danger onClick={() => handleDelete(record._id)}>Delete</Button>
                        </span>
                    )}
                />
            </Table>
        </div>
    )
}

export default ContactFromUser