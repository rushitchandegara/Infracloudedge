import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    quote: "Working with this team has been a game-changer for our company. Their technical expertise, strategic thinking, and commitment to quality helped us streamline operations and improve overall performance. The results exceeded our expectations.",
    author: "Rushit Chandegara",
    role: "FOUNDER & CTO",
    logo: "RC" 
  },
  {
    id: 2,
    quote: "Their professionalism and attention to detail truly stand out. From planning to execution, everything was handled smoothly and efficiently. We’ve seen significant growth and improved brand positioning after implementing their solutions.",
    author: "Dharmesh Dhokiya",
    role: "CFO & CMO",
    logo: "DD"
  },
  {
    id: 3,
    quote: "Their innovative approach and deep understanding of market trends have significantly strengthened our brand presence. The team consistently delivers creative strategies backed by strong execution, helping us achieve measurable growth and long-term success.",
    author: "Isha Dhokiya",
    role: "CMO",
    logo: "ID"
  },

];

const ClientChatter = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); 
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // --- SWIPE LOGIC ---
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      nextSlide(); 
    } else if (swipe > swipeConfidenceThreshold) {
      prevSlide(); 
    }
  };

  return (
    <section 
      className="relative py-24 text-slate-900 dark:text-white overflow-hidden selection:bg-fuchsia-500/30 bg-white dark:bg-[#050011] transition-colors duration-500"
    >
      
      {/* --- Ambient Background Effects --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-purple-200 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-fuchsia-200 dark:bg-fuchsia-900/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 backdrop-blur-md">
             <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse"></span>
             <span className="text-xs font-semibold text-fuchsia-600 dark:text-fuchsia-300 uppercase tracking-wider">Testimonials</span>
           </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight drop-shadow-sm dark:drop-shadow-xl">
            Client Chatter that <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:via-pink-400 dark:to-purple-400">Matters</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-white font-light max-w-2xl mx-auto leading-relaxed">
            Stop wondering, start WOWing – Work with us for results that impress!
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          
          {/* TOP ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. Left Container: SWIPEABLE Testimonial */}
            <div className="bg-slate-50/80 dark:bg-[#0f0518] border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-8 md:p-12 h-[500px] flex flex-col justify-between relative overflow-hidden group hover:border-fuchsia-500/30 transition-all duration-500 hover:shadow-lg dark:hover:shadow-[0_0_60px_rgba(192,38,211,0.15)] shadow-md dark:shadow-none">
              
              {/* Subtle gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/[0.03] to-transparent pointer-events-none"></div>

              <div className="flex-1 flex flex-col justify-center items-center text-center cursor-grab active:cursor-grabbing relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={handleDragEnd}
                    className="space-y-8 w-full touch-pan-y"
                  >
                    {/* Circle Logo */}
                    <div className="w-20 h-20 mx-auto bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-xl font-bold shadow-md dark:shadow-lg text-fuchsia-600 dark:text-fuchsia-400 pointer-events-none group-hover:border-fuchsia-500/50 group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-300 transition-all duration-300 group-hover:shadow-lg dark:group-hover:shadow-[0_0_20px_rgba(192,38,211,0.3)]">
                      {testimonials[current].logo}
                    </div>

                    {/* Quote Text */}
                    <p className="text-lg md:text-2xl text-slate-700 dark:text-white leading-relaxed font-light min-h-[140px] flex items-center justify-center select-none italic drop-shadow-sm">
                      "{testimonials[current].quote}"
                    </p>

                    {/* Author Info */}
                    <div className="space-y-1 pointer-events-none">
                      <div className="text-purple-400/50 dark:text-purple-500/50 text-4xl mb-4 leading-none">❝</div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{testimonials[current].author}</h4>
                      <p className="text-sm text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest font-semibold">{testimonials[current].role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-3 mt-4 z-10">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      current === index 
                      ? "w-8 bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-[0_0_10px_#d946ef]" 
                      : "w-1.5 bg-slate-300 dark:bg-white/10 hover:bg-slate-400 dark:hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 2. Right Container: "Voices of Trust" Card */}
            <div 
              onClick={() => navigate('#')}
              className="bg-slate-50 dark:bg-[#0f0518] border border-slate-200 dark:border-white/5 rounded-[2.5rem] h-[500px] relative overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-300 shadow-xl dark:shadow-2xl"
            >
              
              {/* Background Image */}
              <img 
                src="44.png" 
                alt="About Us" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 dark:opacity-50 group-hover:opacity-100 dark:group-hover:opacity-60 transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 mix-blend-normal dark:mix-blend-luminosity"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-purple-900/10 mix-blend-multiply"></div>

              {/* Badge */}
              <div className="absolute top-8 left-8 bg-white/90 dark:bg-black/40 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                Voices Of Trust
              </div>

              

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 w-full p-10">
                <div className="bg-gradient-to-r from-purple-800/90 to-fuchsia-900/90 backdrop-blur-md inline-block px-8 py-4 rounded-r-full -ml-10 mb-3 shadow-lg border-r border-t border-b border-white/10 group-hover:border-fuchsia-500/50 transition-colors duration-300">
                  <h4 className="text-lg font-bold text-white ml-2 tracking-wide">RUSHIT CHANDEGARA</h4>
                </div>
                <p className="text-xs text-white/80 font-bold uppercase tracking-widest ml-1 drop-shadow-md">FOUNDER & CTO</p>
              </div>
            </div>

          </div>

          {/* BOTTOM ROW: Partnerships & Standards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 3: Partnerships */}
            <div className="rounded-[2.5rem] p-10 bg-gradient-to-br from-slate-100 to-white dark:from-[#0f0518] dark:to-[#050011] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white flex flex-col justify-between min-h-[340px] relative overflow-hidden group hover:border-fuchsia-500/30 transition-all duration-300 shadow-lg dark:shadow-none">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-fuchsia-200 dark:bg-fuchsia-600/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none group-hover:bg-fuchsia-300 dark:group-hover:bg-fuchsia-600/20 transition-colors duration-500"></div>

              <h3 className="text-3xl font-bold leading-tight mb-8 z-10 relative drop-shadow-sm dark:drop-shadow-lg">
                Driving Digital Evolution, <br />
                Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:to-white">Partnerships</span>
              </h3>

              {/* Partner Badges */}
              <div className="flex flex-wrap gap-3 z-10 relative">
                {['Microsoft Solutions', 'AWS Select Tier', 'Google Cloud'].map((partner) => (
                  <div key={partner} className="bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors cursor-default hover:border-slate-300 dark:hover:border-white/20 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_10px_#d946ef]"></span>
                    <span className="text-slate-700 dark:text-white font-semibold text-sm tracking-wide">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 4: Standards - White Contrast Card (Adapts to Dark) */}
            <div className="rounded-[2.5rem] p-10 bg-slate-50 dark:bg-slate-100 text-slate-900 dark:text-black flex flex-col justify-between min-h-[340px] relative overflow-hidden group border border-slate-200 dark:border-transparent hover:border-purple-200 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] shadow-md">
               <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-white via-slate-50 to-transparent pointer-events-none"></div>

              <h3 className="text-3xl font-bold leading-tight mb-8 z-10 relative text-slate-900">
                Turning Standards into <br /> <span className="text-purple-700">Standouts</span>
              </h3>

              <div className="flex flex-wrap gap-8 items-end z-10 relative">
                <div className="flex flex-col items-center group/item cursor-default">
                  <div className="w-16 h-16 border-2 border-slate-300 rounded-2xl flex items-center justify-center mb-3 group-hover/item:border-purple-600 group-hover/item:bg-purple-50 transition-all duration-300 shadow-sm bg-white">
                    <span className="text-[10px] font-bold text-slate-800 text-center leading-tight group-hover/item:text-purple-800">ISO<br/>27001</span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Security</span>
                </div>
                
                <div className="flex flex-col items-center group/item cursor-default">
                   <div className="w-16 h-16 flex items-center justify-center mb-3 text-4xl text-slate-400 group-hover/item:text-purple-600 transition-all duration-300 filter grayscale group-hover/item:grayscale-0">
                      ⚖
                   </div>
                   <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">SOC 2 Type II</span>
                </div>

                <div className="flex flex-col items-center group/item cursor-default">
                   <div className="w-16 h-16 flex items-center justify-center mb-3 text-4xl text-slate-400 group-hover/item:text-purple-600 transition-all duration-300 filter grayscale group-hover/item:grayscale-0">
                      👑
                   </div>
                   <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">GDPR Ready</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientChatter;