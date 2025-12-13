import React, { useEffect } from "react";
import Message from "../components/Message";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-100 via-violet-100 to-sky-100 min-h-screen relative flex items-center justify-center pt-20 lg:pt-24 pb-6 sm:pb-8">

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-5 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-900 tracking-tight mb-2">Get in Touch</h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
            We'd love to hear from you. Our team is always here to help.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-brand-900/10 overflow-hidden grid grid-cols-1 lg:grid-cols-3">

          {/* Left: Contact Details */}
          <div className="p-5 sm:p-6 lg:p-8 lg:border-r border-b lg:border-b-0 border-gray-100 bg-slate-50 flex flex-col">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-brand-900 mb-4 sm:mb-5">Contact Info</h3>
              <div className="space-y-4 sm:space-y-5">

                {/* Phone */}
                <div className="flex gap-3 group items-start">
                  <span className="w-8 h-8 rounded-md bg-brand-900 flex items-center justify-center text-white shadow-md shadow-brand-900/20 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Phone size={14} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Call Us</p>
                    <p className="text-sm font-bold text-brand-900 leading-none mb-0.5">+91 79813 54735</p>
                    <p className="text-[10px] text-gray-500">Mon-Fri 9am-6pm</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3 group items-start">
                  <span className="w-8 h-8 rounded-md bg-brand-900 flex items-center justify-center text-white shadow-md shadow-brand-900/20 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Mail size={14} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email Us</p>
                    <p className="text-sm font-bold text-brand-900 leading-none mb-0.5">support@kolmotek.com</p>
                    <p className="text-[10px] text-gray-500">Online Support 24/7</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-3 group items-start">
                  <span className="w-8 h-8 rounded-md bg-brand-900 flex items-center justify-center text-white shadow-md shadow-brand-900/20 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <MapPin size={14} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Visit Us</p>
                    <p className="text-xs font-bold text-brand-900 leading-snug">
                      KolmoTek Instruments<br />
                      <span className="text-gray-600 font-normal text-[10px]">Visakhapatnam, AP - 530017</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Map - Centered in Remaining Space */}
            <div className="flex-grow flex items-center justify-center mt-4">
              <div className="w-full overflow-hidden rounded-md h-40 sm:h-48 lg:h-56 border border-white/50 shadow-inner relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.1456123456789!2d83.33682970725795!3d17.73815340156942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436be83479f3%3A0x6296317282467571!2sMVP%20Colony%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123"
                  className="w-full h-full"
                  title="Small Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right: Big Message Form (White) */}
          <div className="lg:col-span-2 p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Send Message</h2>
              <p className="text-gray-500 mb-4 text-xs">We usually respond within 24 hours.</p>
              <Message />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
