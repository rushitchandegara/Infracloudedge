import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const CareersPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col font-sans text-slate-900 dark:text-white relative selection:bg-fuchsia-500/30 bg-white dark:bg-[#050011] transition-colors duration-500"
    >
      
      {/* --- Global Ambient Background --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-200 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-fuchsia-200 dark:bg-fuchsia-900/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-overlay"></div>
      </div>

      <Header />

      <main className="flex-grow flex items-center justify-center pt-32 pb-12 px-6 relative z-10">
        
        {/* --- MAINTENANCE MESSAGE SECTION --- */}
        <section className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-10 md:p-16 rounded-[3rem] border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-[#0f0518]/40 backdrop-blur-xl shadow-2xl"
          >
            {/* Animated Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 rounded-3xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400">
                <svg className="w-10 h-10 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-slate-900 dark:text-white leading-tight">
              Careers Portal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:to-purple-400">
                Under Maintenance
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed font-light mb-10">
              We're currently upgrading our hiring system to provide you with a better experience. 
              Our team will be back online shortly with new opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button 
                 onClick={() => window.location.href = '/'}
                 className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:scale-105 transition-all shadow-lg"
               >
                 Return Home
               </button>
               <a 
                 href="mailto:careers@software.com"
                 className="px-8 py-3 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white rounded-full hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
               >
                 Contact HR
               </a>
            </div>
          </motion.div>
        </section>

        {/* --- ORIGINAL CONTENT (HIDDEN/COMMENTED) --- 
        
        <section className="max-w-7xl mx-auto text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 backdrop-blur-md">
              <span className="flex h-2 w-2 relative mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
              </span>
              <span className="text-sm font-medium text-fuchsia-600 dark:text-fuchsia-300 tracking-wide uppercase">Now Hiring Exceptional Talent</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] drop-shadow-sm dark:drop-shadow-2xl text-slate-900 dark:text-white">
              Join the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-fuchsia-600 dark:from-white dark:to-fuchsia-200">
                Revolution.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-100 max-w-2xl mx-auto leading-relaxed font-light">
              Be part of an award-winning team where innovation is the standard 
              and your success is our obsession.
            </p>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 1, duration: 1 }}
              className="mt-16 flex flex-col items-center gap-3"
            >
              <div className="w-[1px] h-16 bg-gradient-to-b from-fuchsia-500 to-transparent"></div>
            </motion.div>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto mb-32">
          <div className="relative rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/5 bg-slate-50/80 dark:bg-[#0f0518]/60 backdrop-blur-sm p-8 md:p-16 shadow-xl dark:shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                  More than just <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:to-purple-500">Writing Code.</span>
                </h2>
                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-100 leading-relaxed font-light">
                  <p>
                    Leverage abundant opportunities to grow with SoftWare. Over the years, we have developed a global talent pool that has brought in innovation with their new ideas.
                  </p>
                  <p>
                    Today, the same entrepreneurial spirit drives our culture of collaboration, diversity, creativity, growth, and success.
                  </p>
                  <div className="pt-4 flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full"></div>
                    <p className="font-bold text-slate-800 dark:text-white tracking-wide">
                      Explore our opportunities today.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden group border border-slate-200 dark:border-white/5">
                <div className="absolute inset-0 bg-fuchsia-500/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full border-y border-slate-200 dark:border-white/5 py-24 mb-32 relative overflow-hidden bg-white dark:bg-[#0f0518]">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/10">
              <div className="px-4 py-4">
                <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 mb-2">20+</h3>
                <p className="text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest text-sm font-bold">Years of Innovation</p>
              </div>
              <div className="px-4 py-4">
                <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 mb-2">Global</h3>
                <p className="text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest text-sm font-bold">Talent Pool</p>
              </div>
              <div className="px-4 py-4">
                <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 mb-2">100%</h3>
                <p className="text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest text-sm font-bold">Growth Focused</p>
              </div>
           </div>
        </section>

        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group p-10 md:p-14 rounded-[2rem] bg-white dark:bg-[#0f0518] border border-slate-200 dark:border-white/5 hover:border-fuchsia-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(192,38,211,0.15)] relative overflow-hidden shadow-lg dark:shadow-none">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
                <svg className="w-48 h-48 text-fuchsia-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div className="w-14 h-14 bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-fuchsia-500 group-hover:text-white transition-all duration-300 shadow-lg">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">Opportunities</h3>
              <p className="text-slate-600 dark:text-slate-100 leading-relaxed relative z-10 font-light">
                SoftWare brings to the table the most vibrant, diverse, and experienced skill set.
              </p>
            </div>
          </div>
        </section>

        <section id="apply" className="max-w-7xl mx-auto bg-gradient-to-br from-slate-100 to-white dark:from-[#0f0518] dark:to-[#050011] border border-slate-200 dark:border-white/5 rounded-[3rem] p-8 md:p-20 relative overflow-hidden shadow-xl dark:shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="flex flex-col justify-center space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-none tracking-tight">
                Ready to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:to-purple-500">
                  Accelerate?
                </span>
              </h2>
            </div>
          </div>
        </section>

        */}

      </main>

      <Footer />
      <ScrollToTop />

      {/* Tailwind config extension for spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CareersPage;