import React from 'react'
import './Product.css'

const product = ({ product }) => {
    const productDesc = product.description.length > 20 ? product.description.substring(0, 70) + "..." : product.description;

    return (
        <div className="cart" key={product.id}>
            <div className="image">
                <img src={product.images[0]} alt={product.id} />
            </div>
            <div className='cart-details'>
                <h3>{product.title}</h3>
                <p>{productDesc}</p>
                <p className='price'>Price: ${product.price}</p>
            </div>
            <div className="cart-btn">
                <button className='btn-dlt' onClick={() => removeCart()}>Remove</button>
                <button className='btn-add' onClick={() => addCart()}>Add</button>
            </div>
        </div>

    )
}

export default product