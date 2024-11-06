import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { getStoredReadList, getStoredWishList } from './utlis/Utitlity';

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

    const [wishlist, setWishlist] = useState([])

    useEffect(()=>{
        const storedWishlist = getStoredWishList();
        setWishlist(storedWishlist)
    }, [])

    const addToWishlist = (product) =>{
        setWishlist((prevWish) =>{
            const productExists = prevWish.some(item => item.id === product.id)
            if (!productExists) {
                const updateWishlist = [...prevWish, product]
                localStorage.setItem('wish-list', JSON.stringify(updateWishlist))
                return updateWishlist
            }
            return prevWish;
        })
    }

    return (
        <div>
            <div className='bg-purple-600 w-full rounded-t-lg'>
                <Navbar cartCount={cart.length} wishCount={wishlist.length} />
            </div>
            <Outlet context={{ addToCart, addToWishlist}} />
            <div className='mt-10'>
                <Footer />
            </div>
        </div>
    );
};

export default Root;
