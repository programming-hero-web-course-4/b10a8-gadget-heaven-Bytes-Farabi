import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const categories = useLoaderData();

    return (
        <div>
            <Helmet><title>Home - Gadget Heaven</title></Helmet>
            <Banner></Banner>
            <Categories categories={categories}>
            </Categories>
                <Outlet></Outlet>
        </div>
    );
};

export default Home;