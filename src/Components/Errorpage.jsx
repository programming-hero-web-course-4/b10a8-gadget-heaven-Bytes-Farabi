import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl md:text-3xl font-semibold mb-4">Oops! Page Not Found</p>
                <p className="text-lg md:text-xl mb-8">The page you're looking for doesn't exist or was moved.</p>

                <Link
                    to="/"
                    className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-purple-100 transition duration-300"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
        </div>

        </div>
    );
};

export default Errorpage;