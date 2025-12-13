import React from "react";
import { assets } from "../assets/assets";
import { CheckCircle } from "lucide-react";

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.easy_icon,
      title: "Tailored Solutions",
      description: "Custom instruments covering specific research challenges.",
    },
    {
      icon: assets.lowCost_icon,
      title: "Advanced Tech",
      description: "AI-driven processing & sensor integration.",
    },
    {
      icon: assets.efficient_icon,
      title: "Made in India",
      description: "Locally manufactured for research independence.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
      {policies.map((policy, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-5 border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all duration-300 text-left flex sm:flex-col lg:flex-row items-start gap-4 group"
        >
          {/* Icon - Compact */}
          <div className="w-10 h-10 shrink-0 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-brand-50 group-hover:border-brand-100 transition-colors">
            <img
              src={policy.icon}
              className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
              alt=""
              aria-hidden="true"
            />
          </div>

          <div>
            <h3 className="text-base font-bold text-brand-900 mb-1 group-hover:text-brand-700 transition-colors">
              {policy.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">
              {policy.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurPolicy;
