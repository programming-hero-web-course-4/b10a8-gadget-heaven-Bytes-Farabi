import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Categories = ({ categories }) => {

  return (
    <div className='mt-10'>
      <div role="tablist" className="tabs tabs-lifted">
        {
          categories.map(category => (
            <NavLink role="tab" className={({isActive})=>`tab ${isActive? 'tab-active': ''}`} key={category.category} to={`/category/${category.category}`}>{category.category}</NavLink>
          ))
        }

      </div>
    </div>
  );
};

export default Categories;