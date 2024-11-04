import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const categories = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Categories categories={categories}></Categories>
        </div>
    );
};

export default Home;