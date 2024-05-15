import React, { useState } from 'react'
import './Home.css'
import Product from "./Product"
import data from '../data.json'

const Home = ({ cart, setCart }) => {

    const [productData, setProductData] = useState(data);

    return (
        <div className='cart-container'>
            {productData.products.map((product) => (
                <Product key={product.id} product={product} cart={cart} setCart={setCart} />
            ))}
        </div>
    )
}

export default Home