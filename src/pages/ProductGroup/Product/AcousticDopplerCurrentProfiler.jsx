import React from "react";
import Title from "../../../components/Title";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const AcousticDopplerCurrentProfiler = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.AcousticDopplerCurrentProfiler}
          alt="ADCP System"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">ADCP System</h1>
          <p className="mt-2 text-lg">Acoustic Doppler Current Profiler for Water Flow Measurements</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="ADCP System" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
            The Acoustic Doppler Current Profiler (ADCP) is an advanced sonar-based instrument designed to measure water
            current velocities at different depths. It is widely used in oceanography, hydrology, and environmental
            monitoring to study water movement and sediment transport in rivers, lakes, and oceans.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Features" />
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>Highly accurate water velocity measurements</li>
            <li>Operates in various aquatic environments</li>
            <li>Multi-depth profiling capability</li>
            <li>Real-time data collection and analysis</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Applications of" text2="ADCP System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Oceanography</h2>
              <p className="mt-4">Used for studying ocean currents and marine ecosystem dynamics.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">River Flow Monitoring</h2>
              <p className="mt-4">Measures river discharge and sediment transport rates.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Hydroelectric Projects</h2>
              <p className="mt-4">Used in dam operations to optimize water resource management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our ADCP System?</h2>
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

export default AcousticDopplerCurrentProfiler;
