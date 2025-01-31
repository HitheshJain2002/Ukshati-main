import React from 'react';
import { useNavigate } from 'react-router-dom';
import { productDetails } from '../Utils/Data';
import '../Styles/Product_home.css';

const Product_home = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/login`);
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Products</h1>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-6">
        {productDetails.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white shadow-md rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            onClick={() => handleCardClick(product.id)}
          >
            {/* Image Section */}
            <div className="w-full h-56 overflow-hidden rounded-t-2xl">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-4">
                {product.description}
              </p>
              <div className="mt-3 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product_home;
