import React from 'react'
import './Product.css'

const Product = ({ id, name, desc, img, price }) => {

    const productDesc = desc.length > 20 ? desc.substring(0, 70) + "..." : desc;

    return (
        <div className="cart" key={id}>
            <div className="image">
                <img src={img} alt={id} />
            </div>
            <div className='cart-details'>
                <h3>{name}</h3>
                <p>{productDesc}</p>
                <p className='price'>Price: ${price}</p>
            </div>
            <div className="cart-btn">
                <button className='btn-dlt' onClick={() => handleDelete(id)}>Delete</button>
                <button className='btn-add' onClick={() => handleAddtoCart(id)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product