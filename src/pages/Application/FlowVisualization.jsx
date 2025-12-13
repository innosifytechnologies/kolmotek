import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const flowVisualizationApplications = [
  {
    id: "aerodynamicsTesting",
    name: "Aerodynamics Testing",
    image: assets.AerodynamicsTesting,
    description:
      "Flow visualization helps engineers analyze air movement around vehicles, aircraft, and buildings to optimize design and performance.",
  },
  {
    id: "fluidDynamicsResearch",
    name: "Fluid Dynamics Research",
    image: assets.fluidDynamicsResearch,
    description:
      "Researchers use flow visualization techniques to study the behavior of fluids in various conditions, aiding in scientific discoveries and industrial applications.",
  },
  {
    id: "medicalApplications",
    name: "Medical Applications",
    image: assets.medicalApplications,
    description:
      "Flow visualization is used in medical imaging to study blood flow in arteries and veins, improving diagnosis and treatment planning.",
  },
  {
    id: "combustionAnalysis",
    name: "Combustion Analysis",
    image: assets.combustionAnalysis,
    description:
      "Understanding fluid flow in combustion systems helps improve fuel efficiency and reduce emissions in engines and power plants.",
  },
  {
    id: "microfluidicsTesting",
    name: "Microfluidics Testing",
    image: assets.microfluidicsTesting,
    description:
      "Flow visualization is crucial in microfluidics for developing lab-on-a-chip devices and improving drug delivery systems.",
  },
  {
    id: "environmentalStudies",
    name: "Environmental Studies",
    image: assets.environmentalStudies,
    description:
      "Scientists use flow visualization to study water currents, air pollution dispersion, and climate patterns for environmental protection.",
  },
];

const FlowVisualizationPage = () => {
  return (
    <div className="bg-white text-gray-800 pb-16">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/60">
        <img
          src={assets.FlowVisualization}
          alt="Flow Visualization Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold text-white tracking-wider">
            Flow Visualization
          </h1>
          <p className="mt-2 text-xl font-medium">
            Study of fluid behaviour by seeding the flow with glass particles
            and illuminating with lasers.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Flow Visualization" text2="Introduction" />
          <p className="text-lg mt-4 text-center">
            Flow Visualization is a powerful technique used to analyze and
            understand fluid behavior in various engineering and scientific
            applications. By seeding the fluid with microscopic glass particles
            and illuminating them with high-intensity lasers, researchers can
            track flow patterns, turbulence, and velocity distributions with
            high precision.
          </p>
          <p className="text-lg mt-4 text-center">
            This method is widely used in aerodynamics, hydrodynamics, and
            biomedical fluid studies, providing critical insights into how
            fluids interact with surfaces and structures. Flow visualization
            plays a crucial role in optimizing designs for aircraft, underwater
            vehicles, pipelines, and medical devices, ensuring efficiency,
            safety, and improved performance in real-world applications.
          </p>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Applications of Flow Visualization" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {flowVisualizationApplications.map((application) => (
              <div
                key={application.id}
                className="block bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={application.image}
                  alt={application.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {application.name}
                  </h2>
                  <p className="mt-2 text-gray-600">
                    {application.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Why Flow Visualization" text2="Is Important" />
          <p className="text-lg mt-4">
            Flow visualization plays a crucial role in fields ranging from
            aerodynamics and medicine to environmental sciences. By making fluid
            motion visible, researchers can optimize designs, improve
            efficiency, and develop new technologies for various industries.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-gray-800 text-center py-8 sm:py-10 px-6 sm:px-12 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold">
              Enhance Your Research with Flow Visualization
            </h2>
            <p className="mt-3 mb-5 text-sm sm:text-base text-gray-600">
              Contact us for expert solutions in flow visualization technology.
            </p>
            <Link
              to="/contact"
              className="inline-block px-5 py-2.5 bg-brand-600 text-white font-bold rounded-lg shadow-lg hover:bg-brand-700 text-sm sm:text-base transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlowVisualizationPage;
