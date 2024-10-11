// src/components/ProductList.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow-lg">
          <img src={product.image} alt={product.title} className="w-full h-24 object-contain mb-2" />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-3 py-2 mt-2 rounded"
          >
            Add to Cart
          </button>
          <Link to={`/product/${product.id}`} className="bg-blue-300 text-white px-3 py-2 mt-2 inline-block rounded">
            View Product
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
