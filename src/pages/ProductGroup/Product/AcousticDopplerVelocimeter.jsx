import React from "react";
import Title from "../../../components/Title";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const AcousticDopplerVelocimeter = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.AcousticDopplerVelocimeter}
          alt="ADV System"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">ADV System</h1>
          <p className="mt-2 text-lg">Acoustic Doppler Velocimeter for Fluid Flow Measurements</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="ADV System" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
            The Acoustic Doppler Velocimeter (ADV) is a high-precision instrument designed to measure fluid velocity in three dimensions. It is widely used in hydrodynamic studies, coastal engineering, and laboratory experiments to analyze turbulent flow patterns with high spatial and temporal resolution.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Features" />
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>High-precision velocity measurements</li>
            <li>Three-dimensional flow analysis</li>
            <li>Suitable for laboratory and field applications</li>
            <li>Real-time data acquisition and analysis</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Applications of" text2="ADV System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Hydrodynamic Studies</h2>
              <p className="mt-4">Used for analyzing flow behavior in rivers, streams, and estuaries.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Coastal Engineering</h2>
              <p className="mt-4">Helps in assessing sediment transport and wave-induced currents.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Turbulence Analysis</h2>
              <p className="mt-4">Measures velocity fluctuations in laboratory and field environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our ADV System?</h2>
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

export default AcousticDopplerVelocimeter;
