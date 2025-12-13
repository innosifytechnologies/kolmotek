import React from "react";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const TLSSystem = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.TerrestrialLaserScanningSystem}
          alt="TLS System"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">TLS System</h1>
          <p className="mt-2 text-lg">Terrestrial Laser Scanning for High-Precision 3D Mapping</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="TLS System" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
            The Terrestrial Laser Scanning (TLS) System is an advanced remote sensing technology used for high-precision
            3D mapping and structural analysis. It employs laser pulses to measure distances and create detailed
            point-cloud models of various environments, making it an essential tool for surveying, construction, and
            geospatial analysis.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Features" />
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>High-resolution 3D scanning with millimeter accuracy</li>
            <li>Fast and efficient data acquisition for large-scale environments</li>
            <li>Advanced point cloud processing capabilities</li>
            <li>Ideal for topographic mapping and structural monitoring</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Applications of" text2="TLS System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Archaeological Surveying</h2>
              <p className="mt-4">Used for precise documentation and preservation of historical sites.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Civil Engineering</h2>
              <p className="mt-4">Monitors infrastructure stability and aids in urban planning.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Forestry & Ecology</h2>
              <p className="mt-4">Analyzes vegetation structures for environmental studies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our TLS System?</h2>
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

export default TLSSystem;
