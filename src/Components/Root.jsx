import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { getStoredReadList } from './utlis/Utitlity';

const Root = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredReadList();
        setCart(storedCart);
    }, []);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const productExists = prevCart.some(item => item.id === product.id);
            if (!productExists) {
                const updatedCart = [...prevCart, product];
                localStorage.setItem('read-list', JSON.stringify(updatedCart));
                return updatedCart;
            }
            return prevCart;
        });
    };

    return (
        <div>
            <div className='bg-purple-600 w-full'>
                <Navbar cartCount={cart.length} />
            </div>
            <Outlet context={{ addToCart }} />
            <div className='mt-40'>
                <Footer />
            </div>
        </div>
    );
};

export default Root;
