import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Revolutionize = () => {
  // --- Typewriter Logic (Unchanged) ---
  const words = ["Modernize", "Optimize", "Scale", "Secure"];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);
  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(1500);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  // --- Stats Data ---
  const stats = [
    { number: "500+", label: "Cloud Migrations Executed" },
    { number: "99.99%", label: "Uptime Reliability Delivered" },
    { number: "30%", label: "Avg. Cloud Cost Reduction" },
    { number: "50+", label: "Certified Cloud Architects" },
  ];

  return (
    <section 
      className="relative py-24 px-6 overflow-hidden selection:bg-fuchsia-500/30 bg-white dark:bg-[#050011] transition-colors duration-500"
    >
      
      {/* --- Ambient Background Effects --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-200 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-200 dark:bg-fuchsia-900/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Gradient Border Container --- */}
        {/* Updated Gradient to Fuchsia/Purple */}
        <div className="p-[1px] rounded-[2.5rem] bg-gradient-to-r from-fuchsia-600 via-purple-600 to-fuchsia-600 shadow-xl dark:shadow-[0_0_40px_rgba(192,38,211,0.15)]">
          
          {/* Inner Card Background (Adaptive: White / Deep Dark Violet) */}
          <div className="bg-white/95 dark:bg-[#050011]/95 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 h-full w-full overflow-hidden relative transition-colors duration-500">
            
            {/* Header Section */}
            <div className="text-center mb-20 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-500/10 border border-fuchsia-200 dark:border-fuchsia-500/20 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-600 dark:bg-fuchsia-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-fuchsia-600 dark:text-fuchsia-300 uppercase tracking-wider">Our Mission</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight drop-shadow-sm dark:drop-shadow-xl">
                Together We{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:via-pink-400 dark:to-purple-400">
                  {text}
                </span>
                <span className="animate-pulse text-fuchsia-500 dark:text-fuchsia-400 font-light ml-1">|</span>
              </h2>
              
              <p className="text-xl text-slate-1000 dark:text-white max-w-3xl mx-auto font-light leading-relaxed">
                Unlocking the full potential of the cloud with precision engineering, strategic innovation, and a relentless focus on performance.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Side: Text Content */}
              <div className="space-y-8 text-lg text-justify">
                <p className="text-slate-1000 dark:text-white leading-relaxed font-light">
                  As a premier <strong className="text-slate-900 dark:text-white font-medium">Cloud & DevOps consultancy</strong>, we empower enterprises to break free from legacy constraints. We don't just lift and shift; we re-architect your digital foundation using AWS, Azure, and Google Cloud to ensure agility, scalability, and security are built into the core.
                </p>
                <p className="text-slate-1000 dark:text-white leading-relaxed font-light">
                  Our approach combines <strong className="text-slate-900 dark:text-white font-medium">Site Reliability Engineering (SRE)</strong> rigor with FinOps efficiency. From automating complex CI/CD pipelines to optimizing cloud spend, our certified experts steer your journey with precision.
                </p>
                
                <div className="flex items-center gap-4 pt-4">
                  {/* Updated Separator Line */}
                  <div className="h-[2px] w-12 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full"></div>
                  <p className="font-bold text-slate-900 dark:text-white tracking-wide">
                    Your infrastructure shouldn't just run—it should fly.
                  </p>
                </div>
              </div>

              {/* Right Side: Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="group p-6 rounded-2xl bg-slate-50 dark:bg-[#0f0518] border border-slate-200 dark:border-white/5 hover:border-fuchsia-500/40 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(192,38,211,0.15)] shadow-md dark:shadow-none"
                  >
                    {/* Gradient Number Text */}
                    <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-500 dark:from-white dark:to-slate-500 mb-2 group-hover:from-fuchsia-600 dark:group-hover:from-fuchsia-400 group-hover:to-purple-600 dark:group-hover:to-purple-400 transition-all duration-500">
                      {stat.number}
                    </h3>
                    <p className="text-sm font-medium text-slate-1000 dark:text-white uppercase tracking-wider group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Revolutionize;