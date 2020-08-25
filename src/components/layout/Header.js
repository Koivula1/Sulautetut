import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Työpaikkoja Vantaalla
            <img src="vantaa.png" alt="vantaa" width="70" height="70"></img>
            </h1>
        </header>
    )
}
const headerStyle = {
    background: '#0E1414',
    color: '#ffffff',
    padding: '10px'
}

export default Header