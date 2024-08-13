import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Information */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <p className="text-sm mb-2">1234 Street Name</p>
            <p className="text-sm mb-2">City, State, 56789</p>
            <p className="text-sm mb-2">Email: info@company.com</p>
            <p className="text-sm mb-2">Phone: (123) 456-7890</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.1c0-.6-.1-1.1-.2-1.6H12v3.2h5.9c-.3 1.6-1.2 3-2.7 3.9v3.3h4.2c2.4-2.2 3.8-5.5 3.8-9.8zM12 6.3c1.7 0 3.2.6 4.4 1.7l3.2-3.2C16.7 2.3 14.5 1 12 1 6.4 1 2 5.4 2 10.9c0 1.6.3 3.1.9 4.5l3.2-3.2c-.6-1.2-.9-2.6-.9-4.1 0-4.6 3.8-8.4 8.4-8.4zM12 8.8c-1.6 0-3.2.6-4.4 1.7l-3.2-3.2c2.2-2.1 5.4-3.3 8.6-3.3 2.4 0 4.7.6 6.7 1.8l-3.3 3.3c-1.2-1.1-2.8-1.7-4.4-1.7z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 5.924c-.8.355-1.66.595-2.558.702a4.486 4.486 0 0 0 1.963-2.485 8.988 8.988 0 0 1-2.856 1.09 4.48 4.48 0 0 0-7.644 4.097A12.72 12.72 0 0 1 1.64 4.327a4.473 4.473 0 0 0 1.388 5.968 4.453 4.453 0 0 1-2.034-.564v.057a4.485 4.485 0 0 0 3.593 4.391 4.487 4.487 0 0 1-2.028.077 4.487 4.487 0 0 0 4.19 3.115 8.975 8.975 0 0 1-5.573 1.934c-.361 0-.716-.021-1.069-.062a12.673 12.673 0 0 0 6.883 2.018c8.261 0 12.777-6.84 12.777-12.777 0-.195-.005-.39-.014-.583a9.11 9.11 0 0 0 2.236-2.333z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 2H2C.9 2 0 2.9 0 4v16c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm4-10h-1V7h1V6zm-6 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Sign-Up */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Sign up for our newsletter to get the latest updates and offers.</p>
            <form>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 mb-4 border border-gray-600 bg-gray-700 rounded text-white"
                aria-label="Email Address"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-center py-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Anfords Bangladesh limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
