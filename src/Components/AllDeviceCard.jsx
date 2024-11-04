import React from 'react';
import { useParams } from 'react-router-dom';

const AllDeviceCard = () => {

    const {category} = useParams()
    console.log(category);

    return (
        <div>
           <h1> device card ... {category}</h1>
        </div>
    );
};

export default AllDeviceCard;