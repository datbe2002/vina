/* eslint-disable react/prop-types */
import LoadingSpin from '../../components/LoadingSpin';

const ContactForm = ({ onSubmit, loading, formData, setFormData }) => {


    const { firstName, lastName, email, subject, message } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            {/* Form inputs here */}
            <div className='name-group'>
                <div className='form-group'>
                    <label htmlFor='firstName'>First Name:</label>
                    <input
                        className='first-name'
                        type='text'
                        id='firstName'
                        name='firstName'
                        value={firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input
                        className='last-name'
                        type='text'
                        id='lastName'
                        name='lastName'
                        value={lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input
                    className='email'
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='subject'>Subject:</label>
                <input
                    className='subject'
                    type='text'
                    id='subject'
                    name='subject'
                    value={subject}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='message'>Message:</label>
                <textarea
                    id='message'
                    name='message'
                    value={message}
                    onChange={handleChange}
                    required
                    className='textarea'
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? <LoadingSpin size={24} /> : 'Submit'}
            </button>
        </form>
    );
}

export default ContactForm