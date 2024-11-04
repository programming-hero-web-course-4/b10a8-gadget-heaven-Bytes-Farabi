import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {

    const [cart, setCart] = useState([])

    const addToCart = (product) =>{
        setCart((previousCart) => {
            // Check if the product is already in the cart
            const productExists = previousCart.find(item => item.product_id === product.product_id);
            
            // Only add the product if it doesn’t already exist in the cart
            if (!productExists) {
                return [...previousCart, product];
            } else {
                return previousCart; // If it exists, return the previous cart as is
            }
        });
    }

    return (
        <div>
            <div className='bg-purple-600 w-full'>
            <Navbar cartCount={cart.length}></Navbar>
            </div>
            <Outlet context={{addToCart}}></Outlet>
            <div className='mt-40'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;