import React from 'react';

const Hero = () => {
  return (
    <div className="hero bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left">
        <img
          src="/images/courier-hero.webp" // Replace with your image
          alt="Courier Management"
          className="max-w-md rounded-lg shadow-2xl"
        />
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white">
            Revolutionize Your Courier Management
          </h1>
          <p className="py-6 text-white">
            Effortlessly track shipments, manage drivers, and streamline operations with our real-time courier management platform. Whether you're a client, driver, or administrator, we've got you covered.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;