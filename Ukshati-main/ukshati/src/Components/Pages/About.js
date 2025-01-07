import React, { useEffect } from "react";
import Layout from "../Layouts/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      {/* Background Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* About Image */}
            <div
              className="flex justify-center transform hover:scale-105 transition duration-500"
              data-aos="zoom-in"
            >
              <img
                src="https://www.gogreendrip.com/GoGreen/GoGreen/images/logowithleaf.png"
                alt="Ukshati Logo"
                className="rounded-lg shadow-md w-3/4 md:w-full"
              />
            </div>

            {/* About Content */}
            <div className="text-gray-800 space-y-6" data-aos="fade-up">
              <h2 className="text-4xl font-bold">
                Ukshati Technologies Private Limited
              </h2>
              <p className="text-lg leading-relaxed">
                Established in 2017 and incorporated as a private limited
                company in 2022, Ukshati leverages cutting-edge infrastructure
                to benefit farmers and humanity. Committed to sustainable
                productivity, we provide digital farming solutions, greenhouses,
                and IoT-based irrigation systems.
              </p>
              <p className="text-lg leading-relaxed">
                Our devices cater to gardens of all sizes, offering solutions
                like water tank-based systems for balconies and waterproof
                models for outdoor use. These systems optimize water usage,
                ensuring efficiency and convenience.
              </p>
              <p className="text-lg leading-relaxed">
                Our automatic irrigation system offers real-time visibility and
                control. With controllers and nodes installed in the field,
                users can manage irrigation through a mobile app or website,
                ensuring seamless operation via the internet.
              </p>
              <p className="text-lg leading-relaxed">
                At Ukshati Technologies, we are dedicated to empowering farmers
                and households with innovative, reliable, and sustainable
                water-management solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
