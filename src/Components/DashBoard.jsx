import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from './utlis/Utitlity';
import { AiOutlineClose } from 'react-icons/ai';

const DashBoard = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = getStoredReadList();
    setCartItems(items);
  }, []);

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.product_id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('read-list', JSON.stringify(updatedCart));
  };

  return (
    <section className="bg-purple-600 text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <p className="text-lg mb-8">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <Tabs>
        <TabList className="flex justify-center space-x-4 mb-4">
          <Tab className="px-6 py-2 font-semibold rounded-full cursor-pointer bg-white text-purple-600 shadow-lg focus:outline-none hover:bg-purple-100 transition duration-300">
            Cart
          </Tab>
          <Tab className="px-6 py-2 font-semibold rounded-full cursor-pointer bg-transparent border-2 border-white text-white shadow-lg focus:outline-none hover:bg-purple-700 transition duration-300">
            Wishlist
          </Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-xl mb-4">Cart Items ({cartItems.length})</h2>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.product_id} className="bg-white text-black p-4 rounded-lg flex items-center justify-between shadow-md">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-md mr-4">
                    <img src={item.product_image || '/placeholder.jpg'} alt={item.product_title} className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.product_title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="font-semibold">Price: ${item.price}</p>
                  </div>
                </div>
                <button onClick={() => handleRemoveFromCart(item.product_id)} className="text-red-500 hover:text-red-700 transition">
                  <AiOutlineClose size={24} />
                </button>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h2 className="text-xl">Wishlist Items</h2>
          <p>wishlist items here...</p>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default DashBoard;
