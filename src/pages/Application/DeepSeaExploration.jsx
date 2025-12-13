import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const deepSeaExplorationApplications = [
  {
    id: "marineBiodiversity",
    name: "Marine Biodiversity Studies",
    image: assets.marineBiodiversity,
    description:
      "Deep-sea exploration helps uncover unknown marine species, contributing to our understanding of ocean biodiversity and ecosystems.",
  },
  {
    id: "geologicalResearch",
    name: "Geological Research",
    image: assets.geologicalResearch,
    description:
      "Scientists study the ocean floor to understand plate tectonics, underwater volcanoes, and earthquake activity.",
  },
  {
    id: "underwaterHabitats",
    name: "Underwater Habitats and Ecosystems",
    image: assets.underwaterHabitats,
    description:
      "Exploring the deep sea reveals extreme environments, such as hydrothermal vents, where unique life forms thrive under high pressure and temperatures.",
  },
  {
    id: "deepSeaMining",
    name: "Deep-Sea Mining",
    image: assets.deepSeaMining,
    description:
      "Valuable minerals and resources are found on the ocean floor, making deep-sea exploration crucial for sustainable mining and resource extraction.",
  },
  {
    id: "submarineTechnology",
    name: "Submarine Technology Advancements",
    image: assets.submarineTechnology,
    description:
      "Exploration drives innovations in deep-diving submarines, remotely operated vehicles (ROVs), and autonomous underwater vehicles (AUVs).",
  },
  {
    id: "climateChangeResearch",
    name: "Climate Change Research",
    image: assets.climateChangeResearch,
    description:
      "Studying deep-sea conditions helps scientists understand climate change impacts, ocean currents, and carbon storage mechanisms.",
  },
];

const DeepSeaExplorationPage = () => {
  return (
    <div className="bg-white text-gray-800 pb-16">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/60">
        <img
          src={assets.deepSeaExploration}
          alt="Deep Sea Exploration Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold text-white tracking-wider">
            Deep Sea Exploration
          </h1>
          <p className="mt-2 text-xl font-medium">
            Assessing the minerals on the sea bed using Laser Induced Breakdown
            Spectroscopy instruments, biodiversity studies using optical
            instruments mounted on Autonomous Underwater Vehicles.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Deep Sea Exploration" text2="Introduction" />
          <p className="text-lg mt-4 text-center">
            Deep Sea Exploration is a cutting-edge scientific endeavor aimed at
            uncovering the mysteries of the ocean depths through advanced
            sensing and imaging technologies. By utilizing Laser Induced
            Breakdown Spectroscopy (LIBS) instruments, researchers can
            accurately assess the composition of seabed minerals, enabling
            valuable insights into underwater geology and potential resource
            exploration. Additionally, optical instruments mounted on Autonomous
            Underwater Vehicles (AUVs) play a crucial role in studying deep-sea
            biodiversity, capturing high-resolution images and data on marine
            life in its natural habitat.
          </p>
          <p className="text-lg mt-4 text-center">
            These advanced technologies allow scientists to explore extreme
            underwater environments with high precision, providing critical data
            for marine conservation, climate studies, and sustainable resource
            management. Deep Sea Exploration not only expands our understanding
            of oceanic ecosystems but also supports innovative research in
            fields such as environmental monitoring, underwater archaeology, and
            offshore engineering.
          </p>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Key" text2="Applications of Deep Sea Exploration" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {deepSeaExplorationApplications.map((application) => (
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
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Why Deep Sea Exploration" text2="Is Important" />
          <p className="text-lg mt-4">
            Deep-sea exploration is crucial for expanding our knowledge of
            Earth's last frontier. It contributes to scientific discoveries,
            technological advancements, and sustainable resource management.
            Understanding the deep sea also helps in assessing climate change
            effects and developing conservation strategies for fragile marine
            ecosystems.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-gray-800 text-center py-8 sm:py-10 px-6 sm:px-12 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold">
              Begin Your Deep Sea Exploration Journey
            </h2>
            <p className="mt-3 mb-5 text-sm sm:text-base text-gray-600">
              Join us in discovering the hidden world beneath the ocean's surface.
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

export default DeepSeaExplorationPage;
