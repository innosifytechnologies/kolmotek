import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const laserBasedProducts = [
  {
    id: "LaserInterferometer",
    name: "Laser Interferometer",
    fullName: "Laser Interferometer System",
    description: "A high-precision tool for detecting minute changes in distances and surfaces using laser technology.",
    image: assets.laserInterferometer,
  },
  {
    id: "PIVSystem",
    name: "PIV",
    fullName: "Particle Image Velocimetry System",
    description: "A sophisticated optical method used to measure and visualize fluid flow dynamics with high accuracy.",
    image: assets.hero_piv,
  },
  {
    id: "LIDARSystem",
    name: "LIDAR",
    fullName: "Light Detection and Ranging System",
    description: "A remote sensing technology that measures distances by illuminating targets with laser light and analyzing the reflection.",
    image: assets.LIDARSystem,
  },
  {
    id: "LIBSSystem",
    name: "LIBS",
    fullName: "Laser-Induced Breakdown Spectroscopy System",
    description: "An advanced spectroscopic technique used for material composition analysis based on laser-induced plasma.",
    image: assets.LaserInducedBreakdownSpectroscopy,
  },
  {
    id: "DICSystem",
    name: "DIC",
    fullName: "Digital Image Correlation System",
    description: "A non-contact optical method for measuring surface deformations and strain analysis with high precision.",
    image: assets.hero_dic,
  },
  {
    id: "TLSSystem",
    name: "TLS",
    fullName: "Terrestrial Laser Scanning System",
    description: "A ground-based laser scanning technique used for 3D mapping and structural analysis in various applications.",
    image: assets.TerrestrialLaserScanningSystem,
  },
];

const LaserBasedProductsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-700 pt-20 lg:pt-24 pb-10 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <Title text1="Laser Based" text2="Instruments" />

        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-3 sm:mt-4 max-w-3xl mx-auto text-center">
          Laser-based Instruments utilize cutting-edge optical technologies for precision measurement, imaging, and analysis.
          These systems are widely used in engineering, scientific research, environmental monitoring, and industrial applications.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {laserBasedProducts.map((product) => (
            <Link
              to={`/ProductGroup/LaserInstruments/${product.id}`}
              key={product.id}
              className="group flex flex-col md:flex-row bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-brand-200"
            >
              <div className="md:w-1/3 h-48 sm:h-64 md:h-auto relative overflow-hidden bg-gray-50 border-b md:border-b-0 md:border-r border-gray-100 p-4 sm:p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 sm:p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-900 group-hover:text-brand-600 transition-colors mb-2 sm:mb-3">
                  {product.fullName}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">{product.description}</p>
                <div className="mt-4 sm:mt-6">
                  <span className="inline-flex items-center text-brand-600 font-medium group-hover:gap-2 transition-all text-sm sm:text-base">
                    Learn more <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaserBasedProductsPage;
