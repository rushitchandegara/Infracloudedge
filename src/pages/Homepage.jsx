import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Excellence from '../components/Excellence';
import Revolutionize from '../components/Revolutionize';
import EmergingTech from '../components/EmergingTech';
import Industries from '../components/Industries';
import CloudPlatforms from '../components/CloudPlatforms';
import ClientChatter from '../components/ClientChatter';
import Careers from '../components/Careers';

import Footer from '../components/Footer'; 
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppWidget from '../components/WhatsAppWidget'; // Import the new component

const Homepage = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <Header />
      
      <div className="fixed inset-0 z-0 h-screen w-full">
        <Hero />
      </div>

      <div className="relative z-10 mt-[100vh] bg-white dark:bg-black border-t border-slate-200 dark:border-gray-800 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,1)] transition-colors duration-500">
        
        <Excellence />
        <Revolutionize />
        <EmergingTech />
        <Industries />
        <CloudPlatforms/ >
        <ClientChatter />
        {/* <Careers /> */}
        

        <Footer />
        <ScrollToTop />
        <WhatsAppWidget /> {/* Added here */}

      </div>
    </div>
  );
};

export default Homepage;