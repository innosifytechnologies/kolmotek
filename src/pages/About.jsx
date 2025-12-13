import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { ChevronDown, Award, Target, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { question: "Do you offer Services along with Products?", answer: "Yes, we offer 'Survey as Service' alongside our product range." },
    { question: "How can I contact support?", answer: "Email support@kolmotek.com or call +91-7981354735." },
    { question: "Business hours?", answer: "Monday to Friday, 9:00 AM to 6:00 PM IST." },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-violet-50 to-sky-50 min-h-screen">
      {/* Header - Simple & Clean */}
      <section className="pt-20 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-900 mb-3 sm:mb-4">Pioneering Instrumentation</h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          We are an IIT Madras alumni-founded company dedicated to engineering high-precision tools for India's research ecosystem.
        </p>
      </section>

      {/* Values Grid */}
      <section className="pb-16 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Award, title: "Excellence", desc: "World-class standards in every component." },
            { icon: Target, title: "Precision", desc: "Data accuracy you can trust." },
            { icon: Lightbulb, title: "Innovation", desc: "AI-driven solutions for modern problems." }
          ].map((item, i) => (
            <div key={i} className="card-pro p-6 text-center bg-white rounded-2xl shadow-lg shadow-brand-900/5 hover:shadow-brand-900/10 transition-all border border-white/50">
              <div className="w-12 h-12 mx-auto bg-brand-50 rounded-xl flex items-center justify-center mb-4 text-brand-600">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Split */}
      <section className="py-12 sm:py-16 bg-white shadow-sm border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-900 mb-3 sm:mb-4 text-center md:text-left">Our Vision</h2>
            <p className="text-gray-600 text-sm leading-7 mb-5 sm:mb-6 text-center md:text-left">
              To empower Indian research institutions by reducing improved reliance on foreign technology. We aim to build a self-reliant ecosystem where high-quality research tools are designed, built, and supported locally.
            </p>
            <div className="flex gap-2 justify-center md:justify-start">
              <Link to="/contact" className="btn-primary">Connect with Us</Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img src={assets.vision} alt="Vision" className="rounded-2xl shadow-lg shadow-brand-900/10 border border-gray-100 w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-900">Leadership Team</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">Guided by experts from IIT Madras</p>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              name: "Varun Raj Dondapati",
              role: "Founder",
              qual: "PhD., Naval Architecture and Ocean Engineering, IIT Madras",
              img: assets.TeamMember_Varun
            },
            {
              name: "Malasani Gopi Chand",
              role: "Co-Founder",
              qual: "PhD., Civil Engineering, IIT Madras",
              img: assets.TeamMember_Gopi
            },
            {
              name: "Ikram Khan S.I",
              role: "Advisor",
              qual: "MS, Electronics and Communications Engineering, IIT Madras",
              img: assets.TeamMember_Ikram
            },
          ].map((member, i) => (
            <div key={i} className="text-center group bg-white p-6 rounded-2xl shadow-md shadow-brand-900/5 hover:shadow-brand-900/10 border border-white/50 transition-all">
              <div className="relative inline-block mb-4 overflow-hidden rounded-full border-2 border-brand-50 group-hover:border-brand-500 transition-colors">
                <img src={member.img} alt={member.name} className="w-24 h-24 object-cover transform transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-sm font-bold text-brand-900">{member.name}</h3>
              <p className="text-xs text-brand-600 uppercase tracking-wide mt-1 font-semibold">{member.role}</p>
              <p className="text-xs text-gray-500 mt-2 max-w-xs mx-auto leading-relaxed">{member.qual}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-brand-900/5">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center p-4 text-left transition-colors hover:bg-sky-50/50">
                  <span className="font-semibold text-brand-900 text-sm">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 ${activeIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {activeIndex === index && (
                  <div className="p-4 bg-gray-50/50 text-sm text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
