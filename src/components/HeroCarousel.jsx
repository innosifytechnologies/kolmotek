import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";
import { slides } from "../assets/assets";

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  const onTouchStart = (e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove = (e) => { setTouchEnd(e.targetTouches[0].clientX); };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    else if (distance < -minSwipeDistance) prevSlide();
  };

  return (
    <div className="relative w-full bg-gray-900">
      <div
        className="w-full overflow-hidden relative bg-gray-900"
        style={{ height: "clamp(500px, 80vh, 800px)" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="sync">
          {slides.map((slide, index) =>
            index === current ? (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Link to={slide.link} className="block w-full h-full relative">
                  {/* Image with zoom effect */}
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 6, ease: "easeOut" }}
                  />

                  {/* Lighter Gradient Overlay for Professional Clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-gray-900/10" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 sm:px-8">
                    {/* Category Tag - Ultra Thin & Left Aligned */}
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="absolute top-6 left-6 sm:top-8 sm:left-8 inline-flex items-center gap-1.5 px-3 py-0.5 bg-white/10 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-medium border border-white/10 shadow-sm hover:bg-white/20 transition-colors cursor-default tracking-wide text-white/80"
                    >
                      <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span>
                      High-Precision Instrumentation
                    </motion.span>

                    {/* Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-5xl drop-shadow-lg text-white"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.5 }}
                      className="mt-4 sm:mt-6 text-base xs:text-lg sm:text-xl md:text-2xl font-normal max-w-3xl text-white/90 drop-shadow-md"
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="mt-6 sm:mt-10 btn-primary bg-white text-persian-900 hover:bg-gray-50 border border-white text-sm sm:text-base shadow-lg"
                    >
                      Explore Products <ChevronRight size={18} />
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); e.preventDefault(); prevSlide(); }}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all duration-300 border border-white/20 group shadow-lg z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); e.preventDefault(); nextSlide(); }}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all duration-300 border border-white/20 group shadow-lg z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Bottom Controls */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={(e) => { e.stopPropagation(); e.preventDefault(); setCurrent(index); }}
                className={`transition-all duration-300 rounded-full shadow-sm ${index === current
                  ? 'w-8 h-2 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Pause/Play Button */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); setIsPaused(!isPaused); }}
            className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all shadow-sm"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? <Play className="w-3 h-3 text-white ml-0.5" /> : <Pause className="w-3 h-3 text-white" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
