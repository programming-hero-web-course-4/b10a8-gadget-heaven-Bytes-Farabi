import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { handleAddToCartList, addToStoredWishList } from './utlis/Utitlity';

const ProductDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [product, setProduct] = useState();

    useEffect(() => {
        const singleData = data.find(product => product.product_id == id);
        setProduct(singleData);
    }, [data, id]);

    if (!product) {
        return <p>Loading...</p>; // Display a loading message while the product is being fetched
    }
    console.log(product);

    const { product_id, product_title, product_image, category, price, description, specification, availability, rating } = product;

    const handleAddToCart = (id) =>{
        handleAddToCartList(id)
    }

    const handleWishList = (id) => {
        addToStoredWishList(id)
    }

    return (
        <div className="bg-gray-100 py-10">
            <div className="text-center mb-8 w-[60%] mx-auto">
                <h1 className="text-3xl font-bold text-purple-600">Product Details</h1>
                <p className="text-gray-600">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="bg-white shadow-md rounded-lg max-w-4xl mx-auto p-6 flex gap-8">
                <div className="w-1/3 bg-gray-200 rounded-md h-64">
                    <img src={product_image} alt={product_title} className="w-full h-full object-cover rounded-md" />
                </div>
                <div className="w-2/3 text-left">
                    <h2 className="text-2xl font-bold">{product_title}</h2>
                    <p className="text-xl font-semibold text-gray-700 mt-2">Price: ${price}</p>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${availability ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {availability ? 'In Stock' : 'Out of Stock'}
                    </span>
                    <p className="text-gray-600 mt-4">{description}</p>
                    <div className="mt-6">
                        <h3 className="font-semibold text-lg">Specification:</h3>
                        <ul className="text-gray-700 mt-2 text-left">
                            {specification.map((spec, index) => (
                                <li key={index} className="ml-4 list-decimal">{spec}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6 flex items-center">
                        <p className="font-semibold text-lg">Rating</p>
                        <div className="flex items-center ml-4">
                            <span className="text-yellow-500 text-xl">★ ★ ★ ★ ☆</span>
                            <span className="ml-2 text-gray-700">{rating}</span>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <button onClick={()=>handleAddToCart(product_id)} className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
                            Add To Cart
                        </button>
                        <button id='wishlistBtn' onClick={()=>handleWishList(product_id)} className="border border-purple-600 text-purple-600 px-4 py-1 rounded-lg font-semibold hover:bg-purple-50 transition text-5xl">
                            ♥
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
