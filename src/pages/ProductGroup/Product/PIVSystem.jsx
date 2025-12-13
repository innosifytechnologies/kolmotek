import React from "react";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const PIVSystem = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.hero_piv}
          alt="PIV System"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">PIV System</h1>
          <p className="mt-2 text-lg">Advanced Optical Measurement Solutions</p>
        </div>
      </section>

      {/* Overview Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="PIV System" text2="Overview" />
          <Paragraph />
          <img
            src={assets.hero_piv}
            alt="PIV Overview"
            className="w-full rounded-lg shadow-lg mt-6"
          />
        </div>
      </section> */}

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="PIV System" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
          A PIV (Particle Image Velocimetry) System is an advanced optical measurement technique used to analyze fluid flow dynamics with high precision. It captures velocity fields by tracking the movement of illuminated particles within a fluid, enabling detailed insights into turbulence, aerodynamics, and fluid mechanics.

PIV Systems are widely used in aerospace, automotive, biomedical, and industrial research to optimize designs, improve efficiency, and enhance performance through accurate flow visualization and analysis.
          </p>
        </div>
      </section>


      {/* Sub-Sections */}
      <section className="py-16 bg-sky-200">
  <div className="container mx-auto px-6 sm:px-12 lg:px-20">
    <Title text1="Different Types of" text2="PIV Systems" />

    <div className="mt-12 space-y-8">
      {/* Stereo PIV */}
      <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <img
          src={assets.stereoPiv}
          alt="Stereo PIV"
          className="w-full sm:w-1/3 h-52 object-cover rounded-lg"
        />
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">Stereo PIV</h2>
          <p className="mt-2 text-gray-600">
            Stereo Particle Image Velocimetry (PIV) enables 3D velocity measurements.
          </p>
        </div>
      </div>

      {/* Underwater PIV */}
      <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <img
          src={assets.underwaterPiv}
          alt="Underwater PIV"
          className="w-full sm:w-1/3 h-52 object-cover rounded-lg"
        />
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">Underwater PIV</h2>
          <p className="mt-2 text-gray-600">
            Specially designed PIV for underwater applications, used in marine research.
          </p>
        </div>
      </div>

      {/* Educational PIV */}
      <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <img
          src={assets.educationalPiv}
          alt="Educational PIV"
          className="w-full sm:w-1/3 h-52 object-cover rounded-lg"
        />
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">Educational PIV</h2>
          <p className="mt-2 text-gray-600">
            Simplified PIV systems tailored for academic and research purposes.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our PIV System?</h2>
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

export default PIVSystem;
