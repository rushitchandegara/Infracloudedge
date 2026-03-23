import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const AboutPage = () => {
  
  // Leadership Data
  const leaders = [
    { name: "Rushit Chandegara", role: "Founder & CTO" },
    { name: "Dharmesh Dhokiya", role: "CFO & CMO" },
    { name: "Isha Dhokiya", role: "CMO" },
  ];

  return (
    <div 
      className="min-h-screen flex flex-col font-sans text-slate-900 dark:text-white relative selection:bg-fuchsia-500/30 bg-white dark:bg-[#050011] transition-colors duration-500"
    >
      
      {/* --- Ambient Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-200 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-fuchsia-200 dark:bg-fuchsia-900/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-overlay"></div>
      </div>

      <Header />

      <main className="flex-grow pt-32 pb-12 px-6 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 mb-6 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-fuchsia-600 dark:text-fuchsia-300 uppercase tracking-wider">About Us</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-tight drop-shadow-sm dark:drop-shadow-xl text-slate-900 dark:text-white">
              Continually Enhancing Value for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:via-pink-400 dark:to-purple-400">
                Our Global Customers
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-100 max-w-3xl mx-auto leading-relaxed font-light">
              25+ Years of Trust, Transparency, and Technology.
            </p>
          </motion.div>
        </section>


        {/* --- OUR STORY SECTION --- */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-8 text-lg text-slate-600 dark:text-slate-100 leading-relaxed text-justify">
<div>
<h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Story</h2>
<div className="h-1 w-20 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full"></div>
</div>

<p className="font-light">
Driven by the mission to bridge the gap between complex infrastructure and seamless digital experiences, <strong className="text-slate-900 dark:text-white font-medium">InfraCloudEdge</strong> was established by <strong className="text-slate-900 dark:text-white font-medium">Rushit Chandegara</strong> (Founder & CTO), <strong className="text-slate-900 dark:text-white font-medium">Dharmesh Dhokiya</strong> (CFO & CMO), and <strong className="text-slate-900 dark:text-white font-medium">Isha Dhokiya</strong> (CMO). We began with a singular focus: helping global enterprises navigate the evolving cloud landscape through high-impact <strong className="text-slate-900 dark:text-white font-medium">Cloud and DevOps</strong> solutions.
</p>

<p className="font-light">
Our expertise spans the entire cloud lifecycle—from <strong className="text-slate-900 dark:text-white font-medium">Cloud Migration, FinOps, and Cost Optimization</strong> to advanced <strong className="text-slate-900 dark:text-white font-medium">DevSecOps, CI/CD Automation, and Site Reliability Engineering (SRE)</strong>. By leveraging containerization with Kubernetes and serverless deployments, we turn technical complexity into operational clarity, ensuring your business stays agile and secure.
</p>

<p className="font-light">
Based in India with a global mindset, we help organizations reimagine their potential through a digital-first lens. At InfraCloudEdge, our guiding principle is <strong className="text-fuchsia-600 dark:text-fuchsia-400 font-medium">“WE CARE”</strong>—we are committed to building resilient foundations and delivering the long-term value our clients need to achieve their most ambitious goals.
</p>
</div>

            {/* Image Side */}
            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0f0518] group shadow-xl dark:shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                alt="Corporate Office" 
                className="w-full h-full object-cover opacity-80 dark:opacity-50 group-hover:opacity-100 dark:group-hover:opacity-70 transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 mix-blend-normal dark:mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-[#050011] via-transparent to-transparent"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                 <div className="bg-white/80 dark:bg-[#050011]/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-fuchsia-500/30 transition-colors shadow-lg">
                    <div className="text-3xl font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-1">1400+</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-100 uppercase tracking-widest font-semibold">Solutions Delivered</div>
                 </div>
                 <div className="bg-white/80 dark:bg-[#050011]/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-purple-500/30 transition-colors shadow-lg">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">25+</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-100 uppercase tracking-widest font-semibold">Global Clients</div>
                 </div>
              </div>
            </div>
          </div>
        </section>


        {/* --- PURPOSE & MISSION --- */}
        <section className="w-full relative py-24 mb-32 overflow-hidden">
           {/* Glass Container */}
           <div className="max-w-5xl mx-auto px-6 relative z-10">
              <div className="bg-slate-50/80 dark:bg-[#0f0518]/60 border border-slate-200 dark:border-white/5 backdrop-blur-sm rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-xl">
                 {/* Glow behind text */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-fuchsia-200 dark:bg-fuchsia-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Our Purpose</h2>
                 <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 font-light leading-relaxed italic">
                   "We create lasting impact by combining technology with human ingenuity. Through innovation, collaboration, and a culture of excellence, we empower your business to grow, adapt, and lead in a customer-centric world."
                 </p>
                 <div className="mt-8 text-fuchsia-600 dark:text-fuchsia-500 font-medium tracking-wide uppercase text-sm">
                    Rooted in Trust • Driven by Success
                 </div>
              </div>
           </div>
        </section>


        {/* --- WE CARE VALUES --- */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">We Care</h2>
            <p className="text-slate-600 dark:text-slate-100 max-w-2xl mx-auto text-lg font-light">
              Our success is defined by our core values of commitment, ethics, and sustained collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Clients - Fuchsia */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-[#0f0518] border border-slate-200 dark:border-white/5 hover:border-fuchsia-500/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(192,38,211,0.15)] relative overflow-hidden shadow-lg dark:shadow-none">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-100 dark:bg-fuchsia-500/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-fuchsia-200 dark:group-hover:bg-fuchsia-500/10 transition-colors"></div>
              
              <div className="w-14 h-14 bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(192,38,211,0.2)]">
                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">For Our Clients</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-100 text-sm font-light">
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-500 mt-0.5">✓</span> Long-term relationships with high commitment
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-500 mt-0.5">✓</span> Multi-level engagements with personalized attention
                </li>
              </ul>
            </div>

            {/* Card 2: People - Purple */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-[#0f0518] border border-slate-200 dark:border-white/5 hover:border-purple-500/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] relative overflow-hidden shadow-lg dark:shadow-none">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 dark:bg-purple-500/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-purple-200 dark:group-hover:bg-purple-500/10 transition-colors"></div>

              <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">For Our People</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-100 text-sm font-light">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-0.5">✓</span> Integrity, inclusion, and continuous learning culture
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-0.5">✓</span> Fostering collaboration that sparks innovation
                </li>
              </ul>
            </div>

            {/* Card 3: Community - Indigo/Blue */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-[#0f0518] border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] relative overflow-hidden shadow-lg dark:shadow-none">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 dark:bg-indigo-500/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-indigo-200 dark:group-hover:bg-indigo-500/10 transition-colors"></div>

              <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">For Community</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-100 text-sm font-light">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-0.5">✓</span> Supporting regional initiatives that uplift communities
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-0.5">✓</span> Paying it forward through education and mentorship
                </li>
              </ul>
            </div>

          </div>
        </section>


        {/* --- LEADERSHIP TEAM --- */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Our Leadership Team</h2>
            <p className="text-slate-600 dark:text-slate-100 text-lg font-light">Driving digital innovation and global technology excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, index) => (
              <div key={index} className="p-8 bg-white dark:bg-[#0f0518] border border-slate-200 dark:border-white/5 rounded-3xl hover:bg-slate-50 dark:hover:bg-[#150822] transition-all text-center group hover:border-fuchsia-500/30 hover:shadow-xl dark:hover:shadow-fuchsia-900/10 cursor-default shadow-lg dark:shadow-none">
                <div className="w-24 h-24 mx-auto bg-slate-100 dark:bg-[#050011] border border-slate-200 dark:border-white/10 rounded-full mb-6 flex items-center justify-center text-2xl font-bold text-slate-500 group-hover:text-white group-hover:border-fuchsia-500 group-hover:bg-fuchsia-600 transition-all shadow-inner">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-200 transition-colors">{leader.name}</h3>
                <p className="text-xs text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest font-bold line-clamp-2 min-h-[32px]">{leader.role}</p>
              </div>
            ))}
          </div>
        </section>


        

        {/* --- JOIN US CTA --- */}
        {/* <section className="max-w-7xl mx-auto bg-gradient-to-br from-slate-100 to-white dark:from-[#0f0518] dark:to-[#050011] border border-slate-200 dark:border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"> */}
          {/* Decorative gradients
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-200 dark:bg-fuchsia-900/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-200 dark:bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" /> */}

          {/* <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
              Be Part of <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:to-purple-500">Our Journey</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-100 max-w-2xl mx-auto mb-10 text-xl font-light leading-relaxed">
              Join an award-winning company where your talents are nurtured and your success is celebrated.
            </p>
            <a href="/careers" className="inline-flex items-center gap-3 px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-slate-800 dark:hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105">
              Explore Career Opportunities
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div> */}
        {/* </section> */}

      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;