import React from 'react';
import { motion } from 'framer-motion';

const GetInTouch = () => {
  return (
    <section 
      className="relative py-24 overflow-hidden selection:bg-fuchsia-500/30 bg-white dark:bg-[#050011] transition-colors duration-500"
    >
      
      {/* --- Ambient Background Effects --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-fuchsia-200 dark:bg-fuchsia-900/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Visuals & Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-500/10 border border-fuchsia-200 dark:border-fuchsia-500/20 mb-6 backdrop-blur-md">
                 <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-600 dark:bg-fuchsia-500 animate-pulse"></span>
                 <span className="text-xs font-semibold text-fuchsia-600 dark:text-fuchsia-300 uppercase tracking-wider">Contact Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight tracking-tight drop-shadow-sm dark:drop-shadow-xl">
                Ready to Accelerate Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:via-pink-400 dark:to-purple-400">
                  Cloud Journey?
                </span>
              </h2>
              <p className="text-xl text-black dark:text-white leading-relaxed max-w-lg font-light">
                Whether you need a full-scale migration, a DevOps audit, or SRE implementation—our engineers are ready to architect your success.
              </p>
            </div>

            {/* Contact Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Email Card */}
              <div className="group p-6 rounded-2xl bg-white dark:bg-[#0f0518] border border-slate-200 dark:border-white/5 hover:border-fuchsia-500/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(192,38,211,0.15)] cursor-default shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-500/10 border border-fuchsia-200 dark:border-fuchsia-500/20 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-500 group-hover:bg-fuchsia-600 group-hover:text-white dark:group-hover:bg-fuchsia-500 transition-all duration-300 shadow-sm dark:shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white mb-0.5 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-300 transition-colors">Email Us</h4>
                    <p className="text-black-900 dark:text-white text-sm group-hover:text-black dark:group-hover:text-slate-300 transition-colors">sales@infracloudedge.com</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group p-6 rounded-2xl bg-white dark:bg-[#0f0518] border border-slate-200 dark:border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] cursor-default shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-500 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 transition-all duration-300 shadow-sm dark:shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white mb-0.5 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">Call Us</h4>
                    <p className="text-gray-600 dark:text-white text-sm group-hover:text-black dark:group-hover:text-slate-300 transition-colors">70460 58497</p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Social Media & Brochure Section --- */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <div className="flex gap-3">
                {/* Reddit */}
                <a href="https://www.reddit.com/u/Infracloudedge" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.056 1.597.04.282.063.568.063.856 0 2.83-3.218 5.122-7.19 5.122-3.97 0-7.189-2.292-7.189-5.122 0-.278.02-.55.056-.823a1.751 1.751 0 0 1-.992-1.587c0-.968.786-1.754 1.754-1.754.463 0 .875.18 1.179.47 1.187-.833 2.81-1.385 4.596-1.47l.836-3.922a.194.194 0 0 1 .23-.151l2.741.58c.088-.306.365-.53.697-.53zM8.406 12.015c-.71 0-1.29.58-1.29 1.29s.58 1.29 1.29 1.29 1.29-.58 1.29-1.29-.58-1.29-1.29-1.29zm7.188 0c-.71 0-1.29.58-1.29 1.29s.58 1.29 1.29 1.29 1.29-.58 1.29-1.29-.58-1.29-1.29-1.29zm-5.6 3.424c-.11 0-.213.044-.29.121-.143.143-.143.376 0 .52.394.394 1.144.606 1.838.606.693 0 1.444-.212 1.838-.606.143-.144.143-.377 0-.52-.077-.077-.18-.121-.29-.121h-3.096z"/></svg>
                </a>

                {/* Threads */}
                <a href="https://www.threads.com/@infracloudedge" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.554 4.884c-3.19 0-4.923 1.677-4.923 4.42 0 2.581 1.584 3.801 3.248 3.801 1.165 0 2.347-.472 2.347-1.345 0-.458-.315-.813-.806-.813-.482 0-.894.472-1.616.472-1.074 0-1.423-.882-1.423-1.605 0-1.63 1.147-3.199 3.062-3.199 1.539 0 2.488.882 2.488 2.374 0 2.299-1.03 3.537-2.616 3.537-1.412 0-2.312-.854-2.312-1.954 0-1.541 1.147-2.21 1.147-2.21s-.12-.473-.553-.473c-.583 0-1.488.756-1.488 2.44 0 1.819 1.557 2.878 3.238 2.878 2.358 0 4.141-1.89 4.141-4.759 0-3.063-2.277-4.574-4.735-4.574zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/></svg>
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/share/1D9LWQmVdf" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/infracloudedge" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.484 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>

                {/* Twitter */}
                <a href="https://x.com/infracloudedge" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-black hover:text-white hover:border-white/40 transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" /></svg>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/infracloudedge" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 hover:scale-110">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
              </div>

              {/* Download Brochure Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/15ZXe-cHMyiDc5q6293AVL8PQvEcxv4D4/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-sm font-bold text-slate-700 dark:text-white hover:border-fuchsia-500/50 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-500/10 transition-all shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Brochure
              </motion.a>
            </div>

          </motion.div>


          {/* Right Column: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-50/80 dark:bg-[#0f0518]/60 p-8 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/10 backdrop-blur-xl relative shadow-xl dark:shadow-2xl"
          >
            {/* Subtle Inner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-200 dark:bg-fuchsia-600/10 blur-[80px] rounded-full pointer-events-none"></div>

            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest ml-1">Full Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Enter your name" 
                    className="w-full bg-white dark:bg-[#050011]/80 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-black dark:text-white placeholder-slate-900 dark:placeholder-slate-100 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all shadow-sm dark:shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest ml-1">Email Address *</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="your@gmail.com" 
                    className="w-full bg-white dark:bg-[#050011]/80 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-black dark:text-white placeholder-slate-900 dark:placeholder-slate-100 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all shadow-sm dark:shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-[10px] font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest ml-1">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    placeholder="Your Company Name" 
                    className="w-full bg-white dark:bg-[#050011]/80 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-black dark:text-white placeholder-slate-900 dark:placeholder-slate-100 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all shadow-sm dark:shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[10px] font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest ml-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder=" 00000 00000" 
                    className="w-full bg-white dark:bg-[#050011]/80 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-black dark:text-white placeholder-slate-900 dark:placeholder-slate-100 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all shadow-sm dark:shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest ml-1">How can we help? *</label>
                <textarea 
                  id="message"
                  rows="4"
                  placeholder="Tell us about your project goals..." 
                  className="w-full bg-white dark:bg-[#050011]/80 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-black dark:text-white placeholder-slate-900 dark:placeholder-slate-100 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all resize-none shadow-sm dark:shadow-inner"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-400 dark:border-white/20 bg-white dark:bg-[#050011] transition-all checked:border-fuchsia-500 checked:bg-fuchsia-500 hover:border-fuchsia-400"
                  />
                  <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <label htmlFor="privacy" className="text-xs text-black dark:text-white leading-snug cursor-pointer select-none hover:text-black/80 dark:hover:text-slate-300 transition-colors">
                  I agree to the processing of my personal data as described in the <a href="#" className="text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-800 dark:hover:text-fuchsia-300 hover:underline transition-colors">Privacy Policy</a>.
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 px-8 bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 text-white font-bold rounded-xl text-base transition-all shadow-lg dark:shadow-[0_0_20px_rgba(192,38,211,0.3)] hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(192,38,211,0.5)] border border-transparent dark:border-white/10"
              >
                Send Message
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;