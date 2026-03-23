import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Cloud Consulting",
    desc: "Strategic roadmaps for digital transformation.",
    details: "We assess your infrastructure readiness and design secure, scalable cloud architectures tailored to your business goals on AWS, Azure, or GCP.",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Migration & Integration",
    desc: "Seamless transition with zero disruption.",
    details: "Securely migrate legacy systems or integrate complex environments with proven strategies that ensure data integrity and business continuity.",
    bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Cloud App Development",
    desc: "Building future-ready cloud-native apps.",
    details: "Develop high-performance applications using microservices, serverless computing, and containers for unmatched agility and scalability.",
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 4,
    title: "DevOps Engineering",
    desc: "Accelerating delivery with CI/CD automation.",
    details: "Streamline your software lifecycle with automated pipelines, Infrastructure as Code (IaC), and continuous testing for faster, reliable releases.",
    bgImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "SRE & Reliability",
    desc: "Engineering for maximum uptime & stability.",
    details: "Implement Site Reliability Engineering practices to optimize system stability, manage error budgets, and ensure your platform handles scale effortlessly.",
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 6,
    title: "24/7 Cloud Support",
    desc: "Proactive monitoring and maintenance.",
    details: "Comprehensive round-the-clock management of your cloud environment, including security patching, performance tuning, and incident response.",
    bgImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

const Excellence = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [position, setPosition] = useState(0); 
  const [activeId, setActiveId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeId === null) {
        handleRightClick();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [position, activeId]);

  const STRIDE = 370; 
  
  const handleLeftClick = () => {
    if (position > 0) {
      setPosition((prev) => prev - 1);
    }
  };

  const handleRightClick = () => {
    if (position < services.length - 3) {
      setPosition((prev) => prev + 1);
    } else {
      setPosition(0); 
    }
  };

  const handleInteraction = (id, type) => {
    if (type === 'enter') setActiveId(id);
    else if (type === 'leave') setActiveId(null);
    else if (type === 'click') setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section className="relative py-24 overflow-hidden bg-slate-50 dark:bg-[#050011] transition-colors duration-500">
      
      {/* Background Effects Adaptive to Section */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-200 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-8 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-500/10 border border-fuchsia-200 dark:border-fuchsia-500/20 mb-6 backdrop-blur-md">
             <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-600 dark:bg-fuchsia-500 animate-pulse"></span>
             <span className="text-xs font-semibold text-fuchsia-700 dark:text-fuchsia-300 uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            Where Experience Meets <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:via-pink-400 dark:to-purple-400">Excellence</span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
            Delivering Strategic Cloud Solutions, Driving Real Impact, and Achieving Remarkable Results for global enterprises.
          </p>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={handleLeftClick}
            className="w-14 h-14 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-white hover:bg-fuchsia-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleRightClick}
            className="w-14 h-14 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-white hover:bg-fuchsia-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

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
          {services.map((service) => {
            const isActive = activeId === service.id;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => handleInteraction(service.id, 'enter')}
                onMouseLeave={() => handleInteraction(service.id, 'leave')}
                onClick={() => handleInteraction(service.id, 'click')}
                className={`
                  min-w-[320px] md:min-w-[350px] h-[450px] rounded-[2rem] relative group overflow-hidden flex flex-col justify-end transition-all duration-500 cursor-pointer shadow-xl
                  bg-[#0f0518] border
                  ${isActive 
                    ? 'border-fuchsia-500/50 scale-[1.02]' 
                    : 'border-white/10'
                  }
                `}
              >
                {/* Background Image Logic for Dark Card */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.bgImage} 
                    alt={service.title} 
                    className={`
                      w-full h-full object-cover transition-all duration-700 mix-blend-luminosity
                      ${isActive ? 'opacity-40 scale-110' : 'opacity-20 grayscale'}
                    `}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-[#0f0518]/80 to-transparent"></div>
                </div>

                {/* Icon Box */}
                <div className="absolute top-8 left-8 z-20">
                   <div className={`
                      w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-lg
                      ${isActive
                        ? 'bg-fuchsia-600 border-fuchsia-500 text-white'
                        : 'bg-white/5 border-white/10 text-white'
                      }
                   `}>
                      {service.icon}
                   </div>
                </div>

                {/* Content Box */}
                <div className={`relative z-20 p-8 transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-4'}`}>
                  <h3 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-fuchsia-300' : 'text-white'}`}>
                    {service.title}
                  </h3>

                  <div className={`transition-all duration-300 ${isActive ? 'max-h-0 opacity-0' : 'max-h-[100px] opacity-100'}`}>
                     <p className="text-white/70 text-lg font-medium">
                      {service.desc}
                    </p>
                  </div>

                  <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-base text-white/80 leading-relaxed mb-6 mt-2 font-normal">
                      {service.details}
                    </p>
                    <button 
                      onClick={() => navigate('/services')}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white text-sm font-bold rounded-xl shadow-lg border-none hover:scale-105 transition-transform"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Excellence;