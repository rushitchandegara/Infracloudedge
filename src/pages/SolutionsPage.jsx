import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useTheme } from '../context/ThemeContext';

const solutionsData = [
  {
    id: 'serverless-computing',
    num: '01',
    title: 'Serverless Computing',
    subtitle: 'Strategic Roadmaps & Architecture',
    shortDesc: 'No Servers, No Worries—Just Focus On Code. Farewell from the world of server management! Devote your attention into just writing great code.',
    fullDetail: {
        intro: "All the time, we'll take care of the infrastructure for you. Shaping The Future Of Your Business With Our Smart Solutions.",
        features: [
            { t: "Serverless Architecture Design", d: "Serverless architectures that scale and provide cost-effective solutions without interfering with infrastructure management." },
            { t: "Serverless Integration Services", d: "Effortless integration of serverless applications with cloud services, APIs, and databases to offer additional functionality features." },
            { t: "Serverless Deployment & Automation", d: "Streamline deployment and automate workflows to speed up the delivery of serverless applications and reduce operational overhead." },
            { t: "Serverless Monitoring & Analytics", d: "In the optimization of performance and reliability of a serverless application, there is an emphasis on real time monitoring and analytics." },
            { t: "Serverless Data Processing", d: "Scalable and efficient data processing solutions that use serverless technologies for processing massive volumes of data." },
            { t: "Serverless Disaster Recovery & Backup", d: "Have business continuity within an automated disaster recovery and backup solution for serverless environments." }
        ],
        steps: [
            { n: "1", t: "Event-Driven Execution", d: "Functions are triggered by specific events, such as HTTP requests or data changes, eliminating the need for constant server management." },
            { n: "2", t: "Automatic Scaling", d: "Serverless platforms automatically scale resources up or down based on the demand, ensuring optimal performance." },
            { n: "3", t: "Quick Deployment", d: "Serverless services allow for rapid deployment and continuous integration, reducing time to market for applications." },
            { n: "4", t: "Integrates well with cloud services", d: "Easily integrable capabilities with cloud native services, including storage, databases, and APIs." },
            { n: "5", t: "Environmentally Efficient", d: "They optimize resource usage, making cloud operations more eco-friendly through optimized computing." }
        ],
        results: [
            { t: "Cost Efficiency", d: "Pay only for the computer time you use and thus eliminate all infrastructure costs." },
            { t: "Faster Time to Market", d: "Deploy applications and services without having to worry about server management." },
            { t: "Reduced Operational Overhead", d: "No more managing of servers, freeing up teams to focus on development." },
            { t: "Built-In Security", d: "Security features of the cloud provider protect your applications from threats." },
            { t: "Environmentally Friendly", d: "Reduces energy consumption by optimizing resource usage." },
            { t: "Maintenance Made Easy", d: "Automated updates and patches eliminate the bother of maintenance tasks." }
        ],
        faqs: [
            { id: 1, q: "Which cloud providers offer serverless computing services?", a: "Several cloud providers offer serverless computing services, including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), Alibaba Cloud, IBM Cloud, and Oracle Cloud, among others." },
            { id: 2, q: "Is It Possible To Execute Long-Lasting Processes On A Serverless Environment?", a: "Serverless environments are designed for short-running processes. Most cloud providers impose time limits on function execution." },
            { id: 3, q: "How does serverless computing work?", a: "In serverless computing, developers write code in the form of functions that are triggered by events. These functions are executed on-demand, and you are only charged for the computing resources consumed." }
        ]
    },
    image: 'https://community.connection.com/wp-content/uploads/2019/05/902489-Ditching-the-Hardware-Joseph-Salzer-BLOG.png',
  },
  {
    id: 'cloud-cost-optimization',
    num: '02',
    title: 'Cloud Costs Optimization',
    subtitle: 'Effortless Cloud Cost Control For Maximum Impact',
    shortDesc: 'Optimize those investments in the cloud with effortless solutions for controlling costs designed to have maximum impact on your business.',
    fullDetail: {
        intro: "Tackle Cloud Costs With Smarter Optimization. Effortless Cloud Cost Control For Maximum Impact.",
        features: [
            { t: "Lack of Visibility into Usage", d: "Tracking and understanding cloud resource usage has become an issue leading to incurring additional costs unnecessarily." },
            { t: "Manual Cost Management", d: "Managing cost involves a lot of paperwork which leads to mistakes, wastage of time and resources." },
            { t: "Complex Pricing Models", d: "There are many cloud services that use different pricing schemes which often confuse the consumer." },
            { t: "Difficulty in Forecasting Costs", d: "Challenges encountered in providing a cost estimate due to changing workloads and unscheduled consumption." },
            { t: "Hidden Costs of Data Transfer", d: "With multiple data centers or for out transfers, Data Transfer Costs assessment is often taken for granted." },
            { t: "Failure to Leverage Auto-Scaling", d: "Auto-scaling is not fully exploited, resulting in resource over provisioning and wastage during off-peak times." }
        ],
        steps: [
            { n: "1", t: "Centralized Cost Monitoring Dashboard", d: "An integrated cost tracking dashboard that allows monitoring of cloud spendings for every single service and account used." },
            { n: "2", t: "Comprehensive Resource Management", d: "Analyze and govern resource consumption throughout your cloud ecosystem and gear them to the real demand." },
            { n: "3", t: "Cross-Platform Optimization", d: "Use clouds and services from different providers with a single service solution for cost control." },
            { n: "4", t: "Advanced Cost Forecasting", d: "Use the history and trends of cloud consumption to estimate its size in the future." },
            { n: "5", t: "Multi-Cloud Cost Visibility", d: "Monitoring and Control of Multi-Cloud Expenses to understand and manage the costs in all the clouds effectively." },
            { n: "6", t: "AI-Powered Recommendations", d: "Employ AI to recognize the wastage or underutilization of virtual machines and suggest ways to minimize costs." }
        ],
        results: [
            { t: "Expertise in Multi-Cloud Cost", d: "Our team specializes in optimizing cloud spend across multiple vendors to ensure the best value." },
            { t: "AI-Driven Recommendations", d: "AI technologies perform automated analysis and generate recommendations for waste reduction." },
            { t: "End-to-End Management", d: "We extend cloud cost optimization services from project inception through monitoring stages." },
            { t: "Comprehensive Cost Visibility", d: "A detailed view of how your cloud expenses are distributed making it possible to better manage costs." }
        ],
        faqs: [
            { id: 10, q: "Why is cloud cost optimization important for businesses?", a: "It helps companies save unnecessary costs, ensures cloud resources are utilized when they’re really needed, and increases ROI." },
            { id: 11, q: "How can I monitor my cloud costs?", a: "Major cloud providers have tools like AWS Cost Explorer, Azure Cost Management, and Google Cloud's Billing Reports for such functions." }
        ]
    },
    image: 'https://penncomp.com/wp-content/uploads/2024/04/Depositphotos_536047248_XL-scaled.jpg',
  },
  {
    id: 'hybrid-cloud-solutions',
    num: '03',
    title: 'Hybrid Cloud Solutions',
    subtitle: 'Where Flexibility Meets Reliability',
    shortDesc: 'Discover the unmatched flexibility and reliability of our customized hybrid cloud solutions meant to meet your future-ready business requirements.',
    fullDetail: {
        intro: "Your Ideal Partner Tailored To Your Needs With Hybrid Cloud Solutions. Maximize Efficiency Minimize Risk.",
        features: [
            { t: "Cloud Integration & Migration", d: "Allocate workloads in a hybrid cloud for the best possible outcomes, migrating workloads with ease." },
            { t: "Data Security & Compliance", d: "Safeguard and maintain standards for data within a hybrid cloud environment." },
            { t: "Cloud Cost Management", d: "Develop ways of running a hybrid cloud that will cut down usage costs." },
            { t: "Disaster Recovery as a Service (DRaaS)", d: "Automatic recovery solutions for mixed cloud operating systems, protecting corporate information." },
            { t: "Multi-Cloud & Hybrid Cloud Management", d: "Achieve efficient multi cloud as well as hybrid cloud infrastructures' management from a single point." }
        ],
        steps: [
            { n: "1", t: "Cloud Migration & Integration", d: "Facilitating system integration and migration implementation ensures transition is smooth." },
            { n: "2", t: "Cloud Security & Compliance", d: "Ensure sensitive information is kept protected from prying eyes while complying with regulations." },
            { n: "3", t: "Cloud Management & Optimization", d: "Improve efficiency of processes while cutting down on costs through advanced management." },
            { n: "4", t: "Disaster Recovery & Backup", d: "Ensure minimal loss of operational time through effective systems." },
            { n: "5", t: "Strategy and Planning", d: "Form a strategy that is specific to you to make the most out of the hybrid cloud." },
            { n: "6", t: "Design & Customization", d: "Build flexible and bespoke hybrid cloud structures to fit organizational requirements." }
        ],
        results: [
            { t: "Scalability", d: "Scale up and down resources as per the varying needs of the enterprise without breaking a sweat." },
            { t: "Resilience", d: "Business operations continue due to adequate failovers and disaster recovery features." },
            { t: "Collaboration", d: "Enable secure data sharing across different settings to enhance working together." },
            { t: "Innovative Edge", d: "Enhance innovation through advanced technologies with flexible deployment options." }
        ],
        methodology: [
            { n: "01", t: "Consultation", d: "Articulating in greater detail business goals and cloud needs." },
            { n: "02", t: "Design & Planning", d: "Architecture designed to fit within the overall IT strategy." },
            { n: "03", t: "Implementation", d: "Deploy installations with greatest ease and minimum disruption." },
            { n: "04", t: "Optimization", d: "Manage on an improved performance and cost-effective basis." },
            { n: "05", t: "Support", d: "Ensuring there is no compromise on the proper functioning of your system." }
        ],
        faqs: [
            { id: 20, q: "Why should I consider a Hybrid Cloud Solution for my business?", a: "It combines private control of data with public cost effectiveness, enabling performance while satisfying regulatory requirements." },
            { id: 21, q: "How long does it take to implement a Hybrid Cloud solution?", a: "Normally, it can take few weeks to a couple of months to complete the entire procedure." }
        ]
    },
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'performance-optimization',
    num: '04',
    title: 'Performance Optimization',
    subtitle: 'Faster. Smarter. Better Let\'s Optimize Your Performance',
    shortDesc: 'Speed Up: Innovate and Fly High with Smart Performance Solutions. Empowering Decisions That Lead To Excellence.',
    fullDetail: {
        intro: "Optimizing Today For A Stronger Tomorrow. Empowering Decisions That Lead To Excellence.",
        features: [
            { t: "Website Optimization", d: "Increase website speed, user experience, and SEO engagement to increase conversion rates." },
            { t: "Application Performance", d: "Boost applications' speed and quality through coding, monitoring and optimization." },
            { t: "Server & Infrastructure Optimization", d: "Optimize configurations for reduced load times, minimized downtime and cost effectiveness." },
            { t: "Mobile Optimization", d: "Enhance performance on various devices to reduce loading time and improve interaction." },
            { t: "Database Optimization", d: "Maximize efficiency by tuning queries, indexes, and schemas to cut down latencies." }
        ],
        steps: [
            { n: "1", t: "Improves User Experience", d: "Faster and easy to use applications increase user engagement and retention." },
            { n: "2", t: "Boosts Conversion Rates", d: "Performance help reduce the rate at which users leave and persuades them to act." },
            { n: "3", t: "Increases Site Speed", d: "High engagement is promoted with lesser loading time imperative for competitive edge." },
            { n: "4", t: "Reduces Operational Costs", d: "Proper utilization of resources like optimized servers reduces maintenance costs." }
        ],
        process: [
            { n: "1", t: "Site Audits & Diagnostics", d: "Perform in-depth metrics analysis to detect flaws and weak links." },
            { n: "2", t: "Code Optimization", d: "Perform changes in code with the aim of speeding execution and debugging." },
            { n: "3", t: "Caching & Load Balancing", d: "Devise load distribution techniques to increase speed and lessen server strain." },
            { n: "4", t: "Optimization Tools", d: "Employ the best possible tools to inspect your site and make necessary adjustments." }
        ],
        faqs: [
            { id: 30, q: "How do you measure performance optimization?", a: "Attributes include: load time, time before a server response, retaining visitors, and user experience." },
            { id: 31, q: "What role does load balancing play in optimization?", a: "It arranges incoming traffic to several servers preventing one from degrading performance during peak traffic." }
        ]
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'disaster-recovery',
    num: '05',
    title: 'Disaster Recovery & Backup',
    subtitle: 'Easy Disaster Recovery. Trusted Data Protection',
    shortDesc: 'Keep your data safe, secure, and available through simple disaster recovery solutions. Focused On Your Business Powered By Our Technology.',
    fullDetail: {
        intro: "Reliable Backup, Seamless Recovery Anytime, Anywhere. Transforming Your Challenges Into Competitive Advantages.",
        features: [
            { t: "Cloud-Based Backup Solutions", d: "Effective and efficient data backup and management solutions preventing economies of scale." },
            { t: "On-Premises Backup Solutions", d: "Secure on-site backup systems with adjustable storage and encryption options for more management power." },
            { t: "Backup & Recovery for Databases", d: "Ensure minimum service downtime and data loss designed for scheduled online backups and transaction logging." },
            { t: "Endpoint Protection & Backup", d: "Comprehensive backup extending to workstations, laptops, and mobile phones no matter where users are." },
            { t: "Backup Testing & Validation", d: "Substantial backup check and assurance services to protect the reliable backup data." },
            { t: "Business Continuity Solutions", d: "Recovery management and disaster communications ensuring business operations without taking them offline." }
        ],
        steps: [
            { n: "1", t: "PC Backup", d: "Exercise measures to safeguard important info on desktops with an automatic secure backup system." },
            { n: "2", t: "Server Backup", d: "Provide consistent interval backup to server data so as to reduce any potential losses." },
            { n: "3", t: "Cloud Backup", d: "Use the internet to back up all data for a solution that is flexible, convenient, and safe." },
            { n: "4", t: "Disaster Recovery Solutions", d: "Quick restoration of IT systems and data geared towards ensuring minimum disruption of operations." },
            { n: "5", t: "Business Continuity Consulting", d: "Expert consulting on mechanisms that will facilitate uninterrupted operations amidst disruptions." }
        ],
        results: [
            { t: "Comprehensive Data Protection", d: "Information is secured, stored, and can be retrieved whenever there is any calamity." },
            { t: "Fast Recovery Time", d: "Experience little or no downtime due to state of the art recovery measures and equipment." },
            { t: "24/7 Support", d: "Qualified staff works twenty-four hours all days in providing recovery help so operations continue." },
            { t: "Automated Backups", d: "Lessens possibility of mistakes and makes sure data is up to date and ready at any time." },
            { t: "End-to-End Testing", d: "Testing DR plans regularly making sure recovery operations will work as intended." },
            { t: "Continuous Monitoring & Alerts", d: "Surveillance of backup systems to see all is well and provide warning signals." }
        ],
        methodology: [
            { n: "01", t: "Assessment & Planning", d: "Evaluate critical data and infrastructure, identify recovery goals (RTO, RPO), and prepare emergency plans." },
            { n: "02", t: "Backup Strategy Design", d: "Design actual backup strategies fitting your needs, frequency, and geographical location." },
            { n: "03", t: "Backup Implementation", d: "Incorporate necessary backup systems into networks, setting up daily backups and data encryption." },
            { n: "04", t: "Monitoring & Management", d: "Backup systems operate under supervision and corrective measures are taken before problems occur." },
            { n: "05", t: "Disaster Recovery Testing", d: "DR plan drills are carried out periodically including destruction testing and plan adjustments." },
            { n: "06", t: "Recovery & Support", d: "Restoring all processes, databases, and systems to performance before the incident with round the clock support." }
        ],
        faqs: [
            { id: 40, q: "How do you implement a Disaster Recovery Plan?", a: "A DRP represents all processes, tools, and human resources needed to restore IT infrastructure and information including RTO, RPO, and procedures." },
            { id: 41, q: "How frequently do you need to back data up?", a: "It varies according to organization requirements. Common schedules include daily, weekly, or real-time continuous data protection." },
            { id: 42, q: "Can disaster recovery be added to the current IT infrastructure?", a: "Yes, solutions are flexible and can easily fit into existing databases, applications, and servers." },
            { id: 43, q: "When recovery automation is used, what problem is minimized?", a: "Pre-configured scripts eliminate the need for people directly involved, minimizing turnaround time of recovery processes." },
            { id: 44, q: "How often should DR plans be evaluated?", a: "The best practice is to perform testing at least once within a year, or any time significant alterations are made." }
        ]
    },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
  }
];

const SolutionsPage = () => {
  const { theme } = useTheme();
  const [expandedId, setExpandedId] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [isQuickNavOpen, setIsQuickNavOpen] = useState(false);
  const location = useLocation();
  const sectionRefs = useRef({});

  const isDark = theme === 'dark';

  const handleNavigation = (id) => {
    setExpandedId(id);
    setIsQuickNavOpen(false);
    const element = sectionRefs.current[id];
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (location.state?.targetId) {
      setTimeout(() => handleNavigation(location.state.targetId), 400);
    }
  }, [location]);

  return (
    <div className={`transition-colors duration-500 ${isDark ? 'bg-[#050011] text-[#ffffff]' : 'bg-[#ffffff] text-[#000000]'} selection:bg-fuchsia-500/30 font-sans relative`}>
      
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] blur-[120px] rounded-full transition-opacity duration-1000 ${isDark ? 'bg-purple-900/20 opacity-100' : 'bg-purple-200 opacity-50'}`} />
        <div className={`absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] blur-[120px] rounded-full transition-opacity duration-1000 ${isDark ? 'bg-fuchsia-900/10 opacity-100' : 'bg-fuchsia-200 opacity-50'}`} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>
      
      <div className="relative z-10">
        <Header />
        <ScrollToTop />

        {/* Hero Section */}
        <section className="pt-48 pb-24 px-6 text-center">
          <div className="max-w-7xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-5xl md:text-8xl font-black mb-8 tracking-tighter ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}
            >
              Our Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }} 
              className={`text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}
            >
              Empowering your digital evolution with precision-engineered cloud strategies.
            </motion.p>
          </div>
        </section>

        {/* Solutions Content */}
        <div className="pb-32">
          {solutionsData.map((item, index) => (
            <section 
              key={item.id} 
              ref={el => sectionRefs.current[item.id] = el} 
              className={`py-24 px-6 border-b ${isDark ? 'border-white/5' : 'border-black/5'} last:border-none`}
            >
              <div className="max-w-7xl mx-auto">
                
                {/* ZigZag Layout */}
                <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 md:gap-32 items-center mb-16`}>
                  
                  {/* Image Side */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-1/2"
                  >
                   <div className={`relative aspect-[4/3] md:aspect-square rounded-[60px] overflow-hidden border ${isDark ? 'border-white/10 shadow-2xl shadow-purple-900/30' : 'border-black/5 shadow-xl'}`}>
  <img 
    src={item.image} 
    alt={item.title} 
    className={`w-full h-full object-cover transition-all duration-1000 transform hover:scale-110 ${isDark ? 'brightness-75 hover:brightness-100' : ''}`} 
  />
  {isDark && <div className="absolute inset-0 bg-gradient-to-t from-[#050011] to-transparent opacity-40" />}
</div>
                  </motion.div>
                  
                  {/* Text Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                  >
                    <span className="inline-block px-5 py-2 rounded-full bg-fuchsia-600/10 text-fuchsia-600 dark:text-fuchsia-400 text-sm font-black mb-8 uppercase tracking-[0.2em]">
                      {item.num}. Solution
                    </span>
                    <h2 className={`text-4xl md:text-7xl font-black mb-6 leading-[1.1] ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
                      {item.title}
                    </h2>
                    <h3 className="text-xl md:text-2xl text-fuchsia-600 dark:text-fuchsia-500 font-bold mb-8 italic">
                      {item.subtitle}
                    </h3>
                    <p className={`text-lg md:text-xl leading-relaxed mb-10 font-medium ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'} opacity-80`}>
                      {item.shortDesc}
                    </p>
                    
                    <button 
                      onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      className={`group flex items-center gap-4 px-10 py-4 font-black text-lg rounded-full transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95 ${isDark ? 'bg-[#ffffff] text-[#000000] hover:bg-fuchsia-600 hover:text-[#ffffff]' : 'bg-[#000000] text-[#ffffff] hover:bg-fuchsia-600'}`}
                    >
                      {expandedId === item.id ? 'Read Less' : 'Read More'}
                      <motion.svg 
                        animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                        className="w-6 h-6 transition-colors" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                  </motion.div>
                </div>

                {/* Expanded Content Area */}
                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className={`pt-20 space-y-24 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                        
                        <motion.p 
                          initial={{ y: 20, opacity: 0 }} 
                          animate={{ y: 0, opacity: 1 }}
                          className={`text-3xl md:text-5xl font-bold max-w-5xl leading-tight ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}
                        >
                          {item.fullDetail.intro}
                        </motion.p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {item.fullDetail.features?.map((f, i) => (
                            <motion.div 
                              initial={{ y: 30, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                              key={i} 
                              className={`p-10 rounded-[40px] border transition-all duration-500 group ${isDark ? 'bg-white/5 border-white/10 hover:border-fuchsia-500 hover:bg-white/10' : 'bg-slate-50 border-black/5 hover:border-fuchsia-600'}`}
                            >
                              <h4 className={`text-2xl font-black mb-4 ${isDark ? 'text-[#ffffff] group-hover:text-fuchsia-400' : 'text-[#000000] group-hover:text-fuchsia-600'}`}>{f.t}</h4>
                              <p className={`leading-relaxed text-lg opacity-80 ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>{f.d}</p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Steps Grid */}
                        {item.fullDetail.steps && (
                          <div className={`p-10 md:p-20 rounded-[60px] border ${isDark ? 'bg-fuchsia-600/5 border-fuchsia-500/10' : 'bg-slate-50 border-black/5'}`}>
                            <h4 className={`text-3xl md:text-5xl font-black mb-16 text-center tracking-tighter ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
                              {item.id === 'disaster-recovery' ? 'Reliable Backup, Seamless Recovery' : 'Take Control & Drive Success'}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                              {item.fullDetail.steps.map((s, i) => (
                                <div key={i} className="relative pt-8">
                                  <span className={`text-8xl font-black absolute -top-4 -left-4 leading-none opacity-10 ${isDark ? 'text-fuchsia-500' : 'text-fuchsia-600'}`}>{s.n}</span>
                                  <h5 className={`font-black text-xl mb-4 relative z-10 ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>{s.t}</h5>
                                  <p className={`text-base leading-relaxed font-medium opacity-70 ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>{s.d}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Results Grid */}
                        <div className={`py-24 border-y ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                          <h4 className={`text-4xl md:text-6xl font-black mb-16 tracking-tighter ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>Results That Matter</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {item.fullDetail.results?.map((r, i) => (
                              <div key={i} className={`p-8 rounded-3xl border-l-8 border-fuchsia-600 transition-transform hover:translate-x-2 ${isDark ? 'bg-white/[0.03]' : 'bg-slate-50'}`}>
                                <h5 className={`font-black text-2xl mb-3 ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>{r.t}</h5>
                                <p className={`text-lg leading-relaxed opacity-70 ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>{r.d}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Methodology Section */}
                        {(item.id === 'disaster-recovery' || item.id === 'hybrid-cloud-solutions') && item.fullDetail.methodology && (
                          <div className="pb-10">
                             <h4 className={`text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>Our Methodology</h4>
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                               {item.fullDetail.methodology.map((m, i) => (
                                 <div key={i} className={`p-10 rounded-[40px] text-center border transition-all duration-500 hover:scale-[1.02] ${isDark ? 'bg-white/5 border-white/10 hover:border-fuchsia-500' : 'bg-slate-50 border-black/5 hover:border-fuchsia-600'}`}>
                                   <span className="inline-block text-fuchsia-600 font-black text-2xl mb-6">{m.n}</span>
                                   <h5 className={`font-black text-2xl mb-4 ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>{m.t}</h5>
                                   <p className={`text-lg leading-relaxed opacity-70 ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>{m.d}</p>
                                 </div>
                               ))}
                             </div>
                          </div>
                        )}

                        {/* FAQ Accordion */}
                        <div className="max-w-4xl mx-auto pb-20">
                          <h4 className={`text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>FAQs</h4>
                          <div className="space-y-6">
                            {item.fullDetail.faqs?.map((faq) => (
                              <div key={faq.id} className={`rounded-[30px] border transition-all duration-300 ${isDark ? 'border-white/10 bg-white/5 hover:bg-white/[0.07]' : 'border-black/5 bg-slate-50 hover:bg-slate-100'}`}>
                                <button 
                                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                                  className="w-full p-8 flex items-center justify-between text-left"
                                >
                                  <span className={`text-xl md:text-2xl font-black pr-8 ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>{faq.q}</span>
                                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isDark ? 'bg-white/10 text-[#ffffff]' : 'bg-black/5 text-[#000000]'} ${openFaq === faq.id ? 'rotate-45 bg-fuchsia-600 text-white' : ''}`}>
                                    <span className="text-3xl font-light">+</span>
                                  </div>
                                </button>
                                <AnimatePresence>
                                  {openFaq === faq.id && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                      <p className={`p-8 pt-0 text-xl leading-relaxed font-medium opacity-70 ${isDark ? 'text-[#ffffff] border-t border-white/5' : 'text-[#000000] border-t border-black/5'}`}>
                                        {faq.a}
                                      </p>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </section>
          ))}
        </div>

        <Footer />
      </div>

      {/* QUICK NAVIGATION (SMALLER SEARCH ICON BUTTON) */}
      <div className="fixed bottom-24 right-8 z-[100] flex flex-col items-end gap-4 md:right-10 md:bottom-28">
        <AnimatePresence>
          {isQuickNavOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`mb-4 w-[280px] md:w-[350px] rounded-[35px] border overflow-hidden shadow-2xl backdrop-blur-3xl ${isDark ? 'bg-[#0f0518]/95 border-white/20' : 'bg-white/95 border-black/10'}`}
            >
              <div className="p-6 bg-fuchsia-600 text-white font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                Jump to Solution
              </div>
              <div className="p-4 flex flex-col gap-2">
                {solutionsData.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleNavigation(s.id)}
                    className={`text-left px-6 py-4 text-sm md:text-base font-black rounded-2xl transition-all flex items-center justify-between group ${isDark ? 'text-[#ffffff] hover:bg-white/10' : 'text-[#000000] hover:bg-black/5'}`}
                  >
                    {s.title}
                    <span className="opacity-0 group-hover:opacity-100 transition-all text-fuchsia-600 transform translate-x-2 group-hover:translate-x-0">→</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsQuickNavOpen(!isQuickNavOpen)}
          // Reduced w-16 h-16/w-20 h-20 to w-10 h-10/w-12 h-12
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 z-[101] ${isDark ? 'bg-[#ffffff] text-[#000000] shadow-purple-500/20' : 'bg-[#000000] text-[#ffffff] shadow-black/20'}`}
        >
          {isQuickNavOpen ? (
            // Icon scaled down from w-8/10 to w-5/6
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          )}
        </button>
      </div>

    </div>
  );
};

export default SolutionsPage;