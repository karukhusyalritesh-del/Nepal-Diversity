import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center" id="Footer">
      <p>© 2025 Your RTS. All rights reserved. | Developed by Ritesh</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#About" className="hover:underline">
          About
        </a>
        <a href="#Projects" className="hover:underline">
          Visit
        </a>
      </div>
    </footer>
  );
};

export default Footer;
