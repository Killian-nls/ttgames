import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        const protocol = process.env.REACT_APP_PROTOCOL;
        const host = process.env.REACT_APP_HOST;
        const port = process.env.REACT_APP_BACKPORT;

        if (!protocol || !host || !port) {
            console.error('Missing environment variables for API URL');
            return;
        }

        const url = `${protocol}://${host}:${port}/register`;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const response = await axios.post(url, { "email" : email, "password" : hashedPassword, "username" : username }, { headers: { 'Access-Control-Allow-Origin': '*' } });
            console.log(response.data);
            localStorage.setItem('username', response.data.username);
            window.location.href = '/';
        } catch (error) {
            console.error("There was an error registering the user!", error);
            setMessage(error.response.data.message);
        }
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        backgroundColor: '#282c34',
        color: 'white'
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '20px',
        backgroundColor: '#3b3f47',
        borderRadius: '5px'
    };

    const inputStyle = {
        padding: '10px',
        margin: '0 5px',
        borderRadius: '5px',
        border: 'none'
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#61dafb',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const errorStyle = {
        color: 'red'
    };

    return (
        <div style={containerStyle}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div style={rowStyle}>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </div>
                <div style={rowStyle}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </div>
                <div style={rowStyle}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </div>
                <div style={rowStyle}>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </div>
                <button type="submit" style={buttonStyle}>Register</button>
            </form>
            <p style={errorStyle}>{message}</p>
        </div>
    );
}

export default Register;