import React from "react";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const LoadCell = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.loadCell}
          alt="Load Cell"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">Load Cell</h1>
          <p className="mt-2 text-lg">
            Accurate Force Measurement for Diverse Applications
          </p>
        </div>
      </section>

      {/* Overview Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Load Cell" text2="Overview" />
          <Paragraph>
            Our Load Cells provide precise force and weight measurement for a
            wide range of industrial, commercial, and research applications.
            Designed for accuracy and reliability, they are essential for
            various load testing, weighing systems, and automation processes.
          </Paragraph>
          <img
            src={assets.applicationImage}
            alt="Load Cell Overview"
            className="w-full rounded-lg shadow-lg mt-6"
          />
        </div>
      </section> */}

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Load Cell" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
            A Load Cell is a highly precise sensor used to measure force or
            weight by converting mechanical load into an electrical signal. It
            operates based on strain gauge, hydraulic, or piezoelectric
            principles to ensure accurate and reliable measurements. Load Cells
            are widely used in industrial weighing systems, automation,
            aerospace, and medical applications where precise force measurement
            is critical for safety and efficiency.
          </p>
        </div>
      </section>

      {/* Sub-Products Section */}
      <section className="py-16 bg-sky-200">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Different Types of" text2="Load Cells" />

          {/* Load Cell Cards */}
          {[
            {
              title: "2-Component Load Cell",
              description:
                "Measures force in two orthogonal directions for precision applications.",
              features: [
                "High accuracy in two axes",
                "Ideal for robotic force measurement",
                "Compact and durable design",
              ],
              image: assets.twoComponenetLoadCell,
              alt: "2-Component Load Cell",
            },
            {
              title: "3-Component Load Cell",
              description:
                "Ideal for measuring forces in three mutually perpendicular directions.",
              features: [
                "High precision force measurement in X, Y, and Z axes",
                "Robust design for industrial applications",
                "Compatible with multiple control systems",
              ],
              image: assets.threeComponenetLoadCell,
              alt: "3-Component Load Cell",
            },
            {
              title: "6-Component Load Cell",
              description:
                "Provides force and torque measurements in all six degrees of freedom.",
              features: [
                "Simultaneous force and torque measurement",
                "Essential for robotics and aerospace testing",
                "Temperature-compensated for stable performance",
              ],
              image: assets.sixComponenetLoadCell,
              alt: "6-Component Load Cell",
            },
            {
              title: "High-Frequency Load Cell",
              description:
                "Designed for dynamic force measurements at high response rates.",
              features: [
                "Fast response time for impact testing",
                "High sensitivity and accuracy",
                "Suitable for automotive crash testing",
              ],
              image: assets.highFrequencyLoadCell,
              alt: "High-Frequency Load Cell",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="mt-12 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start"
            >
              {/* Image on the left */}
              <img
                src={item.image}
                alt={item.alt}
                className="w-full md:w-1/3 h-60 object-cover rounded-lg"
              />

              {/* Text Content */}
              <div className="md:ml-6 mt-4 md:mt-0 flex-1">
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <p className="mt-4">{item.description}</p>
                <ul className="list-disc list-inside mt-4">
                  {item.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our Load Cell?</h2>
          <p className="mt-4">
            Contact us for more information or to request a quote tailored to
            your needs.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 mt-5 bg-white text-sky-800 font-bold rounded-lg shadow-lg hover:bg-gray-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LoadCell;
