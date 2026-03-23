import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const ContactPage = () => {
  
  const offices = [
    { city: "Vadodara (HQ)", address: "SoftWare Tower, Tech Park, Gujarat, India" },
    { city: "Ahmedabad", address: "Titanium City Center, Satellite, Gujarat" },
    { city: "Pune", address: "World Trade Center, Kharadi, Maharashtra" },
    { city: "USA", address: "123 Innovation Dr, San Jose, California" },
    { city: "UK", address: "45 Tech Street, London, EC1A" },
    { city: "Australia", address: "88 Collins St, Melbourne, VIC" },
  ];

  return (
    // UPDATED: Removed inline style, added dynamic background classes
    <div 
      className="min-h-screen flex flex-col font-sans text-slate-900 dark:text-white relative selection:bg-fuchsia-500/30 bg-white dark:bg-[#050011] transition-colors duration-500"
    >
      
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-200 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-fuchsia-200 dark:bg-fuchsia-900/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-overlay"></div>
      </div>

      <Header />

      <main className="flex-grow pt-32 pb-12 px-6 relative z-10">
        
        <div className="max-w-7xl mx-auto">
          
          {/* --- HEADER SECTION --- */}
          <div className="text-center mb-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 mb-6 backdrop-blur-md"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-fuchsia-600 dark:text-fuchsia-300 uppercase tracking-wider">Get In Touch</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-sm dark:drop-shadow-2xl text-slate-900 dark:text-white"
            >
              Let’s Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:to-purple-500">Future</span> Together
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 dark:text-slate-100 max-w-2xl mx-auto font-light"
            >
              Have a project in mind? Need a DevOps audit? Or just want to say hi? We’d love to hear from you.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* --- LEFT: CONTACT INFO & OFFICES --- */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              
              {/* Direct Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white dark:bg-[#0f0518] border border-slate-200 dark:border-white/10 rounded-2xl hover:border-fuchsia-500/30 transition-colors group shadow-lg dark:shadow-none">
                  <div className="text-fuchsia-600 dark:text-fuchsia-500 mb-4 bg-fuchsia-500/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Sales & Inquiries</h3>
                  <a href="mailto:sales@software.com" className="text-slate-500 dark:text-slate-100 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors text-sm">sales@software.com</a>
                </div>

                <div className="p-6 bg-white dark:bg-[#0f0518] border border-slate-200 dark:border-white/10 rounded-2xl hover:border-purple-500/30 transition-colors group shadow-lg dark:shadow-none">
                  <div className="text-purple-600 dark:text-purple-500 mb-4 bg-purple-500/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Careers</h3>
                  <a href="mailto:careers@software.com" className="text-slate-500 dark:text-slate-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">careers@software.com</a>
                </div>
              </div>

              {/* Global Presence Grid */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-fuchsia-500 pl-4">Our Global Presence</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4">
                  {offices.map((office, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="w-[2px] h-full bg-slate-300 dark:bg-white/10 group-hover:bg-gradient-to-b group-hover:from-fuchsia-500 group-hover:to-purple-600 transition-all rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white text-lg group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-300 transition-colors">{office.city}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-100 max-w-[200px] leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-400">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>

            {/* --- RIGHT: FORM --- */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-50/80 dark:bg-[#0f0518]/60 p-8 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl dark:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-fuchsia-600/10 blur-[80px] rounded-full pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 relative z-10">Send us a message</h3>
              
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-fuchsia-600 dark:text-fuchsia-400/80 uppercase tracking-widest ml-1">First Name</label>
                    <input type="text" className="w-full bg-white dark:bg-[#050011]/50 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 transition-all shadow-sm" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-fuchsia-600 dark:text-fuchsia-400/80 uppercase tracking-widest ml-1">Last Name</label>
                    <input type="text" className="w-full bg-white dark:bg-[#050011]/50 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 transition-all shadow-sm" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-fuchsia-600 dark:text-fuchsia-400/80 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" className="w-full bg-white dark:bg-[#050011]/50 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 transition-all shadow-sm" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-fuchsia-600 dark:text-fuchsia-400/80 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows="4" className="w-full bg-white dark:bg-[#050011]/50 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 transition-all resize-none shadow-sm" placeholder="Tell us about your project..."></textarea>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:shadow-xl border border-transparent dark:border-white/10 mt-2">
                  Send Message
                </button>
                
                <p className="text-xs text-center text-slate-500 dark:text-slate-100 mt-4">
                  By clicking send, you agree to our privacy policy.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;