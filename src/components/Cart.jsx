import React from 'react'
import './Cart.css'

const Cart = () => {
    return (
        <div className='add-cart-container'>
            <div className="add-cart-view">
                <div className="add-cart-image">
                    <img src="" alt="" />
                </div>
                <div className="add-cart-detail">
                    <p>Product Name</p>
                    <p>Price</p>
                </div>
                <div className="add-cart-btn">
                    <button>Remove</button>
                </div>
            </div>

            <div className="add-cart-view">
                <div className="add-cart-image">
                    <img src="" alt="" />
                </div>
                <div className="add-cart-detail">
                    <p>Product Name</p>
                    <p>Price</p>
                </div>
                <div className="add-cart-btn">
                    <button>Remove</button>
                </div>
            </div>

            <div className="add-cart-view">
                <div className="add-cart-image">
                    <img src="" alt="" />
                </div>
                <div className="add-cart-detail">
                    <p>Product Name</p>
                    <p>Price</p>
                </div>
                <div className="add-cart-btn">
                    <button>Remove</button>
                </div>
            </div>

            <div className="total">
                <p>Total: $000</p>
            </div>
        </div>
    )
}

export default Cart