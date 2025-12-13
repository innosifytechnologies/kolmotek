import React from "react";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const DICSystem = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.hero_dic}
          alt="DIC System"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">DIC System</h1>
          <p className="mt-2 text-lg">Digital Image Correlation for Precision Measurement</p>
        </div>
      </section>

      {/* Overview Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="DIC System" text2="Overview" />
          <Paragraph />
          <img
            src={assets.applicationImage}
            alt="DIC Overview"
            className="w-full rounded-lg shadow-lg mt-6"
          />
        </div>
      </section> */}

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="DIC System" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
            A DIC (Distributed Intelligent Control) System is an advanced automation framework that integrates intelligent controllers across a distributed network to enhance efficiency, scalability, and real-time decision-making. It is widely used in industries such as manufacturing, robotics, energy management, and smart infrastructure.

            By leveraging AI, IoT, and edge computing, DIC Systems ensure seamless communication between devices, optimize operations, and improve overall system reliability.
          </p>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Features" />
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>High-precision strain and deformation measurement</li>
            <li>Non-contact optical technique</li>
            <li>Applicable for various materials and structures</li>
            <li>Advanced image processing algorithms</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Applications of" text2="DIC System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Material Testing</h2>
              <p className="mt-4">Used in tensile, compression, and fatigue testing.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Structural Analysis</h2>
              <p className="mt-4">Evaluates deformations in various engineering structures.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Biomechanics</h2>
              <p className="mt-4">Measures tissue strain and deformation in medical applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our DIC System?</h2>
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

export default DICSystem;
