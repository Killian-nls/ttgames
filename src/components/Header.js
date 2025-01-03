import React from 'react';

export default function Header() {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        height: '10vh',
        backgroundColor: '#282c34',
        color: 'white'
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#61dafb',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    const navStyle = {
        display: 'flex',
        gap: '10px'
    };

    return (
        <header style={headerStyle}>
            <h1 onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>TrouTrou</h1>
            <nav style={navStyle}>
                {!localStorage.getItem('username') && (<>
                    <button style={buttonStyle} onClick={() => window.location.href = '/login'}>
                        Login
                    </button>
                    <button style={buttonStyle} onClick={() => window.location.href = '/register'}>
                        Register
                    </button>
                </>
                )}
                {localStorage.getItem('username') && (<>
                    <p>Welcome, {localStorage.getItem('username')}</p>
                    <button style={buttonStyle} onClick={() => {
                        localStorage.removeItem('username');
                        window.location.href = '/';
                    }}>
                        Logout
                    </button>
                </>
                )}
            </nav>
        </header>
    );
};