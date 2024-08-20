import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={linkContainerStyle}>
                <a href="mailto:bauerpictu@gmail.com" style={linkStyle}>
                    Email Support
                </a>
                <a href="https://t.me/bjack318" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    Telegram Support
                </a>
            </div>
        </footer>
    );
};

const footerStyle = {
    backgroundImage: 'linear-gradient(30deg, #0048bd, #44a7fd)',
    padding: '10px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
    color: '#ffffff',
};

const linkContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
};

const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '16px',
};

export default Footer;