import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">

      {/* Hero Section - Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141] px-4 sm:px-0">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">
              BEST OPTICAL MEASUREMENT SYSTEM
            </p>
          </div>

          <h1 className="prata-regular text-4xl sm:py-3 lg:text-8xl leading-relaxed">
            KolmoTek'
          </h1>

          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">WE MAKE IT EASIER</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero Section - Right Side (Image) */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-4 sm:py-0">
        <img
          src={assets.hero_img}
          alt="KolmoTek Hero"
          className="
            w-[90%] 
            sm:w-full 
            rounded-lg 
            object-cover 
            transition-all 
            duration-300 
            shadow-sm
          "
          style={{
            maxHeight: "400px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
