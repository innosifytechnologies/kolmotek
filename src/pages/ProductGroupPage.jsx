import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const ProductGroupPageData = [
  {
    id: "LaserInstruments",
    name: "Laser Based System",
    description:
      "High Resolution Dynamic Measurements, Non-Intrusive, Large Data.",
    image: assets.LaserBasedSystems,
    products: [
      { id: "pivSystem", name: "PIV System", image: assets.hero_piv },
      {
        id: "laserInterferometer",
        name: "Laser Interferometer",
        image: assets.laserInterferometer,
      },
    ],
  },
  {
    id: "AcousticInstruments",
    name: "Acoustic Instruments",
    description:
      "Robust, Underwater Signal Transmission.",
    image: assets.AcousticInstruments,
    products: [
      {
        id: "echoSounder",
        name: "Echo Sounder",
        image: assets.hero_echoSounder,
      },
    ],
  },
  {
    id: "AerialSurveySystems",
    name: "Aerial Survey System",
    description: "Stable Platforms with Sensor Fusion, Wide Area Coverage, Autonomous Survey Capabilities.",
    image: assets.AerialSurveySystems,
    products: [],
  },
  {
    id: "UnderWaterSurveySystems",
    name: "Underwater Survey System",
    description:
      "High Pressure Handling Technology, Autonomous Survey Capabilities.",
    image: assets.UnderWaterSurveySystems,
    products: [],
  },
  {
    id: "RFMicrowaveInstruments",
    name: "RF & Microwave Instruments",
    description:
      "High Resolution Dynamic Measurements, Low Signal Attenuation in Harsh Environment.",
    image: assets.RFandMicrowaveSystems,
    products: [],
  },
  {
    id: "StrainGaugeInstruments",
    name: "Strain Gauge Instruments",
    description:
      "Low cost, Minimal Intrusion, Precision Measurements.",
    image: assets.StrainGaugeSystem,
    products: [
      { id: "dicSystem", name: "DIC System", image: assets.hero_dic },
      { id: "loadCell", name: "Load Cell", image: assets.loadCell },
      {
        id: "pressureSensors",
        name: "Pressure Sensors",
        image: assets.pressureSensors,
      },
    ],
  },
];

const ProductGroupPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20 lg:pt-24 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-2 text-center">
          <span className="text-brand-600 text-[10px] font-bold uppercase tracking-widest block mb-0.5">Our Solutions</span>
          <Title text1="Product" text2="Categories" />
        </div>

        <div className="space-y-2">
          {ProductGroupPageData.map((group) => (
            <Link
              key={group.id}
              to={`/ProductGroup/${group.id}`}
              className="group bg-white rounded-xl border border-gray-100 p-3 flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5 transition-all duration-300"
            >
              <div className="w-full sm:w-48 h-40 shrink-0 overflow-hidden rounded-lg border border-gray-100 relative bg-white">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/5 transition-colors duration-300" />
              </div>

              <div className="flex-1 text-center sm:text-left py-1">
                <div className="flex items-center justify-center sm:justify-between mb-1">
                  <h2 className="text-lg font-bold text-brand-900 group-hover:text-brand-600 transition-colors leading-tight">
                    {group.name}
                  </h2>
                  <span className="opacity-0 group-hover:opacity-100 text-brand-400 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 hidden sm:block">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">{group.description}</p>

                {group.products.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                    {group.products.map(prod => (
                      <span key={prod.id} className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-50 text-gray-600 border border-gray-100 group-hover:border-brand-100 group-hover:bg-brand-50 group-hover:text-brand-700 transition-colors">
                        {prod.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGroupPage;
