import React from "react";
import Title from "../../../components/Title";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const LIBSSystem = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.LaserInducedBreakdownSpectroscopy}
          alt="LIBS System"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">LIBS System</h1>
          <p className="mt-2 text-lg">Laser-Induced Breakdown Spectroscopy for Material Analysis</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="LIBS System" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
            Laser-Induced Breakdown Spectroscopy (LIBS) is an advanced analytical technique used for elemental composition analysis. 
            It utilizes a high-energy laser pulse to generate plasma from a sample, and the emitted light is analyzed to determine the elemental makeup. 
            LIBS is widely used in environmental monitoring, industrial quality control, space exploration, and forensic sciences.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Features" />
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>Rapid and real-time elemental analysis</li>
            <li>Minimal sample preparation required</li>
            <li>Non-destructive testing method</li>
            <li>Applicable to solids, liquids, and gases</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Applications of" text2="LIBS System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Environmental Monitoring</h2>
              <p className="mt-4">Detects heavy metals and pollutants in water, soil, and air.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Industrial Quality Control</h2>
              <p className="mt-4">Ensures material composition accuracy in manufacturing processes.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Space Exploration</h2>
              <p className="mt-4">Used in planetary rovers to analyze soil and rock compositions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our LIBS System?</h2>
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

export default LIBSSystem;
