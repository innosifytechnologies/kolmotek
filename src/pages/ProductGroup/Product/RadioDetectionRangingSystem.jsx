import React from "react";
import Title from "../../../components/Title";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const RadioDetectionRangingSystem = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.RADARsystem}
          alt="RADAR System"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">RADAR System</h1>
          <p className="mt-2 text-lg">Advanced Radio Detection and Ranging Technology</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="RADAR System" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
            The Radio Detection and Ranging (RADAR) system is an advanced technology used for real-time object detection, tracking, and surveillance. It plays a crucial role in defense, aviation, meteorology, and maritime applications by utilizing radio waves to determine object distances, speeds, and positions.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Features" />
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>High-precision object detection and tracking</li>
            <li>Multi-frequency operation for versatile applications</li>
            <li>Long-range capabilities up to 500 km</li>
            <li>Weather-resistant design for all environmental conditions</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Applications of" text2="RADAR System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Defense & Military</h2>
              <p className="mt-4">Essential for threat detection, missile tracking, and battlefield surveillance.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Aviation & Aerospace</h2>
              <p className="mt-4">Used for air traffic control, aircraft navigation, and weather forecasting.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Maritime Navigation</h2>
              <p className="mt-4">Facilitates vessel tracking, collision avoidance, and port monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our RADAR System?</h2>
          <p className="mt-4">Contact us for more details and customized solutions.</p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 mt-5 bg-white text-sky-800 font-bold rounded-lg shadow-lg hover:bg-gray-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RadioDetectionRangingSystem;
