import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const industries = [
  {
    id: 1,
    title: "AdTech",
    description: "Scale high-frequency ad exchanges with ultra-low latency cloud infrastructure and real-time data processing pipelines.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    accentColor: "group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400",
    bgHover: "hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/20",
    borderHover: "hover:border-fuchsia-300 dark:hover:border-fuchsia-500/50",
    glowColor: "group-hover:shadow-[0_0_60px_rgba(217,70,239,0.2)]",
    buttonBg: "bg-fuchsia-600 hover:bg-fuchsia-500",
    iconBg: "group-hover:bg-fuchsia-100 dark:group-hover:bg-fuchsia-500/20 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-300"
  },
  {
    id: 2,
    title: "Digital Manufacturing",
    description: "Drive Industry 4.0 with IoT data lakes, edge computing, and predictive maintenance models hosted on secure clouds.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    accentColor: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
    bgHover: "hover:bg-pink-50 dark:hover:bg-pink-900/20",
    borderHover: "hover:border-pink-300 dark:hover:border-pink-500/50",
    glowColor: "group-hover:shadow-[0_0_60px_rgba(244,114,182,0.2)]",
    buttonBg: "bg-pink-600 hover:bg-pink-500",
    iconBg: "group-hover:bg-pink-100 dark:group-hover:bg-pink-500/20 group-hover:text-pink-600 dark:group-hover:text-pink-300"
  },
  {
    id: 3,
    title: "FinTech",
    description: "Architect secure, PCI-DSS compliant cloud environments for high-frequency trading and automated fraud detection.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accentColor: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
    bgHover: "hover:bg-cyan-50 dark:hover:bg-cyan-900/20",
    borderHover: "hover:border-cyan-300 dark:hover:border-cyan-500/50",
    glowColor: "group-hover:shadow-[0_0_60px_rgba(34,211,238,0.2)]",
    buttonBg: "bg-cyan-600 hover:bg-cyan-500",
    iconBg: "group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/20 group-hover:text-cyan-600 dark:group-hover:text-cyan-300"
  },
  {
    id: 4,
    title: "HealthTech",
    description: "Enable interoperability with HIPAA-compliant cloud platforms, securing patient data while accelerating medical research.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    accentColor: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
    bgHover: "hover:bg-indigo-50 dark:hover:bg-indigo-900/20",
    borderHover: "hover:border-indigo-300 dark:hover:border-indigo-500/50",
    glowColor: "group-hover:shadow-[0_0_60px_rgba(99,102,241,0.2)]",
    buttonBg: "bg-indigo-600 hover:bg-indigo-500",
    iconBg: "group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
  },
];

const Industries = () => {
  const navigate = useNavigate();

  return (
    <section 
      className="relative py-24 text-slate-900 dark:text-white overflow-hidden selection:bg-fuchsia-500/30 bg-white dark:bg-[#050011] transition-colors duration-500"
    >
      
      {/* --- Ambient Background Effects --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-purple-200 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[0%] right-[-10%] w-[400px] h-[400px] bg-fuchsia-200 dark:bg-fuchsia-900/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-500/10 border border-fuchsia-200 dark:border-fuchsia-500/20 mb-6 backdrop-blur-md">
               <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-600 dark:bg-fuchsia-500 animate-pulse"></span>
               <span className="text-xs font-semibold text-fuchsia-600 dark:text-fuchsia-300 uppercase tracking-wider">Sectors We Serve</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight drop-shadow-sm dark:drop-shadow-xl">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:via-pink-400 dark:to-purple-400">Industries</span>,<br /> 
              One Cloud at a Time.
            </h2>
          </div>
          <div className="max-w-lg pt-4 md:pt-16">
            <p className="text-xl text-slate-600 dark:text-white leading-relaxed font-light">
              We bring specialized DevOps and Cloud expertise to highly regulated and high-performance sectors.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item) => (
            <motion.div
              key={item.id}
              className={`
                group relative h-[420px] p-8 rounded-[2rem] 
                bg-slate-50 dark:bg-[#0f0518] 
                border border-slate-200 dark:border-white/5 
                transition-all duration-500 ease-out cursor-pointer overflow-hidden shadow-lg dark:shadow-none
                ${item.bgHover} ${item.borderHover} ${item.glowColor}
              `}
              whileHover={{ y: -5 }}
            >
              
              {/* Icon (Moves on Hover) */}
              <div className={`absolute top-8 right-8 p-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-500 dark:text-white transition-all duration-300 z-10 shadow-sm ${item.iconBg}`}>
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col h-full justify-between pt-16 relative z-10">
                
                {/* Top Part: Title */}
                <div>
                  <h3 className={`text-2xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300 ${item.accentColor}`}>
                    {item.title}
                  </h3>
                </div>

                {/* Bottom Part: Description & Button */}
                <div className="space-y-6">
                  <p className="text-slate-600 dark:text-white group-hover:text-slate-800 dark:group-hover:text-slate-200 leading-relaxed transition-colors duration-300 font-light">
                    {item.description}
                  </p>

                  {/* Button: Visible ONLY on Hover */}
                  <div className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    <button 
                      onClick={() => navigate('/case-study')}
                      className={`px-6 py-2.5 ${item.buttonBg} text-white font-bold rounded-full text-sm shadow-lg transition-all shadow-black/20`}
                    >
                      Explore Case Study
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;