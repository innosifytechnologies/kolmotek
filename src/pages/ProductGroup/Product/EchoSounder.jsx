import React from "react";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const EchoSounder = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.hero_echoSounder}
          alt="Echo Sounder"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">Echo Sounder</h1>
          <p className="mt-2 text-lg">Precision Depth Measurement and Underwater Mapping</p>
        </div>
      </section>

      {/* Overview Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Echo Sounder" text2="Overview" />
          <Paragraph />
          <img
            src={assets.applicationImage}
            alt="Echo Sounder Overview"
            className="w-full rounded-lg shadow-lg mt-6"
          />
        </div>
      </section> */}

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Echo Sounder" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
            An Echo Sounder is a sonar-based device used to measure water depth by emitting sound pulses and analyzing their reflections from the seabed. It is widely used in hydrography, marine navigation, and underwater exploration to create detailed depth maps and detect underwater objects.

            Echo Sounders play a crucial role in ensuring safe navigation, seabed mapping, and marine research by providing accurate and real-time depth measurements.
          </p>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Features" />
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>High-accuracy depth measurement</li>
            <li>Real-time underwater mapping</li>
            <li>Advanced sonar technology</li>
            <li>Suitable for marine research and navigation</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Applications of" text2="Echo Sounder" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Hydrographic Surveying</h2>
              <p className="mt-4">Used for mapping underwater topography and navigation.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Fish Finding</h2>
              <p className="mt-4">Helps in locating fish schools for commercial fishing.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Maritime Safety</h2>
              <p className="mt-4">Assists in detecting underwater hazards for safe navigation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our Echo Sounder?</h2>
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

export default EchoSounder;
