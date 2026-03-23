import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  {
    id: 'ci-cd',
    label: 'CI/CD',
    platforms: [
      
      {
        id: 'github-actions',
        name: 'GitHub Actions',
        desc: "Automate, customize, and execute your software development workflows right in your repository with GitHub Actions.",
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-10 h-10 dark:invert" alt="GitHub" />,
      },
      {
        id: 'circleci',
        name: 'CircleCI',
        desc: "Continuous integration and delivery platform that helps software teams work smarter and faster.",
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg" className="w-10 h-10 dark:invert" alt="CircleCI" />,
      }
    ],
  },
  { 
    id: 'config', 
    label: 'Configuration Management', 
    platforms: [
      { id: 'ansible', name: 'Ansible', desc: 'Simple IT automation engine that automates cloud provisioning and config.', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" className="w-10 h-10" alt="Ansible" /> },
      
    ] 
  },
  { 
    id: 'iac', 
    label: 'Infrastructure as Code', 
    platforms: [
      { id: 'terraform', name: 'Terraform', desc: 'Safe and efficient tool for building, changing, and versioning infrastructure.', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" className="w-10 h-10" alt="Terraform" /> }
    ] 
  },
  { 
    id: 'container', 
    label: 'Containerization', 
    platforms: [
      { id: 'docker', name: 'Docker', desc: 'Set of platform as a service products that use OS-level virtualization.', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-10 h-10" alt="Docker" /> },
      
    ] 
  },
  { 
    id: 'cloud', 
    label: 'Cloud Platforms', 
    platforms: [
      { id: 'aws', name: 'AWS', desc: 'Comprehensive and broadly adopted cloud platform.', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="w-10 h-10 dark:invert" alt="AWS" /> },
      { id: 'azure', name: 'Azure', desc: 'Microsoft cloud computing service for managing applications.', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" className="w-10 h-10" alt="Azure" /> }
    ] 
  },
  { 
    id: 'monitoring', 
    label: 'Monitoring & Logging', 
    platforms: [
      { id: 'grafana', name: 'Grafana', desc: 'The open observability platform for every stack.', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" className="w-10 h-10" alt="Grafana" /> }
    ] 
  },
];

const CloudPlatforms = () => {
  const [activeTab, setActiveTab] = useState('ci-cd');

  return (
    <section className="relative py-12 md:py-24 bg-white dark:bg-[#050011] transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-extrabold text-[#1e266d] dark:text-white leading-tight">
            Our Expertise With Leading <br className="hidden md:block" />
            {' '}
            <span className="text-fuchsia-600 dark:text-fuchsia-400">DevOps Tools And Technologies</span>
          </h2>
        </div>

        {/* Main Component Container */}
        <div className="flex flex-col md:flex-row bg-white dark:bg-[#0f0518] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl min-h-[550px]">
          
          {/* Sidebar / Mobile Tabs */}
          <div className="w-full md:w-[350px] bg-slate-50 dark:bg-white/5 border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10 p-4 md:p-6 flex md:flex-col overflow-x-auto md:overflow-x-visible no-scrollbar gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`whitespace-nowrap md:whitespace-normal text-left px-5 py-3 md:py-4 rounded-xl text-sm md:text-base font-bold transition-all duration-300 flex-shrink-0 md:flex-shrink-1 ${
                  activeTab === cat.id
                    ? 'bg-white dark:bg-fuchsia-600 text-fuchsia-600 dark:text-white shadow-lg md:translate-x-2'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 p-6 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8 md:mb-12 border-b border-slate-100 dark:border-white/5 pb-4">
                  {categories.find((c) => c.id === activeTab)?.label}
                </h3>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                  {categories
                    .find((c) => c.id === activeTab)
                    ?.platforms.map((platform) => (
                      <motion.div
                        key={platform.id}
                        whileHover={{ y: -5 }}
                        className="group flex flex-col items-center"
                      >
                        {/* Icon Card */}
                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-[2rem] bg-white dark:bg-[#1a0b2e] flex items-center justify-center shadow-md dark:shadow-none border border-slate-100 dark:border-white/10 group-hover:border-fuchsia-500/50 group-hover:shadow-xl group-hover:shadow-fuchsia-500/10 transition-all duration-300">
                          <div className="transform group-hover:scale-110 transition-transform duration-300">
                            {platform.icon}
                          </div>
                        </div>
                        
                        {/* Tool Info */}
                        <div className="mt-4 text-center">
                          <h4 className="text-sm md:text-base font-bold text-slate-700 dark:text-slate-200">
                            {platform.name}
                          </h4>
                          <p className="hidden md:block text-[11px] mt-2 text-slate-500 dark:text-slate-400 leading-relaxed max-w-[140px] mx-auto">
                            {platform.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudPlatforms;