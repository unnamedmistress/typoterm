import React from 'react';

const Footer = () => {
  return (
    <footer>
    <div className="bg-white py-7 pb-5 container max-w-full mx-auto h-auto flex flex-wrap">
      <div className="lg:w-1/3 px-4">
        <h3 className="font-bold text-gray-900 mb-4">About Us</h3>
        <p className="text-gray-700">Typo Terminator is designed to provide you with a simple and user-friendly experience,
         allowing you to focus on what matters most: creating top-quality essays that will impress your professors and colleagues.</p>
      </div>
      <div className="w-full lg:w-1/3 px-4">
        <h3 className="font-bold text-gray-900 mb-4"></h3>
        <ul className="list-reset">
          <li className="mb-2">
            <a href="#" className="flex items-center justify-center space-x-2">
            <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-10 w-10"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/3 px-4">
        <h3 className="font-bold text-gray-900 mb-4">Easy Write!</h3>
        <p className="text-gray-700">
        • AI Powered Research.
        </p>
        <p className="text-gray-700">
        • Meticulously crafted essays.
        </p>
        <p className="text-gray-700">
        • Proffesional quality cover letters.
         </p>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
