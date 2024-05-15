import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import { cartContext } from '../App';



const Header = () => {

    const { cart } = useContext(cartContext);

    return (
        <div className='navbar'>
            <div className='logo'>
                <p>LOGO</p>
            </div>
            <div className="nav-link">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">View Cart <span className='cart-count'>{cart.length}</span></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header