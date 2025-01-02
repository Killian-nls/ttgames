import React from 'react';

export default function Footer() {
    const footerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 20px',
        height: '10vh',
        backgroundColor: '#282c34',
        color: 'white',
        position: 'fixed',
        bottom: '0',
        width: '100%'
    };
    
    return (
        <footer style={footerStyle}>
            <p>Website created by Killian Mathé with the help of Manon Roux</p>
        </footer>
    );
};