// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  return (
    <nav className="bg-blue-500 p-4">
      <Link to="/" className="text-white mr-4">Products</Link>
      <Link to="/cart" className="text-white">Cart ({cartItems.length})</Link>
    </nav>
  );
};

export default Navbar;
