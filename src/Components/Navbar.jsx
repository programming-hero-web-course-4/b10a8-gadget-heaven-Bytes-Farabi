import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ cartCount, wishCount }) => {

    const location = useLocation()

    const navbarStyle = location.pathname === '/' ? 'bg-purple-600' : 'bg-black';

    const links = <div className='flex gap-5'>
        <NavLink to={"/"} className={({ isActive }) =>
            `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isActive ? 'scale-95 bg-blue-600' : 'bg-gray-900 text-white'}`
        }>Home</NavLink>
        <NavLink to={"/statistics"} className={({ isActive }) =>
            `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isActive ? 'scale-95 bg-blue-600' : 'bg-gray-900 text-white'}`
        }>Statistics</NavLink>
        <NavLink to={"/dashboard"} className={({ isActive }) =>
            `px-6 py-2 rounded-lg shadow-md font-medium transition duration-200 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isActive ? 'scale-95 bg-blue-600' : 'bg-gray-900 text-white'}`
        }>Dashboard</NavLink>
        <NavLink to={"/authenticate"} className={({ isActive }) =>
            `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isActive ? 'scale-95 bg-blue-600' : 'bg-gray-900 text-white'}`
        }>Reg/Login</NavLink>
    </div>

    return (
        <div>
            <Helmet><title>Navbar - Gadget Heaven</title></Helmet>
            <div className={`navbar rounded-md lg:px-10 lg:pt-5 ${navbarStyle}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 block">
                            {links}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">Gadget Heaven</a> */}
                    <Link className=" font-bold text-xl text-white">Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <button className='bg-white p-3 rounded-full'>{cartCount > 0 && <span className="badge">{cartCount}</span>}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </button>
                    <button className='bg-white p-3 rounded-full'>{wishCount > 0 && <span className='badge'>{wishCount}</span>}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;