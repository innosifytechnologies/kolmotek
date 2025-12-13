import React from "react";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const LaserInterferometer = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.laserInterferometer}
          alt="Laser Interferometer"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">Laser Interferometer</h1>
          <p className="mt-2 text-lg">Precision Measurement for Accurate Displacement and Distance</p>
        </div>
      </section>

      {/* Overview Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Laser Interferometer" text2="Overview" />
          <Paragraph>
            The Laser Interferometer offers ultra-high precision in measuring
            displacement and distance for a variety of applications including
            research, manufacturing, and metrology.
          </Paragraph>
          <img
            src={assets.laserInterferometer}
            alt="Laser Interferometer Overview"
            className="w-full rounded-lg shadow-lg mt-6"
          />
        </div>
      </section> */}

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Laser Interferometer" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
          A Laser Interferometer is a high-precision measurement device that uses laser beams to detect minute changes in distance, surface irregularities, and vibrations. By analyzing the interference patterns of light waves, it provides extremely accurate measurements at nanometer or even sub-nanometer scales.

Laser Interferometers are widely used in scientific research, semiconductor manufacturing, aerospace engineering, and metrology for applications requiring ultra-precise measurements and alignment.
          </p>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Features" />
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>High precision measurements down to nanometers</li>
            <li>Non-contact measurement system</li>
            <li>Ideal for industrial, research, and laboratory environments</li>
            <li>Simple integration with existing measurement systems</li>
            <li>Real-time data output for immediate analysis</li>
          </ul>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Technical" text2="Specifications" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Measurement Range</h2>
              <p className="mt-4">0.1 nm to 100 m</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Resolution</h2>
              <p className="mt-4">Up to 0.001 nm</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Wavelength</h2>
              <p className="mt-4">650 nm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Applications of" text2="Laser Interferometer" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Metrology & Quality Control</h2>
              <p className="mt-4">Ensures high precision in manufacturing processes.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Research & Development</h2>
              <p className="mt-4">Supports detailed measurements for experimental setups.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Nanotechnology</h2>
              <p className="mt-4">Used for measuring minute displacements in nanoscale research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our Laser Interferometer?</h2>
          <p className="mt-4">Contact us for more details or to request a demo tailored to your needs.</p>
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

export default LaserInterferometer;
