import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const hydrographicSurveyApplications = [
  {
    id: "underwaterMapping",
    name: "Underwater Mapping",
    image: assets.underwaterMapping,
    description:
      "Underwater mapping provides detailed bathymetric data that helps in navigation, marine exploration, and seabed analysis. This data is essential for understanding underwater topography.",
  },
  {
    id: "navigationalSafety",
    name: "Navigational Safety",
    image: assets.navigationalSafety,
    description:
      "Hydrographic surveys help identify underwater hazards, ensuring safer travel for ships and submarines. This reduces the risk of accidents and improves maritime safety.",
  },
  {
    id: "marineResearch",
    name: "Marine Research",
    image: assets.marineResearch,
    description:
      "Researchers use hydrographic data to study marine ecosystems, monitor environmental changes, and assess the impact of human activities on underwater habitats.",
  },
  {
    id: "submarineRouting",
    name: "Submarine Routing",
    image: assets.submarineRouting,
    description:
      "Accurate underwater data helps in laying submarine cables and pipelines, optimizing routes to avoid obstacles and reduce costs for offshore infrastructure.",
  },
  {
    id: "fisheriesManagement",
    name: "Fisheries Management",
    image: assets.fisheriesManagement,
    description:
      "By mapping water depths and seabed conditions, hydrographic surveys assist in identifying productive fishing zones, supporting sustainable fisheries management.",
  },
  {
    id: "offshoreConstruction",
    name: "Offshore Construction",
    image: assets.offshoreConstruction,
    description:
      "Hydrographic data is critical for offshore construction projects, including wind farms, oil rigs, and ports, ensuring stability and proper placement of structures.",
  },
];

const HydrographicSurveyPage = () => {
  return (
    <div className="bg-white text-gray-800 pb-16">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/60">
        <img
          src={assets.hydrographicSurvey}
          alt="Hydrographic Survey Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold text-white tracking-wider">
            Hydrographic Surveying
          </h1>
          <p className="mt-2 text-xl font-medium">
            Mapping and measurement of sea bed elevations for navigation and
            research purpose using Acoustic sensors.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Hydrographic Surveying" text2="Introduction" />
          <p className="text-lg mt-4 text-center">
            Hydrographic Surveying is a vital process for accurately mapping and
            measuring seabed elevations to support navigation, marine research,
            and coastal management. Using advanced acoustic sensors, such as
            sonar and echo sounders, hydrographic surveys provide
            high-resolution data on underwater topography, detecting variations
            in depth, seabed features, and submerged structures.
          </p>
          <p className="text-lg mt-4 text-center">
            This technology plays a crucial role in ensuring safe maritime
            navigation, aiding in the design of ports, harbors, and offshore
            structures, and supporting environmental studies by monitoring
            sediment transport and seabed changes. Hydrographic surveys are
            essential for understanding underwater landscapes, contributing to
            sustainable marine resource management, disaster preparedness, and
            scientific exploration of oceanic environments.
          </p>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Applications of Hydrographic Surveying" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {hydrographicSurveyApplications.map((application) => (
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
          <Title text1="Why Hydrographic Surveying" text2="Is Crucial" />
          <p className="text-lg mt-4">
            Hydrographic surveying is crucial for ensuring navigational safety,
            conducting marine research, and supporting offshore construction.
            Accurate surveys help prevent accidents, aid in resource management,
            and contribute to environmental protection. The data collected also
            supports fisheries management, underwater archaeology, and even the
            development of sustainable energy sources such as offshore wind
            farms.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-300">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title
            text1="What Experts"
            text2="Say About Hydrographic Surveying"
          />
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
              <blockquote className="text-lg font-semibold text-gray-700">
                "Hydrographic surveys are essential for ensuring safe
                navigation, supporting underwater research, and enabling the
                development of sustainable maritime resources."
              </blockquote>
              <p className="mt-4 text-gray-500">
                — Dr. Alice Martin, Marine Scientist
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
              <blockquote className="text-lg font-semibold text-gray-700">
                "The accuracy of hydrographic surveys directly impacts safety,
                allowing for informed decisions in shipping, construction, and
                conservation."
              </blockquote>
              <p className="mt-4 text-gray-500">
                — James Williams, Surveying Expert
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">
            Start Your Hydrographic Survey Today
          </h2>
          <p className="mt-4">
            Contact us for professional hydrographic surveying services and
            accurate data collection.
          </p>
          <Link
            to="/contact"
            className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200"
          >
            Get in Touch
          </Link>
        </div>
      </section> */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-gray-800 text-center py-8 sm:py-10 px-6 sm:px-12 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold">
              Start Your Hydrographic Survey Today
            </h2>
            <p className="mt-3 mb-5 text-sm sm:text-base text-gray-600">
              Contact us for professional hydrographic surveying services and
              accurate data collection.
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

export default HydrographicSurveyPage;
