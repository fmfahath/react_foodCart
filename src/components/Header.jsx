import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <p>Logo</p>
            </div>
            <div className="nav-link">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/viewCart">View Cart</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header