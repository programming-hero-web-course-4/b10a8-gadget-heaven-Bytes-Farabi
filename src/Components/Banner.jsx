import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="bg-purple-600 h-[50vh] relative text-white py-16 text-center rounded-lg">
                <div className='w-[70%] mx-auto'>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Upgrade Your Tech Accessories with Gadget Heaven Accessories
                    </h2>
                    <p className="text-lg md:text-xl mb-8">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-100 transition duration-300">
                        Shop Now
                    </button>
                </div>
            </section>
            <section className='absolute-section absolute -mt-36 mb-60'>
                <div className='border-2 border-white ml-[36vh] rounded-lg'>
                    <div className='w-[100%] mx-auto flex p-3'>
                        <img src="/public/assets/banner.jpg" alt="banner" className='h-[35vh] w-full] rounded-lg mb-60'/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;