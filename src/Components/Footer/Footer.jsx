import React from "react";

export default function Footer() {
  return (
    <footer className="p-10 bg-black text-white">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Exclusive</h2>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-full bg-gray-900 border border-gray-700 text-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-gray-700 rounded-r-full hover:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <p>National Institue of Technology, Warangl.</p>
          <p>kiranbadakurava@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Account</h3>
          <ul>
            <li><a href="#" className="hover:underline">My Account</a></li>
            <li><a href="#" className="hover:underline">Login / Register</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Link</h3>
          <ul>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms Of Use</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Download App</h3>
          <p>Save $3 with App New User Only</p>
          {/* <div className="my-4">
            <img src="https://via.placeholder.com/80" alt="QR Code" className="mb-2" />
            <img src="https://via.placeholder.com/120x40" alt="App Store Badges" />
          </div> */}
          {/* <div className="flex space-x-4">
            <a href="#"><img src="https://via.placeholder.com/20" alt="Facebook" /></a>
            <a href="#"><img src="https://via.placeholder.com/20" alt="Twitter" /></a>
            <a href="#"><img src="https://via.placeholder.com/20" alt="Instagram" /></a>
            <a href="#"><img src="https://via.placeholder.com/20" alt="LinkedIn" /></a>
          </div> */}
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500">
        <p>&copy; Copyright 2024. All rights reserved</p>
      </div>
    </footer>
  );
}
