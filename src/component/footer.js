import React from 'react';

const Footer = () => {
  return (
    <footer>
    <div className="bg-white py-7 pb-5 container max-w-full mx-auto h-auto flex flex-wrap">
      <div className="lg:w-1/3 px-4">
        <h3 className="font-bold text-gray-900 mb-4">About Us</h3>
        <p className="text-gray-700">Small paragraph.</p>
      </div>
      <div className="w-full lg:w-1/3 px-4">
        <h3 className="font-bold text-gray-900 mb-4">Social Media</h3>
        <ul className="list-reset">
          <li className="mb-2">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              <i className=""></i> github
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/3 px-4">
        <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
        <p className="text-gray-700">
          <i className="fas fa-phone-square fa-lg"></i> 1-800-123-4567
        </p>
        <p className="text-gray-700">
          <i className="fas fa-envelope fa-lg"></i> info@example.com
        </p>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
