import React from 'react';

const Footer = () => {
  return (
<div class="bg-white py-7 pb-5 container max-w-full mx-auto h-auto flex flex-wrap">
    <div class=" lg:w-1/3 px-4">
      <h3 class="font-bold text-gray-900 mb-4">About Us</h3>
      <p class="text-gray-700">Small paragraph.</p>
    </div>
    <div class="w-full lg:w-1/3 px-4">
      <h3 class="font-bold text-gray-900 mb-4">Social Media</h3>
      <ul class="list-reset">
        <li class="mb-2">
          <a href="#" class="text-gray-700 hover:text-blue-500"><i class=""></i> github</a>
        </li>
      </ul>
    </div>
    <div class="w-full lg:w-1/3 px-4">
      <h3 class="font-bold text-gray-900 mb-4">Contact Us</h3>
      <p class="text-gray-700"><i class="fas fa-phone-square fa-lg"></i> 1-800-123-4567</p>
      <p class="text-gray-700"><i class="fas fa-envelope fa-lg"></i> info@example.com</p>
    </div>
  </div>
  );
};

export default Footer;