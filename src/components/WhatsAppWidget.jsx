import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const phoneNumber = "917046058497";

  const handleSend = () => {
    if (message.trim() === "") return;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-22 right-7 z-[9999] flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-zinc-800 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold leading-tight">WhatsApp Chat</h3>
                  <p className="text-[10px] opacity-90 uppercase tracking-wider font-semibold">InfraCloudEdge</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 rounded-full p-1 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-4 bg-[#e5ddd5] dark:bg-zinc-800/50">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-zinc-900 p-3 rounded-lg rounded-tl-none shadow-sm mb-4 max-w-[85%]"
              >
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Hi there! 👋 <br /> How can we help you today?
                </p>
                <p className="text-[10px] text-slate-400 text-right mt-1">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </motion.div>
              
              <div className="relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full p-3 pr-12 rounded-xl border-none bg-white dark:bg-zinc-900 text-sm focus:ring-2 focus:ring-[#25D366] dark:text-white resize-none shadow-inner"
                  rows="2"
                />
                <button 
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className="absolute bottom-2.5 right-2.5 p-2 bg-[#25D366] text-white rounded-full disabled:opacity-50 hover:bg-[#128C7E] transition-all"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="flex items-center">
        <AnimatePresence>
          {!isOpen && (
            <motion.span 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="mr-3 bg-white dark:bg-zinc-900 px-4 py-2 rounded-full shadow-lg border border-slate-100 dark:border-zinc-800 text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Tap to chat
            </motion.span>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#25D366] p-4 rounded-full shadow-xl text-white flex items-center justify-center"
        >
          {isOpen ? <X size={32} /> : <WhatsAppIcon className="w-8 h-8 fill-current" />}
        </motion.button>
      </div>
    </div>
  );
};

// Separate SVG Component for cleaner code
const WhatsAppIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default WhatsAppWidget;