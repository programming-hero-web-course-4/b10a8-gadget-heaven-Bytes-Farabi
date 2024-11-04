import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Categories = ({ categories }) => {

  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        {
          categories.map(category => (
            <Link role="tab" className="tab" key={category.category} to={`/category/${category.category}`}>{category.category}</Link>
          ))
        }

      </div>
    </div>
  );
};

export default Categories;