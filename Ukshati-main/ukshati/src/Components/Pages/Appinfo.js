import React from 'react';

const Appinfo = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* App Image Section */}
          <div className="flex justify-center">
            <img
              src="./New_Images/appgg.png"
              alt="App"
              className="max-w-full rounded-lg shadow-md"
            />
          </div>

          {/* Info Section */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Grow Smarter: Automate Your Irrigation with Ukshati
            </h2>
            <h4 className="text-xl text-gray-600">Scan to Download Now!</h4>
            <div className="flex justify-center md:justify-right">
              <img
                src="./New_Images/qr.png"
                alt="QR Code"
                className="w-32 h-32"
              />
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              {/* App Store Button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition">
                <img
                  src="./New_Images/app-store.png"
                  alt="App Store"
                  className="w-8 h-8"
                />
                <span className="font-medium">Download From App Store</span>
              </button>

              {/* Google Play Button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition">
                <img
                  src="./New_Images/google-play.png"
                  alt="Google Play Store"
                  className="w-8 h-8"
                />
                <span className="font-medium">
                  Download From Google Play Store
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appinfo;
