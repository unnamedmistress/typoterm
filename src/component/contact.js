import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-teal-900 to-black h-screen pt-24">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold text-white mb-12">
          Contact
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8 mx-auto max-w-lg">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Address</h2>
            <p>
              Typo Terminator Inc.
              <br />
              1234 Main St
              <br />
              Suite 101
              <br />
              Los Angeles, CA 90000
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Phone</h2>
            <p>+1 (800) 123-4567</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p>support@typoterminator.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Social Media</h2>
            <p>
              <a
                href="https://www.facebook.com/typoterminator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 mr-4"
              >
                Facebook
              </a>
              <a
                href="https://www.twitter.com/typoterminator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 mr-4"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/company/typoterminator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
