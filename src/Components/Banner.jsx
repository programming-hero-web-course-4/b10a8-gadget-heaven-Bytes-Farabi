import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <section className="bg-purple-600 lg:h-[50vh] relative text-white py-16 text-center rounded-b-lg">
                <div className='w-[70%] mx-auto'>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Upgrade Your Tech Accessories with Gadget Heaven Accessories
                    </h2>
                    <p className="text-lg md:text-xl mb-8">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-100 transition duration-300">
                        <Link to={"/dashboard"}>Shop Now</Link>
                    </button>
                </div>
            </section>
            <section className='absolute-section absolute lg:-mt-36 -mt-12'>
                <div className='lg:border-2 border-white lg:ml-[36vh] rounded-lg'>
                    <div className='lg:w-[100%] mx-auto flex p-3 '>
                        <img src="/assets/banner.jpg" alt="banner" className='lg:h-[35vh] lg:w-full w-[70%] mx-auto rounded-lg '/>
                    </div>
                </div>
            </section>

<div className='mt-60'>
    <h1 className='lg:text-4xl text-2xl font-semibold'>Explore Cutting-Edge Gadgets</h1>
</div>

        </div>
    );
};

export default Banner;