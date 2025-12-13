import React from "react";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const PressureSensor = () => {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black/50">
        <img
          src={assets.pressureSensors}
          alt="Pressure Sensor"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold text-white">Pressure Sensor</h1>
          <p className="mt-2 text-lg">Precision Pressure Measurement for Various Applications</p>
        </div>
      </section>

      {/* Overview Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Pressure Sensor" text2="Overview" />
          <Paragraph>
            Our Pressure Sensors provide highly accurate and reliable pressure measurements for industrial, commercial, and research applications. Designed to withstand diverse environments, these sensors are essential for monitoring and controlling pressure in different systems.
          </Paragraph>
          <img
            src={assets.applicationImage}
            alt="Pressure Sensor Overview"
            className="w-full rounded-lg shadow-lg mt-6"
          />
        </div>
      </section> */}

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <Title text1="Pressure Sensor" text2="Introduction" />
          <p className="text-lg mt-4 text-justify">
          A Pressure Sensor is a device that detects and measures pressure in gases or liquids and converts it into an electrical signal for monitoring and control. It operates using various technologies such as piezoelectric, capacitive, and strain gauge principles to ensure accurate readings.

Pressure Sensors are widely used in industries like automotive, aerospace, healthcare, and manufacturing for applications such as fluid monitoring, altitude sensing, and safety systems.
          </p>
        </div>
      </section>


      {/* Sub-Products Section */}
      <section className="py-16 bg-sky-200">
  <div className="container mx-auto px-6 sm:px-12 lg:px-20">
    <Title text1="Different Types of" text2="Pressure Sensors" />

    {/* Pressure Sensor Cards */}
    {[
      {
        title: "Sensitive Pressure Sensor",
        description:
          "Designed for high-precision applications requiring extreme sensitivity to pressure changes.",
        image: assets.sensitivePressureSensor,
        alt: "Sensitive Pressure Sensor",
      },
      {
        title: "Heavy Duty Pressure Sensor",
        description:
          "Engineered to withstand extreme conditions, ideal for industrial and rugged environments.",
        image: assets.heavyDutyPressureSensor,
        alt: "Heavy Duty Pressure Sensor",
      },
      {
        title: "High-Frequency Pressure Sensor",
        description:
          "Designed for rapid pressure fluctuations, ensuring high-speed and accurate readings.",
        image: assets.highFrequencyPressureSensor,
        alt: "High-Frequency Pressure Sensor",
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
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Contact / CTA Section */}
      <section className="py-16 bg-sky-700 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-bold">Interested in Our Pressure Sensors?</h2>
          <p className="mt-4">Contact us for more information or to request a customized solution.</p>
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

export default PressureSensor;
