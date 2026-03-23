import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  // Helper for star background
  const generateStars = (count) => {
    let stars = "";
    for (let i = 0; i < count; i++) {
      stars += `${Math.floor(Math.random() * 2000)}px ${Math.floor(
        Math.random() * 2000
      )}px #FFF${i === count - 1 ? "" : ", "}`;
    }
    return stars;
  };

  const starLayers = useMemo(
    () => [
      { id: "stars", size: "1px", duration: 50, shadow: generateStars(700) },
      { id: "stars2", size: "2px", duration: 100, shadow: generateStars(200) },
      { id: "stars3", size: "3px", duration: 150, shadow: generateStars(100) },
    ],
    []
  );

  // Updated Orbital Icons with Blinking and Random Offsets
  const orbitalTechIcons = useMemo(() => [
    { icon: "💻", orbit: 180, duration: 15, size: "text-2xl", delay: 0 },
    { icon: "📱", orbit: 220, duration: 25, size: "text-xl", delay: 1 },
    { icon: "🔐", orbit: 260, duration: 20, size: "text-2xl", delay: 0.5 },
    { icon: "☁️", orbit: 300, duration: 40, size: "text-4xl", delay: 2 },
    { icon: "🗄️", orbit: 340, duration: 30, size: "text-3xl", delay: 1.5 },
    { icon: "🤖", orbit: 380, duration: 45, size: "text-5xl", delay: 0.2 },
    { icon: "⚡", orbit: 420, duration: 35, size: "text-3xl", delay: 3 },
    { icon: "🚀", orbit: 460, duration: 55, size: "text-4xl", delay: 1.2 },
  ], []);

  const slides = [
    {
      id: 1,
      image: "/11.png",
      title: "Building the Future of Cloud Computing.",
      subtitle: "We engineer scalable, secure, and cost-efficient cloud ecosystems tailored for enterprise growth.",
      buttonText: "Explore Expertise",
    },
    {
      id: 2,
      image: "/22.png",
      title: "Seamless Migration & Modernization.",
      subtitle: "Transform legacy infrastructure into agile cloud-native environments with zero disruption.",
      buttonText: "Start Journey",
    },
    {
      id: 3,
      image: "/33.png",
      title: "Accelerate Delivery with DevOps.",
      subtitle: "Streamline your software lifecycle. Automated CI/CD pipelines and Infrastructure as Code.",
      buttonText: "Optimize Now",
    },
    {
      id: 4,
      image: "/44.png",
      title: "Reliability Engineering at Scale.",
      subtitle: "Implement SRE best practices to ensure 99.99% uptime and build self-healing systems.",
      buttonText: "Ensure Stability",
    },
  ];

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Touch logic
  const onTouchStart = (e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove = (e) => { setTouchEnd(e.targetTouches[0].clientX); };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, [handleNext]);

  // Motion Variants for unique "Slide & Scale" transition
  const contentVariants = {
    initial: { opacity: 0, x: -100, rotateY: 45 },
    animate: { opacity: 1, x: 0, rotateY: 0 },
    exit: { opacity: 0, x: 100, rotateY: -45 }
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.5, x: 200 },
    animate: { opacity: 1, scale: 1.2, x: 0 },
    exit: { opacity: 0, scale: 1.5, x: -200 }
  };

  // Navigation Handlers
  const handleServiceNavigation = () => {
    navigate('/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutNavigation = () => {
    navigate('/about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div 
        className="relative mt-[-60px] min-h-[100dvh] bg-[#020617] overflow-hidden flex flex-col justify-center"
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
      >
        {/* Star Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {starLayers.map((layer) => (
            <div key={layer.id} className="absolute inset-0"
              style={{
                width: layer.size, height: layer.size, background: "transparent",
                boxShadow: layer.shadow, animation: `animateStars ${layer.duration}s linear infinite`,
              }}
            />
          ))}
        </div>

        {/* Orbital Blinking Icons */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {orbitalTechIcons.map((item, idx) => (
              <motion.div
                key={`orbital-${idx}`}
                className="absolute"
                animate={{
                  rotate: [0, 360],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  rotate: { duration: item.duration, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay }
                }}
                style={{ width: item.orbit * 2, height: item.orbit * 2 }}
              >
                <span className={`absolute top-0 left-1/2 -translate-x-1/2 ${item.size} filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]`}>
                  {item.icon}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 z-10 pt-15 pb-25 md:pb-0">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            
            {/* Left: Text Content - Center on mobile, left-aligned on desktop */}
            <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  variants={contentVariants}
                  initial="initial" animate="animate" exit="exit"
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="max-w-xl"
                >
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-[1.1] mb-4">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-8 lg:px-0">
                    {slides[currentSlide].subtitle}
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <button 
                      onClick={handleServiceNavigation}
                      className="px-6 py-3 bg-fuchsia-600 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-fuchsia-700 transition-colors shadow-lg shadow-fuchsia-500/20"
                    >
                      {slides[currentSlide].buttonText}
                    </button>
                    <button 
                      onClick={handleAboutNavigation}
                      className="px-6 py-3 border border-slate-700 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/5 transition-colors"
                    >
                      Contact
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Image Content - Always centered */}
            <div className="order-1 lg:order-2 relative flex justify-center items-center h-[350px] md:h-[800px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${currentSlide}`}
                  variants={imageVariants}
                  initial="initial" animate="animate" exit="exit"
                  transition={{ type: "spring", stiffness: 80, damping: 15 }}
                  className="relative z-10 w-full flex justify-center"
                >
                  <img
                    src={slides[currentSlide].image}
                    alt="Hero Illustration"
                    className="w-[90%] md:w-[100%] max-w-none h-auto drop-shadow-[0_0_50px_rgba(139,92,246,0.3)]"
                  />
                  {/* Blinking Core Light */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 blur-[100px] rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* BOTTOM CENTER NAVIGATION */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6">
          {/* Arrows */}
          <div className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-md p-2 rounded-full border border-white/10 shadow-2xl">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 text-white hover:bg-fuchsia-600 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-2 px-2">
              {slides.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-6 bg-fuchsia-500' : 'w-1.5 bg-slate-600'}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 text-white hover:bg-fuchsia-600 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes animateStars {
          from { transform: translateY(0); }
          to { transform: translateY(-2000px); }
        }
      `}</style>
    </>
  );
};

export default Hero;