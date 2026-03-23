import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const blogPosts = [
  {
    id: 1,
    title: "Certified Service Cloud Consultant: Why Your Business Needs One",
    category: "Salesforce",
    desc: "Turn customer chaos into customer joy with super-trained Salesforce professionals.",
    color: "from-fuchsia-600 to-purple-600",
    content: (
      <div className="space-y-8 text-slate-700 dark:text-slate-100">
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. A Tiny Story Before We Begin</h3>
          <p>Picture this. A customer raises a ticket. Then another. And suddenly—kaboom—your support team is drowning in chaos. Emails everywhere. Agents confused. Customers annoyed. You can almost hear the screams.</p>
          <p className="mt-4">Until… a Certified Service Cloud Consultant walks in. They click a few buttons. Configure some magic. Automate the mess. Suddenly your support feels like a well-oiled rocket engine. Smooth. Fast. Smart.</p>
          <p className="mt-4 font-semibold">Absurd? Maybe. But this is literally what we’ve watched happen at Compufy Technolab again and again.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. What Is a Certified Service Cloud Consultant?</h3>
          <p>A Certified Salesforce consultant is a cloud professional trained (super-trained) to build, customize, and improve your customer service ecosystem using Salesforce Service Cloud. They bring the brain + the badge + the real-world battle scars.</p>
          <p className="mt-2 font-bold uppercase">Basically—they turn customer chaos into customer joy.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Why Businesses Need a Service Cloud Expert</h3>
          <p>Let’s keep it real. Customers expect fast replies. Instant support. Zero friction. Your old tools can’t keep up. They just can’t.</p>
          <p className="mt-4">A Salesforce Service Cloud expert gives you systems that:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>respond faster</li>
            <li>automate smarter</li>
            <li>reduce agent workload</li>
            <li>increase customer satisfaction</li>
          </ul>
          <p className="mt-4 font-medium italic">Simple, yes. But also life-changing for your support team.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Core Responsibilities of a Salesforce Service Cloud Consultant</h3>
          <p>They do all the heavy-lifting your internal team doesn’t want to touch:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
            <li>• Build case management flows</li>
            <li>• Set up omni-channel routing</li>
            <li>• Implement automation</li>
            <li>• Create knowledge bases</li>
            <li>• Deploy workflows</li>
            <li>• Integrate third-party tools</li>
            <li>• Train your team (patiently, mostly)</li>
            <li>• Optimize dashboards</li>
          </ul>
          <p className="mt-4 font-black uppercase text-center border-y border-slate-200 dark:border-white/10 py-4">This is engineering customer happiness.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. How a Certified Salesforce Consultant Transforms CX</h3>
          <p>You know what good support feels like? Fast. Friendly. Accurate. Human. A Salesforce customer service consultant builds exactly that using:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>AI-powered support</li>
            <li>Automated case routing</li>
            <li>Smart macros</li>
            <li>Real-time dashboards</li>
            <li>Unified channels</li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Key Features They Implement (That Actually Matter)</h3>
          <p>A Service Cloud implementation specialist doesn’t just click pretty buttons. They implement features that make your support unstoppable:</p>
          <p className="mt-2">Case auto-assignment, Email-to-case, Omni-channel supervisor, CTI phone integrations, Knowledge articles, Service contracts, Entitlement processes, SLA tracking, Field service add-ons.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Benefits of Hiring a Certified Service Cloud Consultant</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Faster case resolutions</li>
            <li>Better customer satisfaction</li>
            <li>Higher agent productivity</li>
            <li>Accurate reporting</li>
            <li>Fewer manual errors</li>
            <li>Automated workflows</li>
            <li>Scalable support structure</li>
            <li>Seamless customer experience</li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Why Certifications Matter More Than Ever</h3>
          <p>A Service Cloud certification is not some shiny digital badge. It’s proof. Real proof. That your consultant understands complex processes and follows Salesforce best practices.</p>
          <p className="mt-4 font-bold">Certified = trustworthy. Uncertified = maybe, maybe-not.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. When Should You Hire a Certified Service Cloud Consultant Expert?</h3>
          <p>You need one when your support is slow, customers complain, agents feel overloaded, or your current system is painful to use. If any of these sound familiar, it's time.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Compufy Technolab — Your Trusted Salesforce Partner</h3>
          <p>At Compufy Technolab, we don’t just “set up” Salesforce. We rebuild your entire customer service experience the right way.</p>
        </section>
        <section className="bg-slate-100 dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/10">
          <h3 className="text-xl font-bold mb-6">FAQs</h3>
          <div className="space-y-4 text-sm">
            <p><strong>Q1: What does a Certified Service Cloud Consultant do?</strong><br/>They design, deploy, and optimize Salesforce Service Cloud to improve customer support operations.</p>
            <p><strong>Q2: Is Service Cloud good for growing businesses?</strong><br/>Absolutely. It scales easily, automates workflows, and organizes your entire service operation.</p>
            <p><strong>Q3: Why choose a certified expert?</strong><br/>Certified consultants follow Salesforce best practices, ensure stable implementations, and reduce business risk.</p>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 2,
    title: "Cloud Migration Services in UAE: The Sky Where Business Meets Innovation",
    category: "UAE Migration",
    desc: "Move from screaming server rooms to silent, lightning-fast cloud platforms.",
    color: "from-blue-600 to-cyan-500",
    content: (
      <div className="space-y-8 text-slate-700 dark:text-slate-100">
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. A Quick Intro about Cloud Migration Services UAE</h3>
          <p>Somewhere in the UAE, a server room is still humming. Too loud. Too hot. Too risky. And somewhere else? Silence. Calm. Cloud. That’s the difference Cloud Migration Services UAE make.</p>
          <p className="mt-4">Cloud migration isn’t just a tech upgrade anymore. In the UAE, it’s a business evolution—whether companies like it or not.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. So… What Exactly Are Cloud Migration Services?</h3>
          <p>Cloud migration services mean moving your business data, applications, databases, and workloads from physical servers to secure cloud environments. With the right cloud migration service providers, businesses stop babysitting servers and start focusing on growth.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Why the UAE Can’t Stop Talking About Cloud</h3>
          <p>Smart cities. Digital governments. AI-driven everything. Of course the cloud is right in the middle.</p>
          
          <ul className="list-disc pl-5 mt-4 space-y-1">
            <li>Speed. No compromises.</li>
            <li>Enterprise-grade security. Always.</li>
            <li>Zero downtime. Ideally.</li>
            <li>Compliance-ready systems. Mandatory.</li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Top Benefits of Cloud Migration Services</h3>
          <p>Instant Scalability, Smarter Cost Control, Intelligent Systems, Business Agility, and Enterprise-Level Security.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Common Roadblocks (And How We Dodge Them)</h3>
          <p>How we ensure a smooth move: Use automated migration tools, perform multi-stage testing, implement real-time backups, and prepare fallback plans.</p>
          
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. The Smart Way UAE Businesses Move to the Cloud</h3>
          <p>Assess, Choose, Phase, Validate, and Optimize. No drama. Just a seamless transition to a modern infrastructure.</p>
        </section>
        <section className="bg-slate-100 dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/10">
          <h3 className="text-xl font-bold mb-6">FAQs</h3>
          
          <div className="space-y-4 mt-6 text-sm">
            <p><strong>Q2: Why are businesses in UAE rapidly adopting cloud migration?</strong><br/>Because it delivers speed, scalability, and cost-efficiency aligned with the national digital vision.</p>
            <p><strong>Q4: How do you ensure minimal or zero downtime during migration?</strong><br/>Through phased execution, automated backups, and real-time monitoring.</p>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 3,
    title: "Cloud Platform Integration with Edge Computing and IoT",
    category: "IoT & Edge",
    desc: "Connecting devices, clouds, and data like never before for real-time automation.",
    color: "from-emerald-600 to-teal-500",
    content: (
      <div className="space-y-8 text-slate-700 dark:text-slate-100">
        <section>
          <p className="text-xl font-medium">The world’s getting smarter — and faster. Devices talk. Clouds think. Welcome to the new frontier.</p>
          <p className="mt-4">At Compufy Technolab, we help businesses across the USA & India design this digital symphony — connecting devices, clouds, and data like never before.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. The Rise of Edge Computing and IoT Integration</h3>
          <p>By 2030, there’ll be over 25 billion IoT devices. Edge computing processes data closer to where it’s created — the “edge” — reducing delays and improving speed.</p>
          <p className="mt-2 font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">IoT + Edge + Cloud = The Perfect Trio.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Edge Computing Services: Where Speed Meets Intelligence</h3>
          <p>Think of edge computing services as mini data centers sitting right next to your devices. No lag. No limits. Just pure speed and smart performance.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. The Role of Compufy Technolab</h3>
          <p>We’ve built smart cities. Automated factories. We consult, architect, and optimize cloud-edge ecosystems that drive business transformation. If data is the new oil — we refine it, automate it, and make it intelligent.</p>
        </section>
        <section className="bg-slate-100 dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/10">
          <h3 className="text-xl font-bold mb-6">FAQs</h3>
          <div className="space-y-4 text-sm">
            <p><strong>Q1: What is IoT edge integration?</strong><br/>Linking IoT devices with edge and cloud platforms for real-time data processing.</p>
            <p><strong>Q2: Why is edge computing important for IoT?</strong><br/>It reduces latency and enables faster decisions without relying solely on cloud processing.</p>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 4,
    title: "Cloud Platform Integration with Edge Computing and IoT (Deep Dive)",
    category: "IoT & Edge",
    desc: "Deeper dive into IoT Edge platform integration and real-time data results.",
    color: "from-orange-500 to-red-600",
    content: (
      <div className="space-y-8 text-slate-700 dark:text-slate-100">
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. IoT Edge Platform Integration</h3>
          <p>Integrating IoT platforms with the cloud isn’t plug-and-play — it’s strategy. It allows for two-way communication — edge devices send data, cloud systems send intelligence back.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Intelligent Edge Solutions: The Future of Cloud Innovation</h3>
          <p>Imagine devices that learn. Routers that adapt. AI meets edge. Edge meets cloud. Boom — next-level efficiency.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Edge Device Management</h3>
          <p>When you have thousands of IoT devices, management is key. We deploy automated tools that simplify operations and strengthen your digital ecosystem.</p>
        </section>
        <div className="p-8 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-[2rem] text-center">
            <h4 className="text-xl font-bold mb-2">Ready to transform?</h4>
            <p>Contact Compufy Technolab for expert IoT and Cloud consulting.</p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "How Artificial Intelligence is Transforming Cloud Computing",
    category: "AI & Cloud",
    desc: "Cloud computing was the engine. AI just stepped in as the driver.",
    color: "from-indigo-600 to-blue-700",
    content: (
      <div className="space-y-8 text-slate-700 dark:text-slate-100">
        <section>
          <p className="text-xl font-medium">The cloud used to be smart. Now, it’s getting intelligent. From simple data storage to full-blown decision-making systems.</p>
          <p className="mt-4 italic">Cloud computing was the engine. AI just stepped in as the driver.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. AI-Powered Cloud Services</h3>
          <p>Imagine servers that optimize themselves. Applications that scale before demand spikes. Artificial intelligence automates the dull stuff while humans focus on innovation.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Intelligent Cloud Infrastructure</h3>
          <p>Servers that know when they’ll crash before they actually do. Smart, scalable, sustainable computing that grows with your business.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. The Role of Compufy Technolab</h3>
          <p>We’re not just following the AI-in-cloud trend — we’re shaping it. We help businesses integrate AI-powered cloud services and deploy intelligent solutions tailored to their needs.</p>
        </section>
        <section className="bg-slate-100 dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/10">
          <h3 className="text-xl font-bold mb-6">FAQs</h3>
          <div className="space-y-4 text-sm">
            <p><strong>Q1: What is cloud computing intelligence?</strong><br/>The integration of AI into cloud systems to automate, analyze, and optimize operations.</p>
            <p><strong>Q2: How does AI improve cloud performance?</strong><br/>AI predicts workloads, manages resources, and automates scaling for peak efficiency.</p>
          </div>
        </section>
      </div>
    )
  }
];

const Blogs = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedPost]);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <Header />
      <main className="relative min-h-screen pt-32 pb-20 bg-white dark:bg-[#050011] transition-colors duration-500">
        
        {/* Background Ambient Blurs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-fuchsia-200 dark:bg-fuchsia-900/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-blue-200 dark:bg-blue-900/10 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-none">Our <span className="text-fuchsia-600">Blogs</span></h1>
            <p className="mt-6 text-slate-600 dark:text-slate-100 text-xl max-w-3xl">Expert roadmaps and digital transformation insights from the Compufy Technolab team.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative group cursor-pointer h-[550px] rounded-[3.5rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl transition-all shadow-2xl"
                onClick={() => setSelectedPost(post)}
              >
                <div className={`h-[65%] bg-gradient-to-br ${post.color} p-10 flex flex-col justify-end relative overflow-hidden`}>
                   <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                   <div className="absolute top-8 right-8 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md border border-white/30">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                   </div>
                   <span className="text-xs font-black uppercase tracking-[0.3em] text-white/80 mb-4 bg-black/10 w-fit px-3 py-1 rounded-full">{post.category}</span>
                   <h2 className="text-3xl font-black text-white leading-tight drop-shadow-xl">{post.title}</h2>
                </div>
                <div className="h-[35%] p-10 flex flex-col justify-between bg-white/20 dark:bg-transparent">
                  <p className="text-slate-600 dark:text-slate-100 text-sm line-clamp-2 font-medium italic leading-relaxed">"{post.desc}"</p>
                  <div className="flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-400 font-black text-[10px] uppercase tracking-[0.25em]">
                    Read Insightful Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* COMPACT CONTENT MODAL */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="absolute inset-0 bg-slate-900/60 dark:bg-black/90 backdrop-blur-xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 40 }}
                className="relative w-full max-w-5xl h-[85vh] bg-white dark:bg-[#0a051a] backdrop-blur-2xl rounded-[3rem] shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden flex flex-col"
              >
                {/* Modal Header - COMPACT VERSION */}
                <div className={`p-6 md:p-8 bg-gradient-to-r ${selectedPost.color} text-white shrink-0 relative`}>
                  <button onClick={() => setSelectedPost(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-all border border-white/30 backdrop-blur-md z-50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                  <div className="max-w-3xl">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70">{selectedPost.category}</span>
                    <h2 className="text-2xl md:text-3xl font-black mt-2 leading-tight">{selectedPost.title}</h2>
                  </div>
                </div>

                {/* Modal Content - Scrollable */}
                <div className="flex-1 overflow-y-auto p-8 md:p-16 custom-scrollbar">
                  <div className="max-w-4xl mx-auto">
                    {selectedPost.content}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(156,163,175,0.3); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default Blogs;