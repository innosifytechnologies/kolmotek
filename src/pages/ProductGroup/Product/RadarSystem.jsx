import React from "react";
import Title from "../../../components/Title";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const RadarSystem = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.hero_radar}
          alt="Radar System"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">Radar System</h1>
          <p className="mt-2 text-lg">Advanced Detection and Ranging Technology</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Radar System" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
            Radar (Radio Detection and Ranging) is a system that uses radio waves to detect and track objects. It is widely used in aviation, maritime navigation, weather monitoring, military defense, and automotive applications. Radar systems provide real-time information about object distance, speed, and direction, making them essential in modern technology.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Features" />
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>High-precision object detection and tracking</li>
            <li>Works in all weather conditions</li>
            <li>Long-range and high-resolution capabilities</li>
            <li>Applications in defense, aviation, and meteorology</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Applications of" text2="Radar System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Aviation</h2>
              <p className="mt-4">Used for air traffic control, collision avoidance, and navigation.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Weather Monitoring</h2>
              <p className="mt-4">Essential for tracking storms, precipitation, and atmospheric conditions.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Military & Defense</h2>
              <p className="mt-4">Utilized for surveillance, missile guidance, and threat detection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our Radar System?</h2>
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

export default RadarSystem;
