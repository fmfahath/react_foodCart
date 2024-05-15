import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <p>LOGO</p>
            </div>
            <div className="nav-link">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">View Cart</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header