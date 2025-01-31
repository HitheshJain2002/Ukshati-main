import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SystemInfo } from "../Utils/Data";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/**
 * LazyImage Component
 * Handles lazy loading of images with an intersection observer.
 */
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
    <div className="rounded-t-lg overflow-hidden relative h-40 w-full">
      {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>}
      <img
        ref={imgRef}
        src={imageSrc || "/placeholder.jpg"} // Fallback placeholder
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

/**
 * SystemCards Component
 * Displays a responsive grid of product cards.
 */
const SystemCards = React.memo(() => {
  const navigate = useNavigate();

  // Handle card click navigation
  const handleCardClick = (path, owned) => {
    if (owned) {
      navigate(path);
    }
  };

  return (
    <div className="bg-gray-100 py-8" style={{ marginTop: "100px" }}> {/* Added margin-top: 100px */}
      <Container>
        <Row className="g-4">
          {SystemInfo.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}> {/* Responsive column layout */}
              <Card
                onClick={() => handleCardClick(product.nav, product.owned)}
                className={`bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer ${
                  !product.owned ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {/* Lazy Loaded Image */}
                <LazyImage src={product.img} alt={`${product.title} image`} />

                {/* Card Body */}
                <Card.Body className="p-4 flex flex-col items-center text-center">
                  {/* Title */}
                  <Card.Title className="text-lg font-semibold text-gray-800 mb-1">
                    {product.title || <Skeleton width={120} />}
                  </Card.Title>

                  {/* Icons Section */}
                  <div className="flex space-x-2 mb-2">
                    {product.icons.map((icon, idx) => (
                      <img
                        key={idx}
                        src={icon}
                        alt={`${product.title} icon ${idx + 1}`}
                        className="w-5 h-5"
                      />
                    ))}
                  </div>

                  {/* Description */}
                  <Card.Text className="text-sm text-gray-600">
                    {product.description || <Skeleton count={2} />}
                  </Card.Text>

                  {/* Action Button */}
                  <button
                    className={`mt-3 px-4 py-1.5 rounded-md text-white text-xs font-medium transition-colors duration-300 ${
                      product.owned
                        ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {product.owned ? "Explore" : "Locked"}
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
});

export default SystemCards;
