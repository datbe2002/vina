import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PASSWORD, USERNAME } from '../../../tkps';
import { useDispatch } from 'react-redux';
import { setUserAuth } from '../../redux/slice/blogSlice';

const LoginPopup = ({ onClose }) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        setError('')
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('')
    };

    const dispatch = useDispatch()
    const handleLogin = (e) => {
        // Handle login logic here
        e.preventDefault();
        if (username.trim() === '') {
            setError('Please enter your username.');
            return;
        }

        if (password.trim() === '') {
            setError('Please enter your password.');
            return;
        }

        if (username === USERNAME && password === PASSWORD) {
            // Successful login logic
            console.log('Login successful!');
            dispatch(setUserAuth(true))
            onClose()
            // Perform additional actions like setting user session, navigating to another page, etc.
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <div className='login-container'>
            <div className="login-popup">
                <div style={{ width: "100%", justifyContent: "right", display: 'flex' }}>
                    <button className="close-button" onClick={onClose}>
                        X
                    </button>
                </div>
                <h2>Login</h2>
                <form className='form-login'>
                    <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    {error && <p className="error-message" style={{ color: "red", fontSize: '15px' }}>{error}</p>}
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;