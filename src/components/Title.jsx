import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-6">
      <p className="text-brand-900 text-3xl font-bold uppercase tracking-tight">
        {text1} <span className="text-brand-600 font-medium">{text2}</span>
      </p>
      <div className="w-12 h-[2px] bg-brand-700 ml-2 mt-1"></div>
    </div>
  );
};

export default Title;
