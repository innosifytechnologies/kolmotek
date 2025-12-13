import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const structuralHealthMonitoringApplications = [
  {
    id: "bridgeMonitoring",
    name: "Bridge Monitoring",
    image: assets.bridgeMonitoring,
    description:
      "Continuous monitoring of bridges helps detect structural weaknesses, cracks, and vibrations, ensuring timely maintenance and preventing catastrophic failures.",
  },
  {
    id: "buildingHealth",
    name: "Building Health Assessment",
    image: assets.buildingHealth,
    description:
      "Structural Health Monitoring (SHM) in buildings helps detect stress, corrosion, and damage in real-time, improving safety and longevity.",
  },
  {
    id: "damSafety",
    name: "Dam Safety Monitoring",
    image: assets.damSafety,
    description:
      "Monitoring dams for pressure, movement, and seepage helps in early detection of potential failures, ensuring water resource management and public safety.",
  },
  {
    id: "railwayInfrastructure",
    name: "Railway Infrastructure Monitoring",
    image: assets.railwayInfrastructure,
    description:
      "SHM plays a crucial role in ensuring railway track integrity, preventing derailments, and maintaining efficient transport systems.",
  },
  {
    id: "aerospaceStructures",
    name: "Aerospace Structural Monitoring",
    image: assets.aerospaceStructures,
    description:
      "Aircraft and spacecraft structures are monitored to detect stress, material fatigue, and other critical issues to enhance safety and performance.",
  },
  {
    id: "offshorePlatforms",
    name: "Offshore Platform Monitoring",
    image: assets.offshorePlatforms,
    description:
      "SHM is used in oil rigs and offshore platforms to track structural integrity against harsh marine environments and extreme weather conditions.",
  },
];

const StructuralHealthMonitoringPage = () => {
  return (
    <div className="bg-white text-gray-800 pb-16">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/60">
        <img
          src={assets.structuralHealthMonitoring}
          alt="Structural Health Monitoring Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold text-white tracking-wider">
            Structural Health Monitoring
          </h1>
          <p className="mt-2 text-xl font-medium">
            Monitoring the health of the structure through deformation
            measurements using strain gauge and laser technologies.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Structural Health Monitoring" text2="Introduction" />
          <p className="text-lg mt-4 text-center">
            Structural Health Monitoring (SHM) is an advanced technology that
            enables real-time assessment and continuous evaluation of the
            structural integrity of critical infrastructure. By utilizing
            high-precision strain gauge sensors and laser-based measurement
            systems, SHM detects deformations, stress variations, and vibrations
            that can indicate potential weaknesses or failures. This proactive
            monitoring approach is essential for ensuring the safety,
            reliability, and longevity of structures such as bridges, high-rise
            buildings, tunnels, dams, aircraft, and offshore platforms.
          </p>
          <p className="text-lg mt-4 text-center">
            SHM systems provide early warnings of structural distress, allowing
            for timely maintenance and repairs, thus preventing catastrophic
            failures and reducing overall maintenance costs. By integrating
            modern data analysis and AI-driven predictive modeling, SHM not only
            enhances structural safety but also optimizes resource allocation
            and extends the operational lifespan of critical infrastructure.
          </p>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Applications of SHM" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {structuralHealthMonitoringApplications.map((application) => (
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
          <Title text1="Why Structural Health Monitoring" text2="Is Crucial" />
          <p className="text-lg mt-4">
            SHM is essential for ensuring infrastructure reliability, reducing
            maintenance costs, and preventing structural failures. By
            continuously monitoring critical structures, SHM provides real-time
            data that aids in proactive decision-making, ultimately enhancing
            public safety and extending the lifespan of assets.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-gray-800 text-center py-8 sm:py-10 px-6 sm:px-12 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold">
              Enhance Structural Safety with SHM
            </h2>
            <p className="mt-3 mb-5 text-sm sm:text-base">
              Get in touch with us for advanced Structural Health Monitoring
              solutions.
            </p>
            <Link
              to="/contact"
              className="inline-block px-5 py-2.5 bg-brand-600 text-white font-bold rounded-lg shadow-lg hover:bg-brand-700 text-sm sm:text-base transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StructuralHealthMonitoringPage;
