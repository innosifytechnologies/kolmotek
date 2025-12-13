import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const applications = [
  {
    id: "flowVisualization",
    name: "Flow Visualization",
    image: assets.FlowVisualization,
    description:
      "Study of fluid behaviour by seeding the flow with glass particles and illuminating with lasers.",
  },
  {
    id: "hydroGraphicSurvey",
    name: "HydroGraphic Survey",
    image: assets.hydrographicSurvey,
    description:
      "Mapping and measurement of sea bed elevations for navigation and research purpose using Acoustic sensors.",
  },
  {
    id: "AerialSurveyPage",
    name: "Aerial Survey",
    image: assets.AerialSurveySystems,
    description:
      "Sea surface elevation measurements for wave intensity assessment in predisaster phase, flood inundation measurements during and post-disaster phases using RF and Optical sensors mounted on Autonomous Aerial Vehicles.",
  },
  {
    id: "structuralHealthMonitoring",
    name: "Structural Health Monitoring",
    image: assets.structuralHealthMonitoring,
    description:
      "Monitoring the health of the structure through deformation measurements using strain gauge and laser technologies.",
  },
  {
    id: "deepSeaExploration",
    name: "Deep Sea Exploration",
    image: assets.deepSeaExploration,
    description:
      "Assessing the minerals on the sea bed using Laser Induced Breakdown Spectroscopy instruments, biodiversity studies using optical instruments mounted on Autonomous Underwater Vehicles.",
  },
];

const ApplicationPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20 lg:pt-24 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-2 text-center">
          <span className="text-brand-600 text-[10px] font-bold uppercase tracking-widest block mb-0.5">Industries</span>
          <Title text1="Field of" text2="Applications" />
        </div>

        <div className="space-y-2">
          {applications.map((application) => (
            <Link
              key={application.id}
              to={`/application/${application.id}`}
              className="group bg-white rounded-xl border border-gray-100 p-3 flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:border-brand-200 hover:shadow-sm hover:shadow-brand-900/5 transition-all duration-300"
            >
              <div className="w-full sm:w-48 h-40 shrink-0 overflow-hidden rounded-lg border border-gray-100 relative bg-white">
                <img
                  src={application.image}
                  alt={application.name}
                  className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/5 transition-colors duration-300" />
              </div>

              <div className="flex-1 text-center sm:text-left py-1">
                <div className="flex items-center justify-center sm:justify-between mb-1">
                  <h2 className="text-lg font-bold text-brand-900 group-hover:text-brand-600 transition-colors leading-tight">
                    {application.name}
                  </h2>
                  <span className="opacity-0 group-hover:opacity-100 text-brand-400 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 hidden sm:block">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">{application.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
