import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  return (
    <section 
      className="relative py-24 overflow-hidden flex items-center bg-white dark:bg-[#050011] transition-colors duration-500"
    >
      
      {/* --- Ambient Background Effects --- */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200 dark:bg-purple-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-200 dark:bg-fuchsia-900/10 blur-[100px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* Left Side: Animated Wireframe Globe (Refined Visibility) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start relative perspective-1000">
          <div className="relative w-[320px] h-[320px] md:w-[550px] md:h-[550px]">
            
            {/* Rotating Globe Container */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              /* Updated border to slate-300 for high visibility in light mode */
              className="w-full h-full rounded-full border border-slate-900 dark:border-white/5 relative flex items-center justify-center shadow-lg dark:shadow-[0_0_60px_rgba(168,85,247,0.15)] backdrop-blur-[1px]"
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              {/* Vertical Rings - Increased visibility in Light Mode */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={`v-${i}`} 
                  className="absolute inset-0 rounded-full border border-slate-900 dark:border-white/10"
                  style={{ transform: `rotateY(${i * 30}deg)` }} 
                />
              ))}
              
              {/* Horizontal Rings - Increased visibility in Light Mode */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={`h-${i}`} 
                  className="absolute inset-0 rounded-full border border-slate-900 dark:border-white/10"
                  style={{ transform: `rotateX(${i * 30}deg)` }} 
                />
              ))}

              {/* Decorative Active Nodes */}
              <motion.div 
                className="absolute top-1/4 left-1/4 w-3.5 h-3.5 bg-fuchsia-600 dark:bg-fuchsia-500 rounded-full shadow-[0_0_20px_rgba(192,38,211,0.6)] z-20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-purple-600 dark:bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] z-20 opacity-90"></div>
              
              {/* Central Core Glow - Adjusted for Light Mode depth */}
              <div className="absolute w-40 h-40 bg-purple-100 dark:bg-purple-500/20 blur-3xl rounded-full"></div>
            </motion.div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 space-y-8 text-left">
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-500/10 border border-fuchsia-200 dark:border-fuchsia-500/20 mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-600 dark:bg-fuchsia-500"></span>
              </span>
              <span className="text-xs font-semibold text-fuchsia-600 dark:text-fuchsia-300 tracking-wider uppercase">We are hiring</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tighter drop-shadow-sm dark:drop-shadow-xl">
              Architect the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:via-pink-400 dark:to-purple-400">
                Future of Cloud
              </span>
            </h2>

            <h3 className="text-xl md:text-2xl text-slate-600 dark:text-white font-light leading-relaxed mb-6 border-l-2 border-fuchsia-500 pl-6">
              Tired of legacy ops and fire-fighting? <br className="hidden lg:block"/>
              <span className="text-slate-900 dark:text-white font-medium">
                 Build Systems That Scale.
              </span>
            </h3>

            <p className="text-lg text-slate-600 dark:text-white leading-relaxed mb-10 max-w-lg font-light">
              Join a team where <strong className="text-slate-900 dark:text-white font-medium">Infrastructure as Code</strong> is the standard. 
              We master Kubernetes, Terraform, and AI-driven Ops.
            </p>

            <button className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_40px_rgba(192,38,211,0.4)] hover:scale-[1.02] cursor-pointer shadow-md">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-800 to-slate-900 dark:from-gray-50 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3">
                <span className="tracking-wide">View Open Positions</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300 text-fuchsia-400 dark:text-purple-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Careers;