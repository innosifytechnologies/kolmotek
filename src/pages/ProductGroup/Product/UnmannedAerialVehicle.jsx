import React from "react";
import Title from "../../../components/Title";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const UnmannedAerialVehicle = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.UnmannedAerialVehicles}
          alt="UAV System"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">UAV System</h1>
          <p className="mt-2 text-lg">Unmanned Aerial Vehicle for Aerial Surveys</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="UAV System" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
            Unmanned Aerial Vehicles (UAVs) are advanced aerial platforms designed for various applications, including aerial surveying, mapping, surveillance, and environmental monitoring. These systems provide high-resolution imaging and data collection capabilities, making them essential tools in numerous industries.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Features" />
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>High-resolution aerial imaging</li>
            <li>Autonomous flight capabilities</li>
            <li>Real-time data transmission</li>
            <li>Applications in agriculture, defense, and surveying</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Applications of" text2="UAV System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Aerial Mapping</h2>
              <p className="mt-4">Used for creating high-resolution maps for urban planning and agriculture.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Environmental Monitoring</h2>
              <p className="mt-4">Helps in assessing deforestation, pollution, and climate change effects.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Surveillance & Security</h2>
              <p className="mt-4">Used in border security, disaster response, and military applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our UAV System?</h2>
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

export default UnmannedAerialVehicle;
