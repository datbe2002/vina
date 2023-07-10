import React, { memo, useState } from 'react'
import './login.scss'
import { setUserAuth } from '../../redux/slice/blogSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PASSWORD, USERNAME } from '../../../tkps';
const LoginPage = () => {
    console.log(PASSWORD)
    console.log(USERNAME)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()
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
            toast.success("Logged in successfully", {
                position: "top-center",
            })
            navigate('/admin/control/Mxh8m6fIlKps3L5qDdi0')
            // Perform additional actions like setting user session, navigating to another page, etc.
        } else {
            setError('Invalid username or password.');
        }
    };
    return (
        <div className='login-section'>
            <div className='login-box'>
                <h2 style={{ margin: 0 }}>Welcome, administrator</h2>
                <form className='form-login'>
                    <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    {error && <div className="error-message" style={{ color: "red", fontSize: '15px', textAlign: 'center' }}>{error}</div>}
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default memo(LoginPage)