import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../constants'; 
import logo from '../assets/logo.png'; 
import lightLogo from '../assets/light_logo.svg'; 
import { useTheme } from '../context/ThemeContext'; 

// Solutions data preserved exactly
const solutionsData = [
  { id: 'serverless-computing', title: 'Serverless Computing', subtitle: 'Scale without managing infrastructure' },
  { id: 'hybrid-cost-optimization', title: 'Hybrid Cost Optimization', subtitle: 'Balance performance and budget' },
  { id: 'hybrid-cloud-solutions', title: 'Hybrid Cloud Solutions', subtitle: 'Seamless on-premise integration' },
  { id: 'cloud-cost-optimization', title: 'Cloud Cost Optimization', subtitle: 'Reduce spend and identify waste' },
  { id: 'performance-optimization', title: 'Performance Optimization', subtitle: 'Maximize speed and reliability' },
];

// Category Mapping for the 12 services
const categorizedServices = [
  {
    category: "Cloud",
    items: servicesData.filter(s => ['migration-integration','cloud-consulting', 'finops', 'cost-optimization','app-development'].includes(s.id)),
    columns: 1
  },
  {
    category: "DevOps",
    items: servicesData.filter(s => [ 'devops-consulting', 'support-maintenance', 'devops', 'cicd-pipeline-automation', 'sre-consulting', 'containerization', 'site-reliabilityengineering', 'monitoring-logging'].includes(s.id)),
    columns: 2
  },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme(); 
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); 
  const [activeMobileCategory, setActiveMobileCategory] = useState(null); 
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileInsightsOpen, setIsMobileInsightsOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState('');
  
  const navigate = useNavigate();
  const isDark = theme === 'dark'; 

  const searchableItems = [
    ...servicesData.map(s => ({ ...s, type: 'Service' })),
    ...solutionsData.map(s => ({ ...s, type: 'Solution' }))
  ];

  const filteredResults = searchQuery.trim() === '' 
    ? [] 
    : searchableItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const suggestions = [
    { id: 'cloud-consulting', title: 'Cloud Consulting', type: 'Service' },
    { id: 'devops', title: 'DevOps Automation', type: 'Service' },
    { id: 'cloud-cost-optimization', title: 'Cost Optimization', type: 'Solution' },
    { id: 'performance-optimization', title: 'Performance', type: 'Solution' },
  ];

  const handleHomeClick = () => { navigate('/'); setIsSearchOpen(false); setIsMobileMenuOpen(false); };
  const handleAboutClick = () => { navigate('/about'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsSearchOpen(false); setIsMobileMenuOpen(false); };
  const handleAllServicesClick = () => { navigate('/services'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsSearchOpen(false); setIsMobileMenuOpen(false); };
  const handleAllSolutionsClick = () => { navigate('/solutions'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsSearchOpen(false); setIsMobileMenuOpen(false); };
  const handleSpecificServiceClick = (serviceId) => { navigate('/services', { state: { targetId: serviceId } }); setIsSearchOpen(false); setIsMobileMenuOpen(false); setSearchQuery(''); };
  const handleSpecificSolutionClick = (solId) => { navigate('/solutions', { state: { targetId: solId } }); setIsSearchOpen(false); setIsMobileMenuOpen(false); setSearchQuery(''); };
  const handleBlogClick = () => { navigate('/blogs'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsSearchOpen(false); setIsMobileMenuOpen(false); };
  const handleCaseStudyClick = () => { navigate('/case-study'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsSearchOpen(false); setIsMobileMenuOpen(false); };
  const handleCareersClick = () => { navigate('/careers'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsSearchOpen(false); setIsMobileMenuOpen(false); };
  const handleTalkClick = () => { navigate('/talk'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileMenuOpen(false); setIsSearchOpen(false); };

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') { setIsSearchOpen(false); setIsMobileMenuOpen(false); } };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) { document.body.style.overflow = 'hidden'; } 
    else { document.body.style.overflow = 'unset'; }
  }, [isMobileMenuOpen, isSearchOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#050011]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <div onClick={handleHomeClick} className="group cursor-pointer z-50 flex items-center gap-3">
            <img 
              src={isDark ? logo : lightLogo} 
              alt="SoftWare Logo" 
              className="w-28 h-auto md:w-35 md:h-35 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <nav className="hidden md:flex items-center gap-0.5">
            <button onClick={handleHomeClick} className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-all duration-300 rounded-full hover:bg-slate-100 dark:hover:bg-white/5">Home</button>
            <button onClick={handleAboutClick} className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-all duration-300 rounded-full hover:bg-slate-100 dark:hover:bg-white/5">About Us</button>

            {/* Categorized Services Dropdown */}
            <div className="relative group h-20 flex items-center px-1">
              <button onClick={handleAllServicesClick} className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-all duration-300 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-white/5 flex items-center gap-1.5">
                Services
                <svg className="w-3 h-3 text-slate-400 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] p-1 bg-white/95 dark:bg-[#050011]/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-2 translate-y-4 overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
                <div className="bg-slate-50 dark:bg-gradient-to-b dark:from-[#0f0518] dark:to-[#050011] rounded-xl p-8 flex gap-12">
                  {categorizedServices.map((cat, idx) => (
                    <div key={idx} className={`space-y-4 ${cat.category === 'DevOps' ? 'flex-1' : 'w-1/3'}`}>
                      <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-fuchsia-600 dark:text-fuchsia-500">{cat.category}</h3>
                      <div className={`grid gap-2 ${cat.columns === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                        {cat.items.map((service) => (
                          <div key={service.id} onClick={(e) => { e.stopPropagation(); handleSpecificServiceClick(service.id); }} className="group/item flex flex-col p-3 rounded-xl hover:bg-white dark:hover:bg-white/5 cursor-pointer transition-all duration-200 border border-transparent hover:border-slate-200 dark:hover:border-fuchsia-500/20">
                            <h4 className="text-slate-700 dark:text-slate-200 font-bold text-sm group-hover/item:text-fuchsia-600 dark:group-hover/item:text-fuchsia-300 transition-colors">{service.title}</h4>
                            <p className="text-[10px] text-slate-500 mt-1 line-clamp-1 group-hover/item:text-slate-400">{service.subtitle}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-50 dark:bg-[#0f0518] px-8 pb-6 flex justify-end">
                    <button onClick={handleAllServicesClick} className="text-xs font-bold text-fuchsia-500 hover:text-fuchsia-600 dark:text-fuchsia-400 dark:hover:text-fuchsia-300 flex items-center gap-1 transition-colors border-t border-slate-200 dark:border-white/5 pt-4 w-full justify-end">Explore All Expertise &rarr;</button>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group h-20 flex items-center px-1">
              <button onClick={handleAllSolutionsClick} className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-all duration-300 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-white/5 flex items-center gap-1.5">
                Solutions
                <svg className="w-3 h-3 text-slate-400 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] p-1 bg-white/95 dark:bg-[#050011]/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-2 translate-y-4 overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
                <div className="bg-slate-50 dark:bg-gradient-to-b dark:from-[#0f0518] dark:to-[#050011] rounded-xl p-6 grid grid-cols-2 gap-3">
                  {solutionsData.map((sol) => (
                    <div key={sol.id} onClick={(e) => { e.stopPropagation(); handleSpecificSolutionClick(sol.id); }} className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-white/5 cursor-pointer transition-all duration-200 border border-transparent hover:border-slate-200 dark:hover:border-fuchsia-500/20">
                      <div className="mt-1 w-2 h-2 rounded-full bg-fuchsia-500/30 group-hover/item:bg-fuchsia-500 transition-colors shadow-[0_0_5px_rgba(192,38,211,0.5)]" />
                      <div>
                        <h4 className="text-slate-700 dark:text-slate-200 font-semibold text-sm group-hover/item:text-fuchsia-600 dark:group-hover/item:text-fuchsia-300 transition-colors">{sol.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1 group-hover/item:text-slate-400">{sol.subtitle}</p>
                      </div>
                    </div>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-slate-200 dark:border-white/5 flex justify-end">
                      <button onClick={handleAllSolutionsClick} className="text-xs font-bold text-fuchsia-500 hover:text-fuchsia-600 dark:text-fuchsia-400 dark:hover:text-fuchsia-300 flex items-center gap-1 transition-colors">View All Solutions <span aria-hidden="true">&rarr;</span></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Insights */}
            <div className="relative group h-20 flex items-center px-1">
              <button className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-all duration-300 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-white/5 flex items-center gap-1.5 cursor-default">
                Insights
                <svg className="w-3 h-3 text-slate-400 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[300px] p-1 bg-white/95 dark:bg-[#050011]/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-2 translate-y-4 overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
                <div className="bg-slate-50 dark:bg-gradient-to-b dark:from-[#0f0518] dark:to-[#050011] rounded-xl p-4 flex flex-col gap-1">
                  <div onClick={handleBlogClick} className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-white/5 cursor-pointer transition-all duration-200 border border-transparent hover:border-slate-200 dark:hover:border-fuchsia-500/20">
                    <div className="mt-1 w-2 h-2 rounded-full bg-fuchsia-500/30 group-hover/item:bg-fuchsia-500 transition-colors shadow-[0_0_5px_rgba(192,38,211,0.5)]" />
                    <div>
                      <h4 className="text-slate-700 dark:text-slate-200 font-semibold text-sm group-hover/item:text-fuchsia-600 dark:group-hover/item:text-fuchsia-300 transition-colors">Blogs</h4>
                    </div>
                  </div>
                  <div onClick={handleCaseStudyClick} className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-white/5 cursor-pointer transition-all duration-200 border border-transparent hover:border-slate-200 dark:hover:border-fuchsia-500/20">
                    <div className="mt-1 w-2 h-2 rounded-full bg-fuchsia-500/30 group-hover/item:bg-fuchsia-500 transition-colors shadow-[0_0_5px_rgba(192,38,211,0.5)]" />
                    <div>
                      <h4 className="text-slate-700 dark:text-slate-200 font-semibold text-sm group-hover/item:text-fuchsia-600 dark:group-hover/item:text-fuchsia-300 transition-colors">Case Studies</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-1.5">
            <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus:outline-none">
              <AnimatePresence mode='wait' initial={false}>
                <motion.div key={theme} initial={{ y: -20, opacity: 0, rotate: -90 }} animate={{ y: 0, opacity: 1, rotate: 0 }} exit={{ y: 20, opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                  {isDark ? (
                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                  ) : (
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            <button onClick={() => setIsSearchOpen(true)} className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>

            <button onClick={handleTalkClick} className="hidden lg:flex items-center gap-1 px-5 py-2.5 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-black text-xs font-bold rounded-full transition-all duration-300 shadow-sm active:scale-95">Talk with Us</button>

            {/* UNIQUE MORPHING HAMBURGER */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden relative w-12 h-12 flex flex-col items-center justify-center z-[70] rounded-full bg-slate-100 dark:bg-white/5 transition-colors group overflow-hidden"
              aria-label="Toggle Menu"
            >
               <div className="relative w-6 h-5">
                  <motion.span 
                    animate={isMobileMenuOpen ? { rotate: 45, y: 9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="absolute top-0 left-0 h-[2px] bg-slate-800 dark:bg-white rounded-full origin-center" 
                  />
                  <motion.span 
                    animate={isMobileMenuOpen ? { x: 40, opacity: 0 } : { x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-1/2 -translate-y-1/2 left-0 h-[2px] w-[70%] bg-fuchsia-500 rounded-full" 
                  />
                  <motion.span 
                    animate={isMobileMenuOpen ? { rotate: -45, y: -9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="absolute bottom-0 left-0 h-[2px] bg-slate-800 dark:bg-white rounded-full origin-center" 
                  />
               </div>
               <motion.div 
                 initial={false}
                 animate={isMobileMenuOpen ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                 className="absolute inset-0 border-2 border-fuchsia-500/50 rounded-full"
               />
            </button>
          </div>
        </div>
      </header>

      {/* SEARCH OVERLAY */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-slate-900/60 dark:bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4" onClick={() => setIsSearchOpen(false)}>
            <motion.div initial={{ scale: 0.95, y: -20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: -20 }} className="w-full max-w-2xl bg-white dark:bg-[#0f0518] rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10" onClick={(e) => e.stopPropagation()}>
              <div className="p-6 border-b border-slate-100 dark:border-white/5 flex items-center gap-4">
                <svg className="w-6 h-6 text-fuchsia-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input autoFocus type="text" placeholder="Search..." className="w-full bg-transparent border-none outline-none text-slate-800 dark:text-white text-lg placeholder-slate-400" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>
              <div className="max-h-[60vh] overflow-y-auto p-6">
                {searchQuery.trim() === '' ? (
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((sug) => (
                      <button key={sug.id} onClick={() => sug.type === 'Service' ? handleSpecificServiceClick(sug.id) : handleSpecificSolutionClick(sug.id)} className="px-4 py-2 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-500 transition-all">{sug.title}</button>
                    ))}
                  </div>
                ) : filteredResults.length > 0 ? (
                  <div className="grid gap-2">
                    {filteredResults.map((item) => (
                      <div key={item.id} onClick={() => item.type === 'Service' ? handleSpecificServiceClick(item.id) : handleSpecificSolutionClick(item.id)} className="group flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer border border-transparent hover:border-slate-100 dark:hover:border-white/10 transition-all">
                        <h5 className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-fuchsia-600 transition-colors">{item.title}</h5>
                        <span className="text-[10px] uppercase font-bold text-slate-400">{item.type}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                   <div className="py-12 text-center text-slate-500">No results found.</div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* UNIQUE MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            exit={{ x: '100%', opacity: 0 }} 
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[65] bg-white dark:bg-[#050011] overflow-hidden flex flex-col"
          >
            {/* Background Decor */}
            <div className="absolute top-[-5%] right-[-5%] w-72 h-72 bg-fuchsia-600/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-5%] left-[-5%] w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Menu Header with Dedicated Close Button */}
            <div className="flex items-center justify-between px-8 h-20 border-b border-slate-100 dark:border-white/5 relative z-10">
                <img 
                  src={isDark ? logo : lightLogo} 
                  alt="Logo" 
                  className="w-24 object-contain"
                />
                <button 
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest transition-transform active:scale-95 shadow-lg shadow-black/10"
                >
                  Close
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-10 relative z-10">
              <nav className="flex flex-col space-y-1">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  onClick={handleHomeClick}
                  className="group py-5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between cursor-pointer"
                >
                  <span className="text-3xl font-bold text-slate-800 dark:text-white group-active:text-fuchsia-500 transition-colors">Home</span>
                  <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-fuchsia-500 group-hover:text-white group-hover:border-fuchsia-500 transition-all">&rarr;</div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="py-2 border-b border-slate-100 dark:border-white/5">
                  <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="w-full flex justify-between items-center py-5">
                    <span className={`text-3xl font-bold transition-colors ${isMobileServicesOpen ? 'text-fuchsia-500' : 'text-slate-800 dark:text-white'}`}>Services</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isMobileServicesOpen ? 'bg-fuchsia-500 text-white rotate-180' : 'bg-slate-50 dark:bg-white/5 text-slate-400'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-slate-50/50 dark:bg-white/5 rounded-3xl mb-4 p-2">
                        {categorizedServices.map((cat, cIdx) => (
                          <div key={cIdx} className="mb-2 last:mb-0">
                             <button onClick={() => setActiveMobileCategory(activeMobileCategory === cat.category ? null : cat.category)} className={`w-full flex justify-between items-center p-4 rounded-2xl transition-all ${activeMobileCategory === cat.category ? 'bg-white dark:bg-white/10 shadow-sm' : ''}`}>
                               <span className="text-[11px] font-black text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-[0.2em]">{cat.category}</span>
                               <svg className={`w-3 h-3 transition-transform ${activeMobileCategory === cat.category ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                             </button>
                             {activeMobileCategory === cat.category && (
                               <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-1 mt-2 px-4 pb-4">
                                 {cat.items.map(service => (
                                   <div key={service.id} onClick={() => handleSpecificServiceClick(service.id)} className="py-3 flex items-center gap-3 active:translate-x-2 transition-transform">
                                     <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
                                     <p className="font-semibold text-sm text-slate-700 dark:text-slate-200">{service.title}</p>
                                   </div>
                                 ))}
                               </motion.div>
                             )}
                          </div>
                        ))}
                        <button onClick={handleAllServicesClick} className="w-full py-5 text-[10px] font-black text-slate-400 text-center hover:text-fuchsia-500 transition-colors uppercase tracking-[0.2em] border-t border-slate-100 dark:border-white/5">Explore All Expertise</button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="py-2 border-b border-slate-100 dark:border-white/5">
                  <button onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)} className="w-full flex justify-between items-center py-5">
                    <span className={`text-3xl font-bold transition-colors ${isMobileSolutionsOpen ? 'text-fuchsia-500' : 'text-slate-800 dark:text-white'}`}>Solutions</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isMobileSolutionsOpen ? 'bg-fuchsia-500 text-white rotate-180' : 'bg-slate-50 dark:bg-white/5 text-slate-400'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </button>
                  <AnimatePresence>
                    {isMobileSolutionsOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-slate-50/50 dark:bg-white/5 rounded-3xl mb-4 px-4 flex flex-col">
                        {solutionsData.map(sol => (
                          <div key={sol.id} onClick={() => handleSpecificSolutionClick(sol.id)} className="py-5 font-semibold text-sm text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-white/5 last:border-none flex items-center justify-between active:text-fuchsia-500 transition-colors">
                            {sol.title}
                            <svg className="w-4 h-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="py-2 border-b border-slate-100 dark:border-white/5">
                  <button onClick={() => setIsMobileInsightsOpen(!isMobileInsightsOpen)} className="w-full flex justify-between items-center py-5">
                    <span className={`text-3xl font-bold transition-colors ${isMobileInsightsOpen ? 'text-fuchsia-500' : 'text-slate-800 dark:text-white'}`}>Insights</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isMobileInsightsOpen ? 'bg-fuchsia-500 text-white rotate-180' : 'bg-slate-50 dark:bg-white/5 text-slate-400'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </button>
                  <AnimatePresence>
                    {isMobileInsightsOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-slate-50/50 dark:bg-white/5 rounded-3xl mb-4 px-4 flex flex-col">
                        <div onClick={handleBlogClick} className="py-5 font-semibold text-sm text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-white/5">Blogs</div>
                        <div onClick={handleCaseStudyClick} className="py-5 font-semibold text-sm text-slate-700 dark:text-slate-200">Case Studies</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} onClick={handleAboutClick} className="py-8 border-b border-slate-100 dark:border-white/5 text-3xl font-bold text-slate-800 dark:text-white cursor-pointer active:text-fuchsia-500 transition-colors">About Us</motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} onClick={handleCareersClick} className="py-8 border-b border-slate-100 dark:border-white/5 text-3xl font-bold text-slate-800 dark:text-white cursor-pointer active:text-fuchsia-500 transition-colors">Careers</motion.div>
              </nav>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-16 flex flex-col gap-6">
                <button onClick={handleTalkClick} className="w-full py-6 bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-3xl shadow-2xl shadow-fuchsia-500/20 transition-transform active:scale-[0.97] uppercase tracking-[0.3em] text-xs">
                  Let's Talk
                </button>
                <div className="flex items-center justify-between p-5 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10">
                   <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Appearance</span>
                   <button onClick={toggleTheme} className="px-5 py-3 bg-white dark:bg-white/10 rounded-2xl text-[10px] font-black text-slate-800 dark:text-white shadow-sm border border-slate-100 dark:border-white/10 flex items-center gap-3 uppercase tracking-widest active:scale-95 transition-transform">
                      {isDark ? 'Dark' : 'Light'}
                      {isDark ? <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]" /> : <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />}
                   </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;