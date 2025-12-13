import React from "react";
import Title from "../../../components/Title";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const AutonomousAerialVehicles = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.AutonomousAerialVehicles}
          alt="AAV System"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">AAV System</h1>
          <p className="mt-2 text-lg">Autonomous Aerial Vehicle for Advanced Operations</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="AAV System" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
            Autonomous Aerial Vehicles (AAVs) are cutting-edge aerial platforms designed for fully autonomous operations in various fields, including transportation, emergency response, and aerial reconnaissance. These systems leverage AI and automation to perform complex missions with high efficiency and minimal human intervention.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Features" />
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>Fully autonomous flight capabilities</li>
            <li>AI-powered navigation and obstacle avoidance</li>
            <li>Real-time data collection and analytics</li>
            <li>Applications in logistics, surveillance, and emergency response</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Applications of" text2="AAV System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Urban Air Mobility</h2>
              <p className="mt-4">Used for autonomous air taxis and drone delivery systems.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Disaster Response</h2>
              <p className="mt-4">Provides critical support in search and rescue operations.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Security & Defense</h2>
              <p className="mt-4">Used for border patrol, surveillance, and military applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our AAV System?</h2>
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

export default AutonomousAerialVehicles;
