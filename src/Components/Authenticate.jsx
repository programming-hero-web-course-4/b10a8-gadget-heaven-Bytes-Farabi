import React, { useState } from 'react';

const Authenticate = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (

      <div className="h-[80vh] rounded-md flex items-center justify-center bg-purple-600">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            {isSignUp ? 'Create an Account' : 'Welcome Back'}
          </h2>
          <p className="text-center text-gray-500 mb-8">
            {isSignUp ? 'Sign up to get started!' : 'Sign in to continue'}
          </p>
  
          <form>

            {isSignUp && (
              <div className="mb-4">
                <label className="block text-gray-700 text-left">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="John Doe"
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 text-left">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="example@example.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-left">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="••••••••"
              />
            </div>

            {isSignUp && (
              <div className="mb-4">
                <label className="block text-gray-700 text-left">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="••••••••"
                />
              </div>
            )}
  
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>

          </form>
  
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <span
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-purple-600 font-bold cursor-pointer hover:underline"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </span>
            </p>
          </div>
          
        </div>
      </div>
      
    );
};

export default Authenticate;