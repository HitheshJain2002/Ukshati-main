import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Styles/Home.css";
import Slider1 from "../Images/slideoption1.jpg";
import Slider2 from "../Images/slideoption2.jpg";
import Slider3 from "../Images/slideoption3.jpg";

const Slider = () => {
  return (
    <div className="slider relative">
      <Carousel fade controls={false} indicators interval={2000} pause={false}>
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="relative">
            <img
              src={Slider1}
              className="d-block w-100 object-cover h-[70vh] sm:h-[80vh]"
              alt="Automated Irrigation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <Carousel.Caption className="z-10">
              <h3 className="text-4xl font-bold text-white mb-2 animate-fade-in">
                Automated Irrigation
              </h3>
              <p className="text-lg text-gray-200 animate-slide-up">
                Optimize water usage and increase efficiency with our automated systems.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="relative">
            <img
              src={Slider2}
              className="d-block w-100 object-cover h-[70vh] sm:h-[80vh]"
              alt="Real Time Monitoring"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <Carousel.Caption className="z-10">
              <h3 className="text-4xl font-bold text-white mb-2 animate-fade-in">
                Real-Time Monitoring
              </h3>
              <p className="text-lg text-gray-200 animate-slide-up">
                Get real-time insights into your farm's irrigation system with our advanced tools.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div className="relative">
            <img
              src={Slider3}
              className="d-block w-100 object-cover h-[70vh] sm:h-[80vh]"
              alt="Watering Made Easy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <Carousel.Caption className="z-10">
              <h3 className="text-4xl font-bold text-white mb-2 animate-fade-in">
                Watering Made Easy
              </h3>
              <p className="text-lg text-gray-200 animate-slide-up">
                Simplify your gardening with intelligent, hassle-free solutions.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
