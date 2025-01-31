import Layout from '../Layouts/Layout';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-6">
          <MdOutlineKeyboardArrowRight className='text-green-600' />
          <span>Article</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <img 
              src="https://www.gogreendrip.com/GoGreen/GoGreen/images/adviti1.jpg" 
              alt="Wifi Drip Controller" 
              className="w-full md:w-1/3 object-cover h-48 md:h-auto"
            />
            <div className="p-5 flex flex-col justify-between">
              <h5 className="text-xl font-bold text-gray-900">WiFi Drip Controller</h5>
              <p className="text-gray-600 text-sm my-3">
                Our project envisions sustainable urban living by enabling families to grow pesticide-free food using biodegradable waste while enhancing city greenery...
              </p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" 
                className="text-green-600 hover:text-green-800 flex items-center gap-1">
                Read more <MdOutlineKeyboardDoubleArrowRight />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <img 
              src="https://www.gogreendrip.com/GoGreen/GoGreen/images/adviti2.jpg" 
              alt="Terrace or Balcony Garden Benefits" 
              className="w-full md:w-1/3 object-cover h-48 md:h-auto"
            />
            <div className="p-5 flex flex-col justify-between">
              <h5 className="text-xl font-bold text-gray-900">Terrace or Balcony Garden Benefits</h5>
              <p className="text-gray-600 text-sm my-3">
                A terrace or balcony garden offers fresh, organic produce, reduces pollution by increasing oxygen levels, and filters toxic gases...
              </p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" 
                className="text-green-600 hover:text-green-800 flex items-center gap-1">
                Read more <MdOutlineKeyboardDoubleArrowRight />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Watch Our YouTube Video</h2>
          <div className="w-full max-w-2xl mx-auto">
            <iframe 
              className="w-full aspect-video rounded-lg shadow-lg" 
              src="https://www.youtube.com/embed/VLSPHFUg3pU?si=szxPQ37LrcsRN2os" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
