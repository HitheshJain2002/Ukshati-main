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
    <div className="py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {productDetails.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleCardClick(product.id)}
          >
            {/* Image Section */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content Section */}
            <div className="flex flex-col flex-grow">
              <div className="p-4 flex flex-col justify-between flex-grow">
                {/* Product Title with Hover Effect */}
                <h2 className="text-xl font-semibold text-gray-800 group hover:text-green-600 relative">
                  {product.title}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
                </h2>
                
                {/* Description with Slate Background */}
                <div className="mt-2 p-4 bg-slate-100 text-gray-600 text-sm rounded-lg h-full">
                  <p className="line-clamp-4">{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product_home;
