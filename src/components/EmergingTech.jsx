import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const techItems = [
  {
    id: 1,
    title: "Cloud FinOps",
    desc: "Maximize business value by merging finance, technology, and business to optimize cloud unit economics.",
    bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "DevSecOps",
    desc: "Integrate security into your CI/CD pipeline to detect threats early without slowing down deployment.",
    bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Cost Optimization",
    desc: "Reduce waste and right-size resources with advanced monitoring and automated scaling strategies.",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Serverless Computing",
    desc: "Eliminate infrastructure management and pay only for what you use with event-driven architectures.",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Data Engineering",
    desc: "Build robust data lakes and pipelines to turn raw cloud data into actionable business intelligence.",
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
];

const EmergingTech = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [position, setPosition] = useState(0); 
  const navigate = useNavigate();
  
  useEffect(() => {
    if(carousel.current){
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleRightClick();
    }, 5000);
    return () => clearInterval(interval);
  }, [position]);

  const STRIDE = 382; 
  
  const handleLeftClick = () => {
    if (position > 0) {
      setPosition((prev) => prev - 1);
    }
  };

  const handleRightClick = () => {
    if (position < techItems.length - 2) {
      setPosition((prev) => prev + 1);
    } else {
      setPosition(0); 
    }
  };

  return (
    <section 
      className="relative py-32 overflow-hidden bg-white dark:bg-[#050011] transition-colors duration-500"
    >
      
      {/* --- Ambient Background Effects (Adaptive to Section) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-200 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-8 relative z-10">
        
        {/* Title & Subtitle */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-500/10 border border-fuchsia-200 dark:border-fuchsia-500/20 mb-6 backdrop-blur-md">
             <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-600 dark:bg-fuchsia-500 animate-pulse"></span>
             <span className="text-xs font-semibold text-fuchsia-600 dark:text-fuchsia-300 uppercase tracking-wider">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:to-purple-400">Capabilities</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-white/80 font-light leading-relaxed">
            Pioneering the future with specialized cloud disciplines and intelligent, scalable solutions.
          </p>
        </div>

        {/* Navigation Buttons (Adaptive) */}
        <div className="flex gap-4">
          <button 
            onClick={handleLeftClick}
            className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-fuchsia-600 text-slate-500 dark:text-white hover:text-white transition-all duration-300 flex items-center justify-center group cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleRightClick}
            className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-fuchsia-600 text-slate-500 dark:text-white hover:text-white transition-all duration-300 flex items-center justify-center group cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Container - LOCKED TO DARK THEME */}
      <motion.div 
        ref={carousel} 
        className="cursor-grab overflow-hidden active:cursor-grabbing pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]" 
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          animate={{ x: -(position * STRIDE) }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex gap-8 pb-12"
        >
          {techItems.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => navigate('/solutions')}
              /* Locked bg to #0f0518 regardless of mode */
              className="min-w-[320px] md:min-w-[350px] h-[480px] rounded-[2rem] bg-[#0f0518] border border-white/10 relative group overflow-hidden flex flex-col transition-all duration-500 hover:border-fuchsia-500/40 hover:shadow-[0_0_60px_rgba(192,38,211,0.2)] cursor-pointer"
            >
              
              {/* Background Image (Darkened) */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.bgImage} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-[#0f0518]/90 to-transparent"></div>
              </div>

              {/* Glass Arrow Button */}
              <div className="absolute top-6 right-6 z-20">
                 <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-fuchsia-600 transition-all duration-300 transform group-hover:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5M19 5H9M19 5v10" />
                    </svg>
                 </div>
              </div>

              {/* Card Content (Locked to White Text) */}
              <div className="relative z-10 flex flex-col h-full p-8">
                
                <div className="mt-4 mb-auto">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-fuchsia-500/20 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-3xl font-bold text-white mb-3 leading-tight group-hover:text-fuchsia-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="h-1 w-12 bg-white/20 rounded-full mb-4 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-fuchsia-500 group-hover:to-purple-500 transition-all duration-500"></div>
                  <p className="text-white/70 text-lg leading-relaxed group-hover:text-white transition-colors font-light">
                    {item.desc}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EmergingTech;