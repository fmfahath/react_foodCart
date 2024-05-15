import React, { useState } from 'react'
import './Home.css'
import Product from './Product'
import data from '../data.json'

const Home = () => {

    const [productData, setProductData] = useState(data);

    return (
        <div className='cart-container'>
            {productData.products.map((item) => (
                <Product
                    id={item.id}
                    name={item.brand}
                    img={item.images[0]}
                    desc={item.description}
                    price={item.price}
                />
            ))}
        </div>
    )
}

export default Home