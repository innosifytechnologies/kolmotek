import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const aerialSurveyApplications = [
  {
    id: "urbanPlanning",
    name: "Urban Planning and Development",
    image: assets.urbanPlanning,
    description:
      "Aerial surveys provide detailed insights into land use, helping urban planners make informed decisions about infrastructure and city expansion.",
  },
  {
    id: "agricultureMonitoring",
    name: "Agricultural Monitoring",
    image: assets.AgriculturalMonitoring,
    description:
      "Drones and aerial imaging help monitor crop health, optimize irrigation, and detect pest infestations, improving agricultural efficiency.",
  },
  {
    id: "environmentalMonitoring",
    name: "Environmental Monitoring",
    image: assets.EnvironmentalMonitoring,
    description:
      "High-resolution aerial imagery helps track deforestation, pollution levels, and ecosystem changes to support environmental conservation efforts.",
  },
  {
    id: "wildlifeConservation",
    name: "Wildlife Conservation",
    image: assets.WildlifeConservation,
    description:
      "Aerial surveys assist in tracking wildlife populations, identifying poaching threats, and monitoring habitat conditions to aid conservation efforts.",
  },
  {
    id: "infrastructureInspection",
    name: "Infrastructure Inspection",
    image: assets.InfrastructureInspection,
    description:
      "Bridges, roads, and power lines are monitored using aerial surveys to ensure safety, maintenance, and efficient management of infrastructure assets.",
  },
  {
    id: "floodResponse",
    name: "Emergency Response for Flood Inundation",
    image: assets.floodResponse,
    description:
      "Aerial imaging is utilized for real-time flood monitoring, damage assessment, and emergency response coordination to enhance disaster management efforts.",
  },
];

const AerialSurveyPage = () => {
  return (
    <div className="bg-white text-gray-800 pb-16">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/60">
        <img
          src={assets.AerialSurvey}
          alt="Aerial Survey Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold text-white tracking-wider">
            Aerial Survey Solutions
          </h1>
          <p className="mt-2 text-xl font-medium">
            Sea surface elevation measurements for wave intensity assessment in
            predisaster phase, flood inundation measurements during and
            post-disaster phases using RF and Optical sensors mounted on
            Autonomous Aerial Vehicles.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Aerial Survey" text2="Introduction" />
          <p className="text-lg mt-4 text-center">
            Aerial Survey is a cutting-edge technique for monitoring and
            analyzing sea surface elevations, wave intensities, and flood
            dynamics using RF and optical sensors mounted on Autonomous Aerial
            Vehicles (AAVs).
          </p>
          <p className="text-lg mt-4 text-center">
            In the pre-disaster phase, these surveys help assess wave intensity
            and sea surface variations, providing valuable data for early
            warning systems and coastal protection measures. During and after
            disasters, aerial surveys play a crucial role in flood inundation
            mapping, offering real-time insights into affected areas, aiding in
            disaster response, recovery planning, and risk assessment.
          </p>
          <p className="text-lg mt-4 text-center">
            By utilizing advanced remote sensing technologies, aerial surveys
            provide high-resolution spatial data that enhance our understanding
            of natural disasters, improve predictive models, and support
            effective disaster mitigation strategies.
          </p>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Applications of Aerial Surveys" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {aerialSurveyApplications.map((application) => (
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
          <Title text1="Why Aerial Surveys" text2="Are Valuable" />
          <p className="text-lg mt-4">
            Aerial surveys offer a cost-effective and efficient way to gather
            critical data across various industries. From improving agricultural
            yields to monitoring urban growth, aerial technology provides
            actionable insights that drive progress and innovation.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-gray-800 text-center py-8 sm:py-10 px-6 sm:px-12 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold">
              Leverage Aerial Insights for Smarter Decisions
            </h2>
            <p className="mt-3 mb-5 text-sm sm:text-base text-gray-600">
              Contact us to explore how aerial surveys can transform your industry
              and optimize operations.
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

export default AerialSurveyPage;
