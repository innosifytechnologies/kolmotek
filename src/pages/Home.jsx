import React, { useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Application from "../components/Application";
import OurPolicy from "../components/OurPolicy";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Award, Target, Users, ExternalLink } from "lucide-react";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const stats = [
    { number: "10+", label: "Products", icon: Award },
    { number: "50+", label: "Projects", icon: Target },
    { number: "100%", label: "Made in India", icon: Users },
  ];

  const features = [
    "IIT Madras Research Team",
    "AI-Driven Data Processing",
    "Tailored Solutions",
    "End-to-End Support",
  ];

  return (
    <div className="bg-white">
      <HeroCarousel />

      {/* Stats Bar - Professional Light Gray */}
      <section className="bg-gray-50 border-b border-gray-200 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto px-2 sm:px-6">
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center px-1 sm:px-4">
                <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <stat.icon className="w-3 h-3 sm:w-5 sm:h-5 text-brand-600" />
                  <span className="text-base sm:text-2xl font-bold text-brand-900 leading-none">{stat.number}</span>
                </div>
                <div className="text-[8px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-brand-900 mb-2">Specialized Applications</h2>
              <p className="text-sm text-gray-500 max-w-xl">
                High-performance instruments designed for specific research environments.
              </p>
            </div>
            <Link to="/Application" className="text-sm font-semibold text-brand-700 hover:text-brand-900 flex items-center gap-1 group">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <Application />
        </div>
      </section>

      {/* About Section - Clean & Trustworthy */}
      <section className="py-16 bg-brand-50/30 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                <img src={assets.about_img} alt="About KolmoTek" className="w-full h-auto" />
              </div>
              {/* Decorative block */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-brand-200 rounded-xl -z-0"></div>
            </div>

            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-px bg-brand-400"></span>
                <span className="text-brand-600 text-xs font-bold uppercase tracking-widest">Our Heritage</span>
              </div>
              <h2 className="text-3xl font-bold text-brand-900 mb-4">
                Engineering Excellence from <br />
                <span className="text-brand-600">IIT Madras Scholars</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                Kolmotek creates advanced instrumentation for coastal and riverine research. Born from the research labs of IIT Madras, we combine academic rigour with industrial reliability.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500" />
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-primary">
                Explore Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-violet-200 to-sky-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-brand-900">Why Choose KolmoTek</h2>
          </div>
          <OurPolicy />
        </div>
      </section>

      {/* CTA - Brand Anchor */}
      <section className="py-8 sm:py-12 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 rounded-2xl bg-brand-900 text-white p-6 sm:p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white">Ready to Upgrade?</h2>
              <p className="text-brand-100 text-xs sm:text-sm max-w-md">Contact our engineering team for a consultation on your specific requirements.</p>
            </div>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 w-full xs:w-auto">
              <Link to="/contact" className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-brand-900 font-bold rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm text-center whitespace-nowrap">
                Get a Quote
              </Link>
              <Link to="/ProductGroup" className="px-4 sm:px-6 py-2.5 sm:py-3 border border-brand-700 hover:bg-brand-800 text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm text-center whitespace-nowrap">
                Browse Catalog
              </Link>
            </div>
          </div>

          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-accent-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
