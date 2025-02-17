import React from 'react';

const Hero = () => {
  return (
    <div className="hero bg-gradient-to-r from-gray-500 to-gray-600  min-h-screen xl:px-40 z-1">
      <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left">
        <img
          src="/assets/images/courier.png" // Replace with your image
          alt="Courier Management"
          className="max-w-md rounded-xl shadow-2xl"
        />
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white">
            Revolutionize Your Courier Management
          </h1>
          <p className="py-6 text-white">
            Effortlessly track shipments, manage drivers, and streamline operations with our real-time courier management platform. Whether you're a client, driver, or administrator, we've got you covered.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary hover:text-white hover:bg-gray-600">Get Started1</button>
            <button className="btn btn-outline border-gray-200 border-2 text-white hover:bg-primary hover:border-none hover:text-gray-900">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;