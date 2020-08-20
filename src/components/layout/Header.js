import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Työpaikkoja Vantaalla</h1>
        </header>
    )
}
const headerStyle ={
    background:'#808080',
    color:'#ffffff',
    padding:'10px'
}

export default Header