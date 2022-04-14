import React from 'react'
import Logo from '../images/logo.png'

export default function Nav() {
    return (
        <nav className='nav'>
            <a href="../public/index.html">
                <img className="logo" src={Logo} alt="airbnb logo" />
            </a>
        </nav>
    )
}