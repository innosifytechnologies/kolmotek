import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, X, Menu, Phone, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDropdown(null);
    closeMobileMenu();
  }, [location.pathname]);

  const closeMobileMenu = () => {
    if (visible) {
      setIsClosing(true);
      setTimeout(() => { setVisible(false); setIsClosing(false); }, 250);
    }
  };

  const productLinks = [
    { to: "/ProductGroup/LaserInstruments", label: "Laser Instruments" },
    { to: "/ProductGroup/AcousticInstruments", label: "Acoustic Instruments" },
    { to: "/ProductGroup/AerialSurveySystems", label: "Aerial Survey Systems" },
    { to: "/ProductGroup/UnderwaterSurveySystems", label: "Underwater Survey Systems" },
    { to: "/ProductGroup/RFMicrowaveInstruments", label: "RF & Microwave Instruments" },
    { to: "/ProductGroup/StrainGaugeInstruments", label: "Strain Gauge Instruments" },
  ];

  const applicationLinks = [
    { to: "/Application/FlowVisualization", label: "Flow Visualization" },
    { to: "/Application/HydrographicSurvey", label: "Hydrographic Survey" },
    { to: "/Application/AerialSurveyPage", label: "Aerial Survey" },
    { to: "/Application/StructuralHealthMonitoring", label: "Structural Health Monitoring" },
    { to: "/Application/DeepSeaExploration", label: "Deep Sea Exploration" },
  ];

  const navLinkClass = ({ isActive }) => `
    text-sm font-medium px-3 py-1.5 rounded-md transition-all duration-200
    ${isActive
      ? 'text-brand-700 bg-brand-50'
      : 'text-gray-600 hover:text-brand-600 hover:bg-gray-50'
    }
  `;

  return (
    <>
      {/* Top Bar - Clean & Minimal */}
      <div className="hidden lg:block bg-gradient-to-r from-violet-500 to-sky-400 text-white py-1.5 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-semibold">
          <p className="flex items-center gap-2 tracking-wide opacity-95">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-sm shadow-white/50"></span>
            Precision Instrumentation for Advanced Research
          </p>
          <div className="flex items-center gap-6 opacity-95">
            <a href="mailto:support@kolmotek.com" className="hover:text-sky-100 transition-colors">support@kolmotek.com</a>
            <div className="w-px h-3 bg-white/30"></div>
            <a href="tel:+917981354735" className="flex items-center gap-1.5 hover:text-sky-100 transition-colors">
              <Phone className="w-3 h-3" />
              +91-7981354735
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Clean White with Crisp Borders */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 bg-white border-b ${scrolled ? 'border-gray-200 shadow-sm h-14' : 'border-gray-100 h-16'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group flex items-center gap-3">
            <img src={assets.logo} alt="Logo" className={`transition-all duration-300 ${scrolled ? 'w-8 h-8' : 'w-9 h-9'}`} />
            <div className="leading-none">
              <span className={`font-bold text-brand-900 tracking-tight block ${scrolled ? 'text-base' : 'text-lg'}`}>KOLMOTEK</span>
              <span className="text-[9px] font-bold text-gray-500 tracking-[0.2em] block uppercase mt-0.5 group-hover:text-brand-600 transition-colors">Instruments</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 h-full">
            <NavLink to="/" className={({ isActive }) => `flex items-center h-full px-4 text-sm font-medium border-b-2 transition-all duration-200 ${isActive ? 'border-brand-600 text-brand-700' : 'border-transparent text-gray-600 hover:text-brand-600 hover:bg-gray-50/50'}`}>Home</NavLink>

            {/* Products Dropdown */}
            <div className="relative group h-full flex items-center" onMouseEnter={() => setDropdown("product")} onMouseLeave={() => setDropdown(null)}>
              <button className={`flex items-center h-full px-4 text-sm font-medium border-b-2 transition-all duration-200 gap-1 ${dropdown === "product" ? 'border-brand-600 text-brand-600 bg-brand-50/30' : 'border-transparent text-gray-600 hover:text-brand-600 hover:bg-gray-50/50'}`}>
                Products <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${dropdown === "product" ? "rotate-180 text-brand-600" : ""}`} />
              </button>
              {dropdown === "product" && (
                <div className="absolute left-0 top-full pt-0 animate-fade-in w-64">
                  <div className="bg-white rounded-b-lg shadow-xl border-x border-b border-gray-100 py-2 overflow-hidden ring-1 ring-black/5 mt-px">
                    <span className="absolute -top-2 left-0 w-full h-2 bg-transparent content-['']"></span>
                    {productLinks.map((item) => (
                      <Link key={item.to} to={item.to} onClick={() => setDropdown(null)} className="block px-4 py-2.5 text-xs font-medium text-gray-600 hover:text-brand-700 hover:bg-brand-50 transition-colors border-l-2 border-transparent hover:border-brand-500">
                        {item.label}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1 bg-gray-50/50">
                      <Link to="/ProductGroup" className="block px-4 py-2 text-xs font-bold text-brand-700 hover:underline flex items-center justify-between">
                        View Complete Catalog <ExternalLink size={10} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Applications Dropdown */}
            <div className="relative group h-full flex items-center" onMouseEnter={() => setDropdown("application")} onMouseLeave={() => setDropdown(null)}>
              <button className={`flex items-center h-full px-4 text-sm font-medium border-b-2 transition-all duration-200 gap-1 ${dropdown === "application" ? 'border-brand-600 text-brand-600 bg-brand-50/30' : 'border-transparent text-gray-600 hover:text-brand-600 hover:bg-gray-50/50'}`}>
                Applications <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${dropdown === "application" ? "rotate-180 text-brand-600" : ""}`} />
              </button>
              {dropdown === "application" && (
                <div className="absolute left-0 top-full pt-0 animate-fade-in w-64">
                  <div className="bg-white rounded-b-lg shadow-xl border-x border-b border-gray-100 py-2 overflow-hidden ring-1 ring-black/5 mt-px">
                    <span className="absolute -top-2 left-0 w-full h-2 bg-transparent content-['']"></span>
                    {applicationLinks.map((item) => (
                      <Link key={item.to} to={item.to} onClick={() => setDropdown(null)} className="block px-4 py-2.5 text-xs font-medium text-gray-600 hover:text-brand-700 hover:bg-brand-50 transition-colors border-l-2 border-transparent hover:border-brand-500">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/about" className={({ isActive }) => `flex items-center h-full px-4 text-sm font-medium border-b-2 transition-all duration-200 ${isActive ? 'border-brand-600 text-brand-700' : 'border-transparent text-gray-600 hover:text-brand-600 hover:bg-gray-50/50'}`}>About</NavLink>

            {/* CTA Button */}
            <div className="pl-4 ml-2 border-l border-gray-100 h-8 flex items-center">
              <NavLink to="/contact" className="btn-primary">
                Get in Touch
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setVisible(true)} className="lg:hidden p-2 text-gray-500 hover:text-brand-600 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {visible && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50 lg:hidden" onClick={closeMobileMenu}>
          <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <span className="font-bold text-brand-900">Menu</span>
              <button onClick={closeMobileMenu}><X className="w-5 h-5 text-gray-500" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              <NavLink to="/" onClick={closeMobileMenu} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-700 rounded-lg">Home</NavLink>
              <NavLink to="/about" onClick={closeMobileMenu} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-700 rounded-lg">About Us</NavLink>
              <div className="py-2"><hr className="border-gray-100" /></div>
              <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Products</p>
              {productLinks.slice(0, 5).map(l => (
                <NavLink key={l.to} to={l.to} onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-gray-600 hover:text-brand-600">{l.label}</NavLink>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <NavLink to="/contact" onClick={closeMobileMenu} className="btn-primary w-full justify-center">Get in Touch</NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
