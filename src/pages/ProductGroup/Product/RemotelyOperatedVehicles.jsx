import React from "react";
import Title from "../../../components/Title";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const RemotelyOperatedVehicles = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.RemotelyOperatedVehicles}
          alt="ROV System"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">ROV System</h1>
          <p className="mt-2 text-lg">Remotely Operated Vehicle for Underwater Exploration</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="ROV System" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
            Remotely Operated Vehicles (ROVs) are highly advanced underwater robots controlled by operators from the surface. These vehicles are used in deep-sea exploration, marine research, offshore industry inspections, and military applications. Equipped with cameras, sonar, and manipulator arms, ROVs can perform a variety of tasks with precision and reliability.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Features" />
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>Remote-controlled deep-sea navigation</li>
            <li>High-resolution cameras and imaging sensors</li>
            <li>Capable of performing complex underwater operations</li>
            <li>Applications in marine research, offshore maintenance, and defense</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Applications of" text2="ROV System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Deep-Sea Exploration</h2>
              <p className="mt-4">Used for studying marine life, underwater geology, and shipwreck investigations.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Offshore Industry</h2>
              <p className="mt-4">Essential for inspecting oil rigs, pipelines, and underwater structures.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Defense & Security</h2>
              <p className="mt-4">Utilized for mine detection, underwater surveillance, and search-and-rescue missions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our ROV System?</h2>
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

export default RemotelyOperatedVehicles;
