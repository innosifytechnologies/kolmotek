/**
 * Footer Component
 * @authors R.CHARAN & S ANANDH
 */

import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Youtube, Linkedin, MoveRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-16">

          {/* Brand & Purpose */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5 sm:space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/50">
                <img src={assets.logo} className="w-6" alt="KolmoTek" />
              </div>
              <div>
                <span className="block text-xl font-bold tracking-tight text-white">KolmoTek</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-brand-300">Instruments</span>
              </div>
            </Link>
            <p className="text-brand-100/80 leading-relaxed text-sm max-w-sm mx-auto sm:mx-0">
              Empowering research and industry with high-precision optical and acoustic instrumentation. We deliver accuracy where it matters most.
            </p>

            {/* Socials */}
            <div className="flex gap-4 pt-2 justify-center sm:justify-start">
              {[
                { icon: Youtube, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" } // Using Facebook icon as placeholder for X/Twitter if needed or generic
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="w-10 h-10 rounded-full bg-brand-900 border border-white flex items-center justify-center text-brand-300 hover:bg-sky-500 hover:text-white transition-all duration-300">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="sm:col-span-1 lg:col-span-2 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 sm:mb-6">Explore</h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Products', to: '/ProductGroup' },
                { label: 'Applications', to: '/application' },
                { label: 'Contact', to: '/contact' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-brand-100/70 hover:text-sky-400 text-sm transition-colors flex items-center justify-center sm:justify-start gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="sm:col-span-1 lg:col-span-3 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 sm:mb-6">Contact</h4>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex gap-3 justify-center sm:justify-start">
                <MapPin className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span className="text-sm text-brand-100/80 leading-relaxed text-left">
                  6th Floor, Gayathri Towers,<br />
                  Pedda Waltair, Visakhapatnam,<br />
                  Andhra Pradesh - 530017
                </span>
              </li>
              <li>
                <a href="tel:+917981354735" className="flex gap-3 items-center justify-center sm:justify-start group">
                  <Phone className="w-5 h-5 text-sky-500 group-hover:text-sky-400 transition-colors" />
                  <span className="text-sm text-brand-100/80 group-hover:text-white transition-colors">+91-7981354735</span>
                </a>
              </li>
              <li>
                <a href="mailto:support@kolmotek.com" className="flex gap-3 items-center justify-center sm:justify-start group">
                  <Mail className="w-5 h-5 text-sky-500 group-hover:text-sky-400 transition-colors" />
                  <span className="text-sm text-brand-100/80 group-hover:text-white transition-colors">support@kolmotek.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="bg-gradient-to-r from-violet-200 to-sky-200 rounded-2xl p-5 sm:p-6 border border-gray-200">
              <h4 className="text-brand-900 font-bold mb-2">Stay Updated</h4>
              <p className="text-xs text-black mb-4">New products and technology updates directly to your inbox.</p>
              <div className="space-y-3">
                <input type="email" placeholder="Enter your email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-colors" />
                <button className="w-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Subscribe <MoveRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-800/50 pt-6 sm:pt-8 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center">
          <p className="text-xs text-brand-300 font-medium text-center sm:text-left">
            &copy; 2025 KolmoTek Instruments Pvt. Ltd. All rights reserved. Developed By{' '}
            <a href="https://innosify.com" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline hover:text-sky-300 transition-colors">
              Innosify
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-brand-300 font-medium">
            <Link to="/PrivacyPolicy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/TermsAndConditions" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/CodeOfConduct" className="hover:text-white transition-colors">Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
