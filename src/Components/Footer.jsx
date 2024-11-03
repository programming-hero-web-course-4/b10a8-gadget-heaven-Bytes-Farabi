import React from 'react';

const Footer = () => {
    return (
        <div>

            <footer className="bg-white py-20">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Gadget Heaven</h2>
                    <p className="text-gray-500 mt-2">Leading the way in cutting-edge technology and innovation.</p>
                </div>

                <div className="border-t border-gray-200 my-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left max-w-4xl mx-auto">
                    <div>
                        <h3 className="font-semibold">Services</h3>
                        <ul className="mt-2 space-y-1 text-gray-500">
                            <li>Product Support</li>
                            <li>Order Tracking</li>
                            <li>Shipping & Delivery</li>
                            <li>Returns</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold">Company</h3>
                        <ul className="mt-2 space-y-1 text-gray-500">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold">Legal</h3>
                        <ul className="mt-2 space-y-1 text-gray-500">
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;