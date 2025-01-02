import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', { "email" : email, "password" : password }, { headers: { 'Access-Control-Allow-Origin': '*' } });
            if (response.status === 200) {
                localStorage.setItem('username', response.data.username);
                window.location.href = '/';    
            } else {
                setMessage(response.data.message);
            }
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

    return (
        <div style={containerStyle}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
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
                <button type="submit" style={buttonStyle}>Login</button>
            </form>
            {message && <p style={{ color: 'red' }}>{message}</p>}
        </div>
    );
}

export default Login;