import React, { useEffect } from "react";
import Layout from "../Layouts/Layout";
import img1 from "../Images/location3.jpg";
import img2 from "../Images/email2.jpg";
import img3 from "../Images/Phone.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map Section */}
          <div
            className="relative rounded-lg shadow-lg border-2 border-gray-300 bg-white"
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
            <div className="flex items-start gap-4 bg-green-100 p-6 rounded-lg shadow-lg">
              <img
                src={img1}
                alt="Location"
                className="w-12 h-12 object-cover rounded-full"
              />
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
            <div className="flex items-start gap-4 bg-blue-100 p-6 rounded-lg shadow-lg">
              <img
                src={img2}
                alt="Email"
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <h5 className="text-xl font-semibold text-blue-600">Email</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ukshati365@gmail.com
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-start gap-4 bg-red-100 p-6 rounded-lg shadow-lg">
              <img
                src={img3}
                alt="Phone"
                className="w-12 h-12 object-cover rounded-full"
              />
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
