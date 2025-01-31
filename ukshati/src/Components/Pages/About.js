import React from "react";
import Layout from "../Layouts/Layout";
import "../Styles/About.css";

const About = () => {
  return (
    <Layout>
      {/* Background Section */}
      <div className="bg-gradient-to-b from-white to-gray-100 py-20 mt-20 md:mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* About Image */}
            <div className="flex justify-center">
              <img
                src="https://www.gogreendrip.com/GoGreen/GoGreen/images/logowithleaf.png"
                alt="Ukshati Logo"
                className="rounded-xl shadow-lg w-3/4 md:w-full max-w-sm md:max-w-md"
              />
            </div>

            {/* About Content */}
            <div className="text-gray-800 space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                Ukshati Technologies Private Limited
              </h2>
              <h3 className="text-lg md:text-xl font-semibold text-green-600">
                Innovation for Sustainable Farming
              </h3>
              <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                Established in 2017 and incorporated as a private limited company in 2022, Ukshati leverages cutting-edge infrastructure to benefit farmers and humanity. Committed to sustainable productivity, we provide digital farming solutions, greenhouses, and IoT-based irrigation systems.
              </p>
              <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                Our devices cater to gardens of all sizes, offering solutions like water tank-based systems for balconies and waterproof models for outdoor use. These systems optimize water usage, ensuring efficiency and convenience.
              </p>
              <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                Our automatic irrigation system offers real-time visibility and control. With controllers and nodes installed in the field, users can manage irrigation through a mobile app or website, ensuring seamless operation via the internet.
              </p>
              <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                At Ukshati Technologies, we are dedicated to empowering farmers and households with innovative, reliable, and sustainable water-management solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
