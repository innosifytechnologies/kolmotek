import React from "react";
import Title from "../../../components/Title";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const AutonomousUnderwaterVehicles = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.AutonomousUnderwaterVehicles}
          alt="AUV System"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">AUV System</h1>
          <p className="mt-2 text-lg">Autonomous Underwater Vehicle for Advanced Operations</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="AUV System" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
            Autonomous Underwater Vehicles (AUVs) are cutting-edge submersible platforms designed for fully autonomous underwater operations. They are used in oceanographic research, underwater exploration, military applications, and offshore industry surveys. These systems use advanced sensors and AI to navigate, map, and collect data with high precision.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Features" />
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>Fully autonomous underwater navigation</li>
            <li>Advanced sonar and imaging capabilities</li>
            <li>Real-time environmental data collection</li>
            <li>Applications in deep-sea exploration and surveillance</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Applications of" text2="AUV System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Marine Research</h2>
              <p className="mt-4">Used for deep-sea mapping, coral reef studies, and oceanographic surveys.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Offshore Exploration</h2>
              <p className="mt-4">Essential for oil, gas, and renewable energy infrastructure inspection.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Defense & Security</h2>
              <p className="mt-4">Used for naval surveillance, mine detection, and underwater reconnaissance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our AUV System?</h2>
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

export default AutonomousUnderwaterVehicles;
