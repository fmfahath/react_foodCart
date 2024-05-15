import React, { useEffect, useState } from 'react'
import './Cart.css'

const Cart = ({ cart, setCart }) => {

    const [total, setTotal] = useState(0);

    const removeCart = (id) => {
        setCart(cart.filter((c) => c.id !== id));
    };

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
    }, [cart]);

    return (
        <div className='add-cart-container'>
            {cart.map((item) => (
                <div className="add-cart-view" key={item.id}>
                    <div className="add-cart-image">
                        <img src={item.images[0]} alt={item.id} />
                    </div>
                    <div className="add-cart-detail">
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                    </div>
                    <div className="add-cart-btn">
                        <button className='remove-btn' onClick={() => removeCart(item.id)}>Remove</button>
                    </div>
                </div>
            ))}

            <div className="total">
                <p>Total: ${total}</p>
            </div>
        </div>
    )
}

export default Cart