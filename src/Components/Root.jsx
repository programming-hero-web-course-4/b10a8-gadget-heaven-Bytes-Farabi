import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <div className='bg-purple-600 w-full'>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className='mt-40'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;