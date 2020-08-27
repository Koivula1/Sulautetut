import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Ajankohtaista Vantaalla
            <img src="vantaa.png" alt="vantaa" width="70" height="70"/>
            </h1>
            <Link to="/" style={linkStyle}> Työpaikat</Link> | <Link to="/weather" style={linkStyle}> Säätiedot</Link>
        </header>
    )
}
const headerStyle = {
    background: '#0E1414',
    color: '#ffffff',
    padding: '10px'
}
const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none'
}

export default Header