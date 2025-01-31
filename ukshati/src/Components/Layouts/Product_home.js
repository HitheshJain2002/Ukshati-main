import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { productDetails } from '../Utils/Data';
import '../Styles/Product_home.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div className="w-full h-52 overflow-hidden rounded-t-xl relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      <img
        ref={imgRef}
        src={imageSrc || '/placeholder.jpg'}  // Placeholder image while loading
        alt={alt}
        className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

const ShimmerCard = () => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-xl overflow-hidden">
      <div className="w-full h-52 bg-gray-200 animate-pulse"></div>
      <div className="p-4 flex flex-col flex-grow">
        <Skeleton height={20} width={150} />
        <Skeleton height={15} width={200} className="mt-2" />
      </div>
    </div>
  );
};

const Product_home = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/login`);
  };

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Products</h1>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {productDetails.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={() => handleCardClick(product.id)}
          >
            {/* Image Section with Lazy Loading */}
            <LazyImage src={product.img} alt={product.title} />

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow">
              {/* Product Title with Green Hover Line */}
              <h2 className="text-lg font-semibold text-gray-900 relative group">
                {product.title}
                <div className="w-0 h-1 bg-green-500 absolute left-0 bottom-0 transition-all duration-300 group-hover:w-full"></div>
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product_home;