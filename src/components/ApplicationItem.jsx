import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ApplicationItem = ({ id, image, name }) => {
  return (
    <Link to={`/Application/${id}`} className="block group bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:border-brand-200">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image[0]}
          alt={name}
          loading="lazy"
        />
        {/* Overlay - Subtle Brand Tint */}
        <div className="absolute inset-0 bg-brand-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Application Name */}
      <div className="p-3 bg-white group-hover:bg-gray-50 transition-colors">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs sm:text-sm font-bold text-gray-800 group-hover:text-brand-700 transition-colors line-clamp-2 leading-tight">
            {name}
          </p>
          <ArrowUpRight className="w-3 h-3 text-gray-300 group-hover:text-brand-500 transition-colors shrink-0" />
        </div>
      </div>
    </Link>
  );
};

export default ApplicationItem;
