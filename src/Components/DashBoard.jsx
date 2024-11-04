import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const DashBoard = () => {
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
          <h2 className="text-xl">Cart Items</h2>
          <p>cart items here...</p>
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
