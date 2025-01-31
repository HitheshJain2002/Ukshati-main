import React, { useEffect } from "react";
import Layout from "../Layouts/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons from react-icons

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 pt-[180px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map Section */}
          <div
            className="relative rounded-lg shadow-2xl border-2 border-gray-200 bg-white overflow-hidden"
            data-aos="fade-right"
          >
            <iframe
              className="w-full h-[300px] md:h-[400px] rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.491750316749!2d74.84373007483967!3d12.87606998743062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4055b0f25b%3A0x4181fb8d94345087!2sUkshati%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1725342876196!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ukshati Technologies Location"
            ></iframe>
          </div>

          {/* Contact Details Section */}
          <div className="flex flex-col gap-8" data-aos="fade-left">
            {/* Location Card */}
            <div className="flex items-start gap-4 bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaMapMarkerAlt className="w-12 h-12 text-green-600" /> {/* Location Icon */}
              <div>
                <h5 className="text-xl font-semibold text-green-600">Location</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ukshati Technologies Pvt Ltd
                  <br />
                  II Floor, Pramod Towers, KRR Road, above Pramod Automobiles,
                  opposite AJ Grand Hotel, Boloor, Kodailbail, Mangaluru,
                  Karnataka 575002
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-start gap-4 bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaEnvelope className="w-12 h-12 text-blue-600" /> {/* Email Icon */}
              <div>
                <h5 className="text-xl font-semibold text-blue-600">Email</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ukshati365@gmail.com
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-start gap-4 bg-red-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaPhone className="w-12 h-12 text-red-600" /> {/* Phone Icon */}
              <div>
                <h5 className="text-xl font-semibold text-red-600">Phone</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  +91 8861567365
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;