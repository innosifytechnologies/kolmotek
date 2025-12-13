import React from "react";
import Title from "../../../components/Title";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const LIDARSystem = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.LIDARSystem}
          alt="LIDAR System"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">LIDAR System</h1>
          <p className="mt-2 text-lg">Light Detection and Ranging for High-Precision Mapping</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="LIDAR System" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
            LIDAR (Light Detection and Ranging) is a remote sensing technology that uses laser pulses to measure distances with high precision. 
            It is widely used in topographic mapping, environmental monitoring, and autonomous navigation. 
            By generating accurate 3D models of terrain, buildings, and objects, LIDAR plays a crucial role in industries such as geospatial surveying, forestry, and urban planning.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Features" />
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>High-resolution 3D mapping capabilities</li>
            <li>Accurate distance measurement using laser pulses</li>
            <li>Works in various weather and lighting conditions</li>
            <li>Widely used in autonomous vehicles and drones</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Applications of" text2="LIDAR System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Geospatial Mapping</h2>
              <p className="mt-4">Used for terrain modeling and city planning.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Forestry Management</h2>
              <p className="mt-4">Helps in analyzing vegetation and forest structure.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Autonomous Vehicles</h2>
              <p className="mt-4">Enables self-driving cars to detect obstacles and navigate safely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our LIDAR System?</h2>
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

export default LIDARSystem;
