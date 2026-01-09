import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const acousticInstruments = [
  {
    id: "EchoSounder",
    name: "Echo Sounder",
    fullName: "Echo Sounder System",
    description: "An advanced sonar device used for underwater depth measurements and seabed mapping.",
    image: assets.hero_echoSounder,
  },
  {
    id: "AcousticDopplerCurrentProfiler",
    name: "ADCP",
    fullName: "Acoustic Doppler Current Profiler",
    description: "A precise instrument that measures water current velocities using Doppler shift principles.",
    image: assets.AcousticDopplerCurrentProfiler,
  },
  {
    id: "AcousticDopplerVelocimeter",
    name: "ADV",
    fullName: "Acoustic Doppler Velocimeter",
    description: "A high-resolution tool for measuring three-dimensional water velocity fluctuations.",
    image: assets.AcousticDopplerVelocimeter,
  }
];

const AcousticInstrumentsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-700 pt-20 lg:pt-24 pb-10 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <Title text1="Acoustic" text2="Instruments" />

        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-3 sm:mt-4 max-w-3xl mx-auto text-center">
          Acoustic instruments utilize sound waves for precise underwater measurement, navigation, and current profiling.
          These technologies are widely used in oceanography, hydrology, and environmental research.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {acousticInstruments.map((product) => (
            <Link
              key={product.id}
              to={`/AcousticInstruments/${product.id}`}
              className="group flex flex-col md:flex-row bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-brand-200"
            >
              <div className="md:w-1/3 aspect-[4/3] relative overflow-hidden bg-gray-50 border-b md:border-b-0 md:border-r border-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

export default AcousticInstrumentsPage;
