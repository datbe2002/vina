import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import './contact.scss';

const ContactPage = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Pass the form data to the onSubmit function
        onSubmit({ firstName, lastName, email, subject, message });

        // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <form onSubmit={handleSubmit}>
                <div className="name-group">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={handleLastNameChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={handleSubjectChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                        required
                        className="textarea-fixed-height" 
                    />

                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

ContactPage.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default memo(ContactPage);
