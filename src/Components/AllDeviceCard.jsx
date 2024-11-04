import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';

const AllDeviceCard = () => {

    const productsData = useLoaderData()

    const { category } = useParams()

    const [cards, setCards] = useState([])

    useEffect(() => {

        if (category) {
            const filteredByCategory = [...productsData].filter(card => (card.category === category))
            setCards(filteredByCategory)
        }
        else{
            setCards(productsData)
        }

    }, [category, productsData])

    return (
        <div className="grid grid-cols-3 gap-5 mt-10">
            {cards.map(productData => (
                <div key={productData.product_id} className="max-w-xs rounded-lg shadow-md border border-gray-200 p-4">
                    <div className="w-full h-48 bg-gray-300 rounded-md"></div>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">{productData.product_title}</h2>
                        <p className="text-gray-500">Price: {productData.price}</p>

                        <button className="mt-4 px-4 py-2 border border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-50 transition-colors">
                            <NavLink to={`/productdetails/${productData.product_id}`}>View Details</NavLink>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllDeviceCard;