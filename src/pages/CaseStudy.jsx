import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const caseStudies = [
  {
    id: 1,
    client: "Cloud Automation & Security",
    title: "Terraform-Driven Infrastructure Orchestration",
    impact: "Centralized Multi-Account Management adhering to AWS best practices.",
    color: "from-blue-600 to-cyan-500",
    tags: ["Terraform", "AWS", "Azure"],
    content: (
      <div className="space-y-8 text-slate-700 dark:text-slate-100">
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h3>
          <p>At the Client, we specialize in cloud infrastructure management, security, and networking solutions across AWS and Azure. Our expertise in Terraform-driven automation ensures scalable, secure, and efficient cloud operations for our clients.</p>
        </section>

        <section>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Client Challenges</h4>
          <p className="mb-4">The Client Faced Several Critical Challenges Prior To Our Intervention:</p>
          [Image of cloud infrastructure challenges: log fragmentation, multi-account complexity, and networking silos]
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
              <p className="font-bold text-blue-500 mb-2">Log Forwarding</p>
              <p className="text-sm">Complexity of centralizing log forwarding across multiple services using Terraform.</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
              <p className="font-bold text-blue-500 mb-2">Networking</p>
              <p className="text-sm">Providing centralized networking solutions exacerbated by managing multiple AWS accounts.</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
              <p className="font-bold text-blue-500 mb-2">Centralized MGMT</p>
              <p className="text-sm">Implementing a management system for multiple AWS accounts proved to be daunting.</p>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Objectives</h4>
          <ul className="space-y-3">
            <li className="flex gap-2"><span>•</span> <strong>Enhance Terraform Codebase:</strong> Deliver solutions precisely tailored to meet client specifications.</li>
            <li className="flex gap-2"><span>•</span> <strong>Research and Development:</strong> Develop detailed, reusable modules for each service for future implementation.</li>
            <li className="flex gap-2"><span>•</span> <strong>Scalable Networking Solution:</strong> Ensure seamless integration and optimal performance of their services.</li>
          </ul>
        </section>

        <section>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Solutions Provided</h4>
          [Image of Terraform-driven AWS Multi-Account architecture with Control Tower and Security Hub]
          <div className="space-y-4">
            <div className="p-5 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-500/5">
              <p><strong>Centralized AWS Management:</strong> Implemented AWS Control Tower and AWS Config for cohesive controls.</p>
            </div>
            <div className="p-5 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-500/5">
              <p><strong>Infrastructure Orchestration:</strong> Orchestrated tasks with Terraform to integrate AWS GuardDuty and Security Hub findings for auditing.</p>
            </div>
            <div className="p-5 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-500/5">
              <p><strong>Customized Terraform Modules:</strong> Designed modules for various AWS services (EC2, VPC, Kinesis Firehose, S3) and Azure services.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl">
          <h4 className="text-2xl font-bold mb-4">Results And Impact</h4>
          <p className="mb-2"><strong>01. Centralized Management:</strong> Multi-account setup adhering to AWS best practices.</p>
          <p><strong>02. Improved Disaster Recovery:</strong> Robust backup strategy for workload protection.</p>
        </section>
      </div>
    )
  },
  {
    id: 2,
    client: "Legacy Migration",
    title: "Enterprise On-Premise to AWS Cloud Migration",
    impact: "Reduced Maintenance Costs, High Availability & Minimum Downtime.",
    color: "from-fuchsia-600 to-purple-600",
    tags: ["IaaS", "Hybrid Cloud", "AWS"],
    content: (
      <div className="space-y-8 text-slate-700 dark:text-slate-100">
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h3>
          <p>The client is a global service provider specializing in ESB, Application and Data Integration, Cloud API development, and Mulesoft Integration. They focus on infrastructure automation and web development.</p>
        </section>

        <section>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Business Need</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-500/5 rounded-xl border border-purple-200 dark:border-purple-500/20">
              <span className="text-purple-600 font-black">01</span>
              <p className="mt-2">Facing challenges in managing data centers, network throughput and high availability with high maintenance costs.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-500/5 rounded-xl border border-purple-200 dark:border-purple-500/20">
              <span className="text-purple-600 font-black">02</span>
              <p className="mt-2">Need to migrate on-premise infrastructure to AWS with minimum downtime and increased security levels.</p>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Hybrid Infra</h4>
          [Image of Hybrid Cloud architecture with On-Premise Servers and AWS Storage Gateway]
          <p>Data synchronization is configured using AWS Storage Gateway. We configured data life-cycle and automatic failover for on-premise Domain Controllers.</p>
        </section>

        <div className="italic p-8 bg-gradient-to-br from-fuchsia-600 to-purple-600 text-white rounded-[2.5rem] shadow-xl">
          <p className="text-lg">"Compufy Technolab was engaged to help step stone evaluate, physically check and enhance our security measures in the cloud. They adhered to their proposed schedule, delivered what was promised."</p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    client: "Optimization & Batch",
    title: "High-Performance Data Processing with AWS Batch",
    impact: "Improved RPO/RTO, Faster Processing & Cost Optimization.",
    color: "from-emerald-600 to-teal-500",
    tags: ["AWS Batch", "Docker", "EFS"],
    content: (
      <div className="space-y-8 text-slate-700 dark:text-slate-100">
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h3>
          <p>Helping the Client optimize cloud infrastructure, streamline data processing with AWS Batch, and achieve faster deployments and cost efficiency.</p>
        </section>

        <section>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Solutions Provided</h4>
          [Image of AWS Batch Pipeline with Docker Containers and EFS storage]
          <div className="space-y-4">
            <p><strong>1. Website Hosting:</strong> Hosted multiple WordPress sites with robust backup strategies.</p>
            <p><strong>2. AWS Batch:</strong> Designed pipelines for handling large data processing. Used AWS EFS and FSx for cost-optimized storage.</p>
          </div>
        </section>

        <section className="p-8 bg-emerald-600 text-white rounded-3xl">
          <h4 className="text-xl font-bold mb-4">Results and Impact</h4>
          <ul className="space-y-2">
            <li>• Improved RPO and RTO: Enhanced disaster recovery.</li>
            <li>• Increased Processing Speed: Accelerated data processing.</li>
          </ul>
        </section>
      </div>
    )
  },
  {
    id: 4,
    client: "Infrastructure Automation",
    title: "EnProwess: Ansible & OpsWork Automation",
    impact: "Automated Setup for Global Clients & Reduced Human Effort.",
    color: "from-orange-500 to-red-600",
    tags: ["Ansible", "Nagios", "OpsWork"],
    content: (
      <div className="space-y-8 text-slate-700 dark:text-slate-100">
        <section>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h3>
          <p>Implemented Infrastructure and Application Automation using Ansible for EnProwess covering strategy to maintenance.</p>
        </section>

        <section>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Solution Provided</h4>
          [Image of Ansible Automation Workflow: Orchestration from Deployment to Monitoring]
          <p>Installation automation using AWS OpsWork for Alfresco. Automated Infrastructure Provisioning. Set up monitoring through Nagios with 20+ customized plugins.</p>
        </section>

        <div className="p-8 bg-white dark:bg-white/5 border border-orange-500/20 rounded-3xl">
          <p className="text-xs uppercase font-black text-orange-500 mb-2">What Our Client Says</p>
          <p className="text-xl italic">"We greatly appreciate Compufy Technolab's creativity and guidance in implementing Infrastructure Automation."</p>
        </div>
      </div>
    )
  }
];

const CaseStudy = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedCase, setSelectedCase] = useState(null);

  useEffect(() => {
    if (selectedCase) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [selectedCase]);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <Header />
      <main className="relative min-h-screen pt-32 pb-20 bg-white dark:bg-[#050011] transition-colors duration-500">
        
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-[-10%] w-[600px] h-[600px] bg-blue-200 dark:bg-blue-900/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-20 right-[-10%] w-[500px] h-[500px] bg-fuchsia-200 dark:bg-fuchsia-900/10 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-none">
              Case <span className="text-fuchsia-600">Studies</span>
            </h1>
            <p className="mt-6 text-slate-600 dark:text-slate-100 text-xl max-w-2xl">
              Proven success in cloud infrastructure, automation, and enterprise security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -12, scale: 1.02 }}
                onClick={() => setSelectedCase(item)}
                className="relative group cursor-pointer h-[550px] rounded-[3.5rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-2xl transition-all"
              >
                <div className={`h-[65%] bg-gradient-to-br ${item.color} p-10 flex flex-col justify-end relative overflow-hidden`}>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute top-8 right-8 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md border border-white/30">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                  </div>
                  <div className="flex gap-2 mb-4">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-black/10 px-2 py-1 rounded text-white">{tag}</span>
                    ))}
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-white/70 mb-2">{item.client}</span>
                  <h2 className="text-3xl font-black text-white leading-tight drop-shadow-lg">{item.title}</h2>
                </div>

                <div className="h-[35%] p-10 flex flex-col justify-between bg-white/20 dark:bg-transparent">
                  <div>
                    <p className="text-[10px] text-fuchsia-600 dark:text-fuchsia-400 font-black uppercase tracking-widest mb-1">Key Impact</p>
                    <p className="text-slate-700 dark:text-slate-100 font-bold line-clamp-2 italic leading-relaxed">"{item.impact}"</p>
                  </div>
                  <div className="flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-400 font-black text-[10px] uppercase tracking-[0.25em]">
                    View Study Detail <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* COMPACT CONTENT MODAL */}
        <AnimatePresence>
          {selectedCase && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedCase(null)}
                className="absolute inset-0 bg-slate-900/60 dark:bg-black/90 backdrop-blur-xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 40 }}
                className="relative w-full max-w-5xl h-[85vh] bg-white dark:bg-[#0a051a] backdrop-blur-2xl rounded-[3rem] shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden flex flex-col"
              >
                {/* Modal Header - Compact Design */}
                <div className={`p-6 md:p-8 bg-gradient-to-r ${selectedCase.color} text-white shrink-0 relative`}>
                  <button onClick={() => setSelectedCase(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-all border border-white/30 backdrop-blur-md z-50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                  <div className="max-w-3xl">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70">{selectedCase.client}</span>
                    <h2 className="text-2xl md:text-3xl font-black mt-2 leading-tight">{selectedCase.title}</h2>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto p-8 md:p-16 custom-scrollbar">
                  <div className="max-w-4xl mx-auto">
                    {selectedCase.content}
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

export default CaseStudy;