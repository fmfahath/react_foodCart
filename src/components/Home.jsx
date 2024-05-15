import React, { useContext, useState } from 'react'
import './Home.css'
import Product from "./Product"
import data from '../data.json'
import { cartContext } from '../App'

const Home = () => {

    const { cart, setCart } = useContext(cartContext);
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