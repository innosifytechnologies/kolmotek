import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const strainGaugeProducts = [
  {
    id: "LoadCell",
    name: "Load Cell",
    fullName: "Load Cell Sensor",
    description: "A precision sensor used to measure force and weight in various industrial applications.",
    image: assets.loadCell,
  },
  {
    id: "PressureSensors",
    name: "Pressure Sensors",
    fullName: " Pressure Sensors",
    description: "Accurate sensors designed for monitoring and measuring pressure variations in different environments.",
    image: assets.pressureSensors,
  },
];

const StrainGaugeSystemPage = () => {
  return (
    <div className="bg-gray-50 text-gray-700 pt-20 lg:pt-24 pb-10 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <Title text1="Strain Gauge" text2="Instruments" />

        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-3 sm:mt-4 max-w-3xl mx-auto text-center">
          Strain Gauge Instruments provide accurate measurement of force, strain, and pressure. These systems are essential in engineering, material testing, and industrial applications.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {strainGaugeProducts.map((product) => (
            <Link
              key={product.id}
              to={`/StrainGaugeInstruments/${product.id}`}
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

export default StrainGaugeSystemPage;
