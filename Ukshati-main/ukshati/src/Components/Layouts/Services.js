import React from "react";
import { services } from "../Utils/Data";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    cssEase: "linear",
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-16">
      <h1 className="text-center text-4xl font-extrabold text-blue-800 mb-12">
        Our Services
      </h1>
      <div className="service-content container mx-auto px-4">
        <Slider {...settings}>
          {services.map((item, index) => (
            <div key={index} className="px-4">
              <Card className="service-card bg-white shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <Card.Img
                  className="card-image rounded-t-lg object-cover h-56 w-full"
                  src={item.image}
                  alt={item.title}
                />
                <Card.Body className="p-4">
                  <Card.Title className="card-title text-lg font-bold text-blue-600 text-center hover:text-green-600 transition-colors duration-300">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-sm text-gray-600 text-center mt-2">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
