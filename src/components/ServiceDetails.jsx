import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../constants'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

// --- RICH CONTENT DATA (Unchanged Logic) ---
const richServiceData = {
  // 1. CLOUD CONSULTING
  "cloud-consulting": {
    heroTitle: "Cloud Consulting Services",
    heroDesc: "Scale infrastructure, maximize performance, and minimize costs with strategic cloud consulting services. As a reliable cloud consulting company, our experts offer guidance and custom solutions to optimize your environment, enhance security, and support seamless business growth.",
    introTitle: "Strategic Cloud Advisory",
    introDesc: "Our certified consultants provide end-to-end guidance. We assess your current IT landscape, identify bottlenecks, and design a future-proof cloud strategy that aligns with your business goals, ensuring you get the most out of AWS, Azure, or GCP.",
    faqs: [
      { q: "Cloud Strategy Consulting", a: "Address the navigation and cloud challenges with our cloud strategy consulting services. By aligning infrastructure and platform strategies, we strengthen security, resilience, and governance. Leveraging technologies like Kubernetes, AIOps, automation, and self-service, we drive workflow efficiency and enable continuous business growth." },
      { q: "Cloud Infrastructure", a: "At Bacancy, our cloud computing consulting services are designed to craft a rock-solid, scalable cloud setup tailored just for you. Our cloud experts blend their cloud skills, automation expertise, and cutting-edge tools to deliver top-notch IaaS and PaaS solutions. We ensure zero downtime and high availability, all built to scale your business growth and productivity." },
      { q: "Cloud Migration Planning & Implementation", a: "Access proficient migration strategies from our cloud migration specialists that are specifically designed to help you avoid downtime and the associated risks. They skillfully use platform-specific cutting-edge tools such as Azure Migrate, AWS Migration Hub, and GCP Migrate to move applications to databases seamlessly without the hassle." },
      { q: "Cloud DevOps Advisory", a: "We will speed up your cloud transformation journey, whether it is implementing CI/CD pipelines or automating infrastructure with IaC (Infrastructure as Code). Our certified DevOps consultants focus on reducing friction while using automation tools such as Terraform, Ansible, and Jenkins to improve collaboration further, optimize workflows, and faster deployments." },
      { q: "Cloud Managed Services & Solutions", a: "Our end-to-end cloud managed services streamline cloud management. We use proactive monitoring and automation tools to continuously monitor and automate from cloud design to daily operations to provide a secure, scalable, and cost-efficient cloud ecosystem." },
      { q: "Data, Analytics, and AI Solutions", a: "Our cloud analytics consultants collaborate with your data teams to deliver KPI-driven insights and custom machine learning models that drive smarter decision-making and innovation. Turn data into information, create custom analytics and ML solutions, and leverage your expertise to unlock the power of your data." },
      { q: "Cloud Security and Compliance Solutions", a: "Protect your cloud with advanced security protocols and compliance measures. We provide CASB, SIEM, and monitoring tools expertise to secure your environment against vulnerabilities while satisfying industry standards like GDPR and SOC 2." },
      { q: "Disaster Recovery & Business Continuity", a: "Lead your people to business continuity with our tailored disaster recovery expertise. Our cloud services consultant uses Azure Site Recovery, AWS backup, and GCP Disaster Recovery to minimize downtime and remain resilient." },
      { q: "Cloud Governance Frameworks", a: "Our frameworks simplify governance in multi-cloud environments. As a cloud consulting company experts, we manage risks and ensure compliance with standards like GDPR and HIPAA while optimizing resource allocation and access controls." },
      { q: "Cost Optimization", a: "Achieve cost efficiency without compromising performance through our reliable Cloud consulting comapny. We offer rightsizing, auto-scaling, and leveraging tools like AWS Cost Explorer and Azure Advisor to optimize expenses effectively." },
      { q: "Edge Computing and Containerization", a: "Leverage edge computing and container orchestration (Kubernetes) with serverless functions (AWS Lambda, Azure Functions) for low-latency apps. We help our clients set up and optimize their cloud deployments for scalability and easy, unobstructed operations, utilizing our Kubernetes and serverless architecture consulting services." },
    ],
    deploymentModels: [
      { title: "Public Cloud", desc: "Leverage the infinite scalability of AWS, Azure, or GCP for high-growth applications." },
      { title: "Private Cloud", desc: "Dedicated environments for maximum security and data sovereignty requirements." },
      { title: "Hybrid Cloud", desc: "The best of both worlds: keep sensitive data on-prem while bursting to the cloud." },
      { title: "Multi-Cloud", desc: "Distribute workloads across providers to optimize for specific features and redundancy." }
    ],
    processSteps: [
      { id: "01", title: "Discovery", desc: "We map your current tech stack and business objectives." },
      { id: "02", title: "Strategy", desc: "Developing a tailored roadmap for cloud adoption or optimization." },
      { id: "03", title: "Execution", desc: "Implementing the strategy with minimal disruption to operations." },
      { id: "04", title: "Review", desc: "Continuous performance tuning and cost analysis." }
    ],
    partnerSection: {
      title: "Why Partner with Us?",
      desc: "With more than 14+ years of Cloud IT consulting experience,  has earned a reputation for being trustworthy. Over the years, mastered the art and craft of delivering cloud services in USA, Australia, India, and other countries worldwide that drive innovation, efficiency, and productivity. With a motive to emerge as a reliable, advisable, and sizeable cloud consulting company, Bacancy is ready to embark your business on a cloud digital transformation journey.",
      strengths: [
        { title: "Energy-Smart Cloud:", desc: "Through smart cloud optimization and responsible tech choices, we help you meet your sustainability goals." },
        { title: "Multi-Cloud Expertise:", desc: "We are experts in AWS, Azure, GCP, and beyond to help you with seamless cloud transition." },
        { title: "24/7 Support:", desc: "Continuous support and uninterrupted monitoring ensure smooth functioning and proactive issue resolution of your cloud environment." },
        { title: "Engineered for Cloud Defense:", desc: "Trust our cloud professional services to fortify your environment with top-tier security protocols and ensure compliance with global standards." },
         { title: "Agile Evolution:", desc: "We are well-versed in the cloud-native strategies that bring about undisputed agility and scalability." },
          { title: "Future-Proof Your Applications:", desc: "Modernize your cloud computing software solutions to boost performance and cut unnecessary costs. Achieve seamless operations without disruptions." }
      ]
    },
    tabs: [
      { id: "01", label: "Strategy", title: "Tailored Roadmaps", content: "We don't believe in one-size-fits-all. Our strategies are custom-built for your specific industry challenges.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" },
      { id: "02", label: "Optimization", title: "Cost & Performance", content: "We continuously monitor your environment to ensure you are paying only for what you need.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
      { id: "03", label: "Security", title: "Secure by Design", content: "Security is not an afterthought. We embed compliance and security controls from day one.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop" }
    ]
  },

  // 2. MIGRATION & INTEGRATION
  "migration-integration": {
    heroTitle: "Migration & Integration",
    heroDesc: "Seamlessly transition legacy systems to the cloud with zero disruption. We handle the complexity so you can focus on innovation.",
    introTitle: "Risk-Free Cloud Migration",
    introDesc: "Moving to the cloud doesn't have to be risky. We utilize proven methodologies (Rehost, Refactor, Rearchitect) to migrate your applications and data. Our automated validation tools ensure 100% data integrity and minimal downtime during the cutover.",
    faqs: [
       { q: "Fully Managed IT", a: "Enhance your business operations with our top-tier IT management services, backed by cutting-edge tools, expert guidance, and round-the-clock managed IT support." },
       { q: "Cybersecurity Solutions", a: "Protect your business from cyber threats with our comprehensive cybersecurity solutions. Our expert team implements advanced measures, including firewalls, antivirus software, and intrusion detection, to safeguard your data and systems." },
       { q: "Cloud Services", a: "Leverage the power of cloud computing for your business. Our cloud services include cloud migration, management, and optimization, enabling you to scale resources, improve collaboration, and flexibility." },
       { q: "Remote IT Support", a: "Get instant support no matter where your team is located. Our remote IT support ensures that your employees receive quick assistance and troubleshooting for their technology issues, improving productivity." },
        { q: "IT Consultation", a: "Make informed technology decisions with our expert IT Consulting Services. We work closely with your business to provide strategic guidance on IT infrastructure, helping you align technology with your business goals." },
         { q: "IT Strategy and Planning", a: "Build a strong technology foundation for your business's future success. We develop comprehensive IT strategies and plans that align with your long-term goals and ensure your technology investments are strategic and cost-effective." },
          { q: "Business Continuity Planning", a: "Prepare your business for any disruption. Our business continuity planning services help you develop strategies to maintain operations during emergencies, minimizing downtime and financial impact." },
           { q: "Custom IT Solutions", a: "Our IT support services include Custom IT solutions. We create customized solutions that address your specific challenges, from software development to specialized hardware configurations." }
    ],
    deploymentModels: [
      { title: "Lift & Shift", desc: "Quickly move applications to the cloud with minimal code changes." },
      { title: "Re-Platforming", desc: "Optimizing the OS or database layer without changing core app code." },
      { title: "Refactoring", desc: "Rewriting applications to be cloud-native (Serverless/Containers)." },
      { title: "Repurchasing", desc: "Switching from legacy software to modern SaaS solutions." }
    ],
    processSteps: [
      { id: "01", title: "Assessment", desc: "Scanning infrastructure to map dependencies and risks." },
      { id: "02", title: "Planning", desc: "Designing the migration wave groups and fallback plans." },
      { id: "03", title: "Migration", desc: "Executing the move using automated replication tools." },
      { id: "04", title: "Validation", desc: "Rigorous testing to ensure functional parity." }
    ],
    partnerSection: { 
      title: "Why Choose Us?", 
      desc: "We have successfully migrated 500+ enterprise applications with a 99.9% success rate.", 
      strengths: [
        { title: "Zero Downtime", desc: "Blue/Green deployment strategies." },
        { title: "Data Integrity", desc: "Automated checksum validation." },
        { title: "Speed", desc: "Parallel processing for faster transfers." },
        { title: "Security", desc: "Encrypted transit tunnels." }
      ] 
    },
    tabs: [
      { id: "01", label: "Zero Disruption", title: "Business Continuity", content: "Our migration strategies prioritize business continuity, ensuring your customers never notice the switch.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" },
      { id: "02", label: "Modernization", title: "Beyond Lift & Shift", content: "We don't just move your mess. We help you clean it up and modernize it for the cloud era.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      { id: "03", label: "Support", title: "Post-Migration Care", content: "We stick around after the move to fine-tune performance and resolve any teething issues.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop" }
    ]
  },

  // 3. DEVOPS AUTOMATION
  "support-maintenance": {
    heroTitle: "DevOps Automation",
    heroDesc: "Accelerate your software delivery lifecycle. We build robust CI/CD pipelines that automate testing, security, and deployment.",
    introTitle: "Automate Everything",
    introDesc: "Stop manual deployments. Our DevOps engineers build sophisticated pipelines using Jenkins, GitLab CI, or GitHub Actions. We implement 'Infrastructure as Code' and automated testing to ensure that every code commit is deployable, reducing your time-to-market from weeks to minutes.",
    faqs: [
      { q: "CI/CD Implementation", a: "End-to-end pipelines that automate building, testing, and deploying your code." },
      { q: "Infrastructure as Code", a: "Managing infrastructure using Terraform or Ansible for reproducible environments." },
      { q: "Configuration Management", a: "Automating server configuration to prevent configuration drift." },
      { q: "Automated Testing", a: "Integrating unit, integration, and regression tests directly into the pipeline." }
    ],
    deploymentModels: [
      { title: "Continuous Integration", desc: "Merge code changes frequently with automated builds and tests." },
      { title: "Continuous Delivery", desc: "Automatically prepare code changes for a release to production." },
      { title: "GitOps", desc: "Using Git as the single source of truth for declarative infrastructure." },
      { title: "DevSecOps", desc: "Integrating security scans into the DevOps pipeline." }
    ],
    processSteps: [
      { id: "01", title: "Audit", desc: "Reviewing your current SDLC and identifying bottlenecks." },
      { id: "02", title: "Design", desc: "Architecting the pipeline and selecting the right toolchain." },
      { id: "03", title: "Implement", desc: "Coding the pipelines and IaC scripts." },
      { id: "04", title: "Enablement", desc: "Training your team to own and operate the new workflow." }
    ],
    partnerSection: {
      title: "DevOps Excellence",
      desc: "We help you achieve 'Elite' DORA metrics: high deployment frequency and low failure rates.",
      strengths: [
        { title: "Speed", desc: "Deploy multiple times per day." },
        { title: "Stability", desc: "Reduce rollback rates significantly." },
        { title: "Efficiency", desc: "Eliminate manual operational toil." },
        { title: "Quality", desc: "Catch bugs before they reach production." }
      ]
    },
    tabs: [
      { id: "01", label: "Pipelines", title: "Robust CI/CD", content: "Visualizing the flow of value from development to production with fully automated pipelines.", image: "https://images.unsplash.com/photo-1667372393119-c85c020799a3?q=80&w=800&auto=format&fit=crop" },
      { id: "02", label: "Tools", title: "Best-in-Class Toolchain", content: "We are experts in Jenkins, Docker, Kubernetes, Terraform, and the entire CNCF landscape.", image: "https://images.unsplash.com/photo-1607799275518-d750cc6867a8?q=80&w=800&auto=format&fit=crop" },
      { id: "03", label: "Culture", title: "DevOps Culture", content: "It's not just tools; we help foster a culture of collaboration between Dev and Ops teams.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" }
    ]
  },

  // 4. CLOUD SECURITY (DEVSECOPS)
  "cost-optimization": {
    heroTitle: "Cloud Security & DevSecOps",
    heroDesc: "Fortify your cloud environment. We integrate security into every stage of development, ensuring compliance and protection.",
    introTitle: "Secure by Default",
    introDesc: "In the cloud, security is a shared responsibility. We help you uphold your end. From identity management (IAM) to network security and threat detection, we implement a 'Zero Trust' architecture. We shift security left, fixing vulnerabilities in code before they ever reach production.",
    faqs: [
      { q: "Vulnerability Assessment", a: "Regular scanning of infrastructure and code for known security flaws." },
      { q: "Compliance Audits", a: "Preparing your environment for SOC2, ISO 27001, HIPAA, or PCI-DSS." },
      { q: "Identity Management", a: "Implementing strict Least Privilege Access (IAM) policies." },
      { q: "Threat Detection", a: "Setting up real-time monitoring for suspicious activities (SIEM)." }
    ],
    deploymentModels: [
      { title: "Zero Trust", desc: "Never trust, always verify. Strict identity verification for every user." },
      { title: "Shift Left", desc: "Integrating security testing early in the development lifecycle." },
      { title: "Encryption", desc: "End-to-end encryption for data at rest and in transit." },
      { title: "Container Security", desc: "Scanning container images for vulnerabilities before deployment." }
    ],
    processSteps: [
      { id: "01", title: "Assess", desc: "Penetration testing and architecture review." },
      { id: "02", title: "Harden", desc: "Remediating vulnerabilities and tightening configurations." },
      { id: "03", title: "Monitor", desc: "Deploying automated threat detection systems." },
      { id: "04", title: "Train", desc: "Educating developers on secure coding practices." }
    ],
    partnerSection: {
      title: "Your Security Shield",
      desc: "We stay ahead of the hackers so you don't have to.",
      strengths: [
        { title: "Proactive", desc: "Identifying threats before they exploit you." },
        { title: "Compliant", desc: "Always audit-ready environments." },
        { title: "Automated", desc: "Security as Code implementation." },
        { title: "Expert", desc: "Certified ethical hackers on team." }
      ]
    },
    tabs: [
      { id: "01", label: "Compliance", title: "Regulatory Compliance", content: "Navigating the complex landscape of GDPR, HIPAA, and industry standards with ease.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
      { id: "02", label: "Protection", title: "24/7 Threat Protection", content: "Continuous monitoring ensures that any anomaly is detected and neutralized instantly.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop" },
      { id: "03", label: "Identity", title: "IAM Excellence", content: "Managing users, roles, and permissions to ensure only the right people have access.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" }
    ]
  },

  // 5. AI & ML INTEGRATION (OR CONTAINERIZATION)
  "finops": {
    heroTitle: "Kubernetes & Containerization",
    heroDesc: "Unlock true portability and scalability. We containerize your applications and orchestrate them with Kubernetes for high availability.",
    introTitle: "Mastering Microservices",
    introDesc: "Move away from heavy monoliths. We help you break down applications into lightweight, portable containers using Docker. We then manage these containers at scale using Kubernetes (EKS, AKS, GKE), ensuring your application can self-heal and auto-scale based on demand.",
    faqs: [
      { q: "Docker Implementation", a: "Containerizing legacy and modern applications for consistency." },
      { q: "Kubernetes Management", a: "Setting up production-grade K8s clusters with best practices." },
      { q: "Service Mesh", a: "Implementing Istio or Linkerd for advanced traffic management." },
      { q: "Microservices Strategy", a: "Decoupling monolithic architectures into manageable services." }
    ],
    deploymentModels: [
      { title: "Managed K8s", desc: "Utilizing EKS (AWS), AKS (Azure), or GKE (Google) for reduced overhead." },
      { title: "Serverless Containers", desc: "Running containers on AWS Fargate or Google Cloud Run." },
      { title: "On-Prem K8s", desc: "Deploying OpenShift or Rancher for private data centers." },
      { title: "Hybrid Mesh", desc: "Connecting services across cloud and on-premise clusters." }
    ],
    processSteps: [
      { id: "01", title: "Containerize", desc: "Writing Dockerfiles and optimizing image sizes." },
      { id: "02", title: "Orchestrate", desc: "Designing K8s manifests and Helm charts." },
      { id: "03", title: "Secure", desc: "Implementing network policies and image scanning." },
      { id: "04", title: "Scale", desc: "Configuring HPA and VPA for auto-scaling." }
    ],
    partnerSection: {
      title: "K8s Certified",
      desc: "We are a Kubernetes Certified Service Provider (KCSP).",
      strengths: [
        { title: "Scalability", desc: "Handle millions of requests effortlessly." },
        { title: "Portability", desc: "Run your app anywhere Docker runs." },
        { title: "Resilience", desc: "Self-healing infrastructure." },
        { title: "Efficiency", desc: "Maximize hardware utilization." }
      ]
    },
    tabs: [
      { id: "01", label: "Orchestration", title: "Kubernetes Mastery", content: "We take the pain out of managing complex Kubernetes clusters, automating updates and scaling.", image: "https://images.unsplash.com/photo-1605745341117-9575522cd999?q=80&w=800&auto=format&fit=crop" },
      { id: "02", label: "Modernization", title: "Microservices Journey", content: "Guiding your team from monolithic struggles to microservices agility.", image: "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=800&auto=format&fit=crop" },
      { id: "03", label: "GitOps", title: "GitOps Workflow", content: "Using ArgoCD or Flux to manage cluster state via Git repositories.", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" }
    ]
  },

  // 6. INFRASTRUCTURE AS CODE
  "app-development": {
    heroTitle: "Infrastructure as Code (IaC)",
    heroDesc: "Treat your infrastructure like software. We automate provisioning using Terraform and Ansible for consistent, reproducible environments.",
    introTitle: "Automated Provisioning",
    introDesc: "Say goodbye to 'click-ops'. We codify your entire infrastructure using industry-standard tools like Terraform, CloudFormation, and Ansible. This allows you to version control your servers, replicate environments in minutes, and eliminate human error in deployments.",
    faqs: [
      { q: "Terraform Development", a: "Writing modular, reusable Terraform code for multi-cloud setups." },
      { q: "Configuration Mgmt", a: "Using Ansible or Chef to configure servers automatically." },
      { q: "Drift Detection", a: "Monitoring for unauthorized changes to infrastructure." },
      { q: "Immutable Infra", a: "Replacing servers rather than patching them for higher stability." }
    ],
    deploymentModels: [
      { title: "Declarative", desc: "Defining 'what' you want (Terraform), not 'how' to get there." },
      { title: "Immutable", desc: "Servers are never modified after deployment, only replaced." },
      { title: "Modular", desc: "Building reusable infrastructure components." },
      { title: "Versioned", desc: "Tracking infrastructure changes in Git history." }
    ],
    processSteps: [
      { id: "01", title: "Audit", desc: "Mapping existing manual infrastructure." },
      { id: "02", title: "Codify", desc: "Writing the IaC templates and scripts." },
      { id: "03", title: "Test", desc: "Validating infrastructure code with automated tests." },
      { id: "04", title: "Apply", desc: "Rolling out changes via CI/CD pipelines." }
    ],
    partnerSection: {
      title: "Consistency is Key",
      desc: "Eliminate the 'it works on my machine' problem forever.",
      strengths: [
        { title: "Speed", desc: "Spin up dev environments in minutes." },
        { title: "Safety", desc: "Review infra changes like code." },
        { title: "Savings", desc: "Destroy non-prod envs when unused." },
        { title: "Recovery", desc: "Disaster recovery becomes a single command." }
      ]
    },
    tabs: [
      { id: "01", label: "Terraform", title: "Terraform Experts", content: "We build enterprise-grade modules that are secure, scalable, and easy to maintain.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
      { id: "02", label: "Ansible", title: "Configuration Management", content: "Automating the last mile of configuration, ensuring every server is perfectly tuned.", image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=800&auto=format&fit=crop" },
      { id: "03", label: "Automation", title: "Full Stack Automation", content: "From the VPC network down to the application config file, everything is code.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
  },

  // 7. SITE RELIABILITY ENGINEERING (SRE)
  "sre-consulting": {
    heroTitle: "SRE & 24/7 Monitoring",
    heroDesc: "Maximize uptime and performance. Our SREs implement observability stacks to detect issues before your users do.",
    introTitle: "Obsessed with Uptime",
    introDesc: "We implement the SRE methodology pioneered by Google. By defining clear SLIs (Indicators) and SLOs (Objectives), we balance feature velocity with system reliability. Our team sets up comprehensive monitoring (Prometheus, Grafana, Datadog) to provide deep visibility into your system's health.",
    faqs: [
      { q: "Observability Setup", a: "Implementing logs, metrics, and traces for full system visibility." },
      { q: "Incident Response", a: "24/7 on-call support and automated runbook execution." },
      { q: "Performance Tuning", a: "Identifying slow queries and bottlenecks to optimize latency." },
      { q: "Chaos Engineering", a: "Intentionally testing failure modes to build resilience." }
    ],
    deploymentModels: [
      { title: "24/7 NOC", desc: "Round-the-clock eyes on glass for your critical systems." },
      { title: "Automated Healing", desc: "Scripts that fix common issues without human intervention." },
      { title: "Log Aggregation", desc: "Centralized logging with ELK or Splunk." },
      { title: "APM", desc: "Application Performance Monitoring for code-level insights." }
    ],
    processSteps: [
      { id: "01", title: "Define", desc: "Setting realistic SLOs and error budgets." },
      { id: "02", title: "Instrument", desc: "Adding agents and exporters to your stack." },
      { id: "03", title: "Visualize", desc: "Creating dashboards that tell the real story." },
      { id: "04", title: "Alert", desc: "Configuring actionable alerts (no noise)." }
    ],
    partnerSection: {
      title: "Reliability First",
      desc: "Your users expect perfection. We help you deliver it.",
      strengths: [
        { title: "Visibility", desc: "See everything happening in real-time." },
        { title: "Response", desc: "15-minute SLA for critical incidents." },
        { title: "Insights", desc: "Data-driven capacity planning." },
        { title: "Peace of Mind", desc: "Sleep well knowing we are watching." }
      ]
    },
    tabs: [
      { id: "01", label: "Monitoring", title: "Full Stack Observability", content: "We monitor infrastructure, databases, and application code in a single pane of glass.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
      { id: "02", label: "Alerting", title: "Smart Alerting", content: "We eliminate alert fatigue by ensuring you are only paged for actionable problems.", image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=800&auto=format&fit=crop" },
      { id: "03", label: "Resilience", title: "Built for Failure", content: "Systems fail. We architect them so that failures are invisible to the end user.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" }
    ]
  },

  // 8. SERVERLESS COMPUTING
  "devops": {
    heroTitle: "Serverless Computing",
    heroDesc: "Focus on code, not servers. We build event-driven, serverless applications that scale to zero and reduce costs.",
    introTitle: "The Future is Serverless",
    introDesc: "Eliminate the burden of server management entirely. We architect applications using AWS Lambda, Azure Functions, and API Gateway. This event-driven model means you only pay for the compute time you actually use, offering unparalleled cost efficiency for variable workloads.",
    faqs: [
      { q: "Serverless Migration", a: "Refactoring APIs to run on Lambda or Google Cloud Functions." },
      { q: "Event-Driven Arch", a: "Building systems that react to events (S3 uploads, DB changes)." },
      { q: "API Management", a: "Securing and throttling APIs using Amazon API Gateway." },
      { q: "Backend as a Service", a: "Leveraging Firebase or Supabase for rapid development." }
    ],
    deploymentModels: [
      { title: "FaaS", desc: "Function as a Service for pure compute logic." },
      { title: "BaaS", desc: "Backend as a Service for auth, db, and storage." },
      { title: "Edge Compute", desc: "Running code closer to users via Cloudflare Workers." },
      { title: "Event Bus", desc: "Decoupling services using EventBridge or Kafka." }
    ],
    processSteps: [
      { id: "01", title: "Architect", desc: "Designing for stateless, event-driven patterns." },
      { id: "02", title: "Develop", desc: "Writing lightweight, single-purpose functions." },
      { id: "03", title: "Deploy", desc: "Using Serverless Framework or SAM for deployment." },
      { id: "04", title: "Optimize", desc: "Tuning memory and timeout settings for cost." }
    ],
    partnerSection: {
      title: "Scale to Zero",
      desc: "Why pay for idle servers? Serverless offers the ultimate cost optimization.",
      strengths: [
        { title: "Cost", desc: "Pay only for milliseconds of compute." },
        { title: "Scale", desc: "Handle 0 to 10k requests instantly." },
        { title: "Ops-Free", desc: "No OS patching or server maintenance." },
        { title: "Agility", desc: "Ship features faster with less boilerplate." }
      ]
    },
    tabs: [
      { id: "01", label: "Architecture", title: "Event-Driven Design", content: "We design loose coupling between components using event buses, making the system robust and extensible.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" },
      { id: "02", label: "Performance", title: "Cold Start Optimization", content: "We know the tricks to keep your serverless functions warm and responsive.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" },
      { id: "03", label: "Development", title: "Rapid Prototyping", content: "Serverless allows us to move from idea to live API in record time.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  // 9. CI/CD PIPELINE AUTOMATION (NEW)
  "cicd-pipeline-automation": {
    heroTitle: "CI/CD Pipeline Automation",
    heroDesc: "Code Faster, Deploy Smarter: The Future Of CI/CD. Adoption of Continuous Integration / Continuous Delivery (CI/CD) practices speeds up development and reduces the cost of going to production.",
    introTitle: "Solving Complex Challenges With Smart Solutions",
    introDesc: "Our end-to-end pipeline design ensures that from the moment of code commit to the moment of deployment, your processes are optimized, integrated, and automated for maximum efficiency.",
    faqs: [
      { q: "What is the importance of CI/CD?", a: "CI/CD facilitates many aspects of software engineering such as improving the overall quality of the software, shortening the delays between deployments, minimizing human error, promoting teamwork, and ensuring that the source code is always in a deployable form." },
      { q: "How do you do CI/CD?", a: "To enforce CI/CD, we: 1. Pick a version control system (e.g. Git). 2. Pick a CI/CD tool. 3. Create build, test and deployment stage pipelines. 4. Automate testing procedures. 5. Provide monitoring and rollback capabilities. 6. Implement security and access restrictions." },
      { q: "How do containers enhance a CI/CD process?", a: "Containers (e.g. Docker) create a uniform system where applications can be developed, tested, and released. They guarantee functionality across any system irrespective of the underlying hardware." },
      { q: "How does CI/CD complement DevOps?", a: "CI/CD features the core ideas of DevOps by encouraging development and operations to work together, eliminating repetitive elements, and making software delivery quicker." }
    ],
    deploymentModels: [
      { title: "End-to-End Pipeline", desc: "Optimized ICD processes from code commit to deployment." },
      { title: "Quality Gate Integration", desc: "Automated testing and healthy build validation." },
      { title: "Deployment Strategies", desc: "Advanced Blue-Green and Canary deployment models." },
      { title: "GitOps Workflows", desc: "Version-controlled cloud configuration as the single source of truth." }
    ],
    processSteps: [
      { id: "01", title: "Selecting CI/CD System", desc: "Utilizing AWS/Azure capabilities for feature creation and testing." },
      { id: "02", title: "Discovery & Onboarding", desc: "Reviewing landscape and objectives to remove obstructions." },
      { id: "03", title: "Pipeline Implementation", desc: "Automating build, testing, and production phases." },
      { id: "04", title: "Ultimate Automation", desc: "Achieving seamless integration and effective infrastructure use." }
    ],
    partnerSection: {
      title: "Empowering Your Success",
      desc: "Our expertise ensures limitless growth through robust CI/CD implementation and next-gen tools.",
      strengths: [
        { title: "Time-Efficiency", desc: "Work on new features only when necessary with robust metrics." },
        { title: "Speed and Productivity", desc: "Rapid feedback allows developers to fix issues quickly." },
        { title: "Effective Delivery", desc: "Seamless integration between staging and production." },
        { title: "Reduce Project Costs", desc: "Curb repetitive mistakes and save resources significantly." },
        { title: "Enhance Teamwork", desc: "Increase healthy interactions between Dev, Ops, and QA." },
        { title: "Improve Testability", desc: "Smaller code releases with automated tests make releases less buggy." }
      ]
    },
    tabs: [
      { id: "01", label: "Implementation", title: "CI/CD Setup", content: "Design and implement entire setups and manage sophisticated pipelines according to custom requirements.", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop" },
      { id: "02", label: "Auditing", title: "Pipeline Auditing", content: "In-depth assessment and enhancing of existing pipelines to ensure efficiency and dependability.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
      { id: "03", label: "Training", title: "CI/CD Training", content: "Enabling your crew to skillfully handle, execute and manage expanding pipelines.", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  "containerization": {
    heroTitle: "Containerization & Orchestration",
    heroDesc: "Future-Proof Business With Advanced Containerization And Orchestration. Take advantage of technology to make your traditional business more scalable and resilient through advanced technologies.",
    introTitle: "Future-Proof Your Business With Perfect Solutions",
    introDesc: "Leverage modern legacy applications by containerizing to acquire portability, scalability, and faster deployments. Our solutions ensure your infrastructure is ready for the demands of a highly variable environment.",
    faqs: [
      { q: "Why is Containerization essential for enterprises?", a: "Containerization enables enterprises to enhance portability, consistency, and scalability. It simplifies developer workflows since applications behave as expected across varying environments without hardware provisioning concerns." },
      { q: "How does container orchestration help scale an application?", a: "Platforms like Kubernetes automatically scale containers based on demand. The number of running containers increases or decreases depending on traffic, ensuring the application remains active and efficient under any load." },
      { q: "Do microservices exist and how do they relate to containerization?", a: "Microservices split a single application into small, independently deployable services. Containers are perfect for this architecture as they encapsulate each service for independent deployment and scaling." },
      { q: "In what ways do containers enhance DevOps?", a: "Containers eliminate variations between development, testing, and production environments. This consistency speeds up the release cycle and improves the relationship between development and operations." },
      { q: "What is the significance of container networking?", a: "Container networking (via CNI plugins) allows containers to communicate with each other and the internet securely. It orchestrates resources and external access without compromising safety or expansion." }
    ],
    deploymentModels: [
      { title: "Legacy Containerization", desc: "Modernize legacy apps for portability, scalability, and faster deployments." },
      { title: "Kubernetes Management", desc: "Automated, holistic deployments of applications across diverse environments." },
      { title: "Helm Chart Packaging", desc: "Simplify Kubernetes applications with constant packaging and configuration." },
      { title: "Multi-Cluster Strategy", desc: "Fault-tolerant management of multiple clusters for optimal resource utilization." }
    ],
    processSteps: [
      { id: "01", title: "Auto-Scaling Solutions", desc: "Optimizing resource usage for high availability and efficient performance under varied loads." },
      { id: "02", title: "Secure Image Management", desc: "Building integrity and safety into all container lifecycle phases with strong security." },
      { id: "03", title: "Resource Optimization", desc: "Ensuring all aspects of the application are packaged together for quick deployment." },
      { id: "04", title: "Continuous Improvement", desc: "Adopting the latest orchestration strategies so you always have the most effective approaches." }
    ],
    partnerSection: {
      title: "Turning Potential Into Performance",
      desc: "Our expertise in Docker, Kubernetes, and Docker Swarm ensures your goals turn into reality with real-world impact.",
      strengths: [
        { title: "Skillful Resource Utilization", desc: "Greatly enhance efficiency by packaging application aspects together for easier scaling." },
        { title: "Shorter Lead-Time to Market", desc: "Streamlined processes ensuring new features and patches are released in record time." },
        { title: "Better Fault Tolerance", desc: "High availability through automated failover systems and self-recovery processes." },
        { title: "Automatic Scaling", desc: "Strategies that increase or decrease resources as traffic changes without external control." },
        { title: "Security Best Practices", desc: "Strong practices including image scanning, RBAC, and network segmentation." },
        { title: "Seamless DevOps Integration", desc: "Congruency with established CI/CD pipelines to shorten delivery periods." }
      ]
    },
    tabs: [
      { id: "01", label: "Expertise", title: "Leading Technologies", content: "Adept in using advanced tools like Docker and Kubernetes to ensure your applications are managed with the best available tech.", image: "https://images.unsplash.com/photo-1605745341117-9575522cd999?q=80&w=800&auto=format&fit=crop" },
      { id: "02", label: "Support", title: "End-to-End Support", content: "From primary consultation and architecture design to implementation and 24/7 monitoring.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" },
      { id: "03", label: "Reliability", title: "Proven Track Record", content: "Long-standing practice of adopting containerized solutions across multiple sectors for high-speed applications.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  // 11. SITE RELIABILITY ENGINEERING
  "site-reliabilityengineering": {
    heroTitle: "Site Reliability Engineering",
    heroDesc: "Achieve Unmatched Reliability With Secure SRE Solutions! Turn to SRE services to ensure the best possible performance that is scalable, secure, and efficient.",
    introTitle: "Your Path To Progress Starts With The Right Solution",
    introDesc: "Our SRE approach focuses on infrastructure performance tuning, scaling, and fault-tolerance engineering. We develop systems that expand capacity appropriately with demand while retaining the capacity to adapt to faults for uninterrupted service.",
    faqs: [
      { q: "Why is automation important in Site Reliability Engineering?", a: "Automation is essential in SRE to reduce manual interventions, decrease human error, and improve operational efficiency. By automating tasks such as monitoring, scaling, and incident response, teams can focus on higher-value activities like improving system design." },
      { q: "What is an error budget in SRE?", a: "An error budget is the permissible level of system failure allowed while still meeting SLOs. It balances innovation and reliability; if the budget is exceeded, focus shifts from new features to improving system stability." },
      { q: "What is the primary goal of Site Reliability Engineering?", a: "The primary goal is to ensure services are reliable, scalable, and performant. SRE combines software engineering and systems operations to automate and improve reliability, ensuring systems meet SLOs without sacrificing speed." },
      { q: "What is the role of monitoring and observability in SRE?", a: "Monitoring provides real-time alerts based on key metrics, while observability gives deeper insights into system behavior. This data helps SREs respond to incidents, improve performance, and measure progress toward reliability targets." },
      { q: "How does an SRE team collaborate with development teams?", a: "SRE teams provide feedback on reliability, help define SLOs, and co-design resilient applications. They offer insights from incident postmortems to improve the development process and prevent future production issues." }
    ],
    deploymentModels: [
      { title: "SLO & SLI Management", desc: "Set measurable targets to achieve ideal system reliability and user satisfaction." },
      { title: "Disaster Recovery", desc: "Strategies that minimize downtime and allow quick recovery from possible failures." },
      { title: "Capacity Planning", desc: "Determining requirements and stress testing to ensure scalability during peak demand." },
      { title: "Fault-Tolerance Engineering", desc: "Developing systems that adapt to faults for uninterrupted service." }
    ],
    processSteps: [
      { id: "01", title: "Incident Postmortem", desc: "Investigating and documenting root causes to enhance future response strategies." },
      { id: "02", title: "Performance Tuning", desc: "Optimizing resources and configurations to reduce latency and raise efficiency." },
      { id: "03", title: "Proactive Monitoring", desc: "Detecting and addressing issues before they impact users or business operations." },
      { id: "04", title: "Data-Driven Insights", desc: "Using in-depth analytics to offer actionable insights for system improvement." }
    ],
    partnerSection: {
      title: "Accelerating Business Growth",
      desc: "Our expertise ensures limitless possibilities through automation, efficiency, and data-driven decision making.",
      strengths: [
        { title: "Automation and Efficiency", desc: "Automating repetitive tasks to prevent human errors and improve operations." },
        { title: "Improved System Reliability", desc: "Minimizing downtime and ensuring systems are always available for users." },
        { title: "Faster Incident Recovery", desc: "Established response protocols that minimize service interruptions." },
        { title: "Reduced Technical Debt", desc: "Addressing underlying health issues to prevent debt accumulation over time." },
        { title: "Cost Efficiency", desc: "Improving resource utilization and reducing waste to lower operational costs." },
        { title: "Cross-functional Collaboration", desc: "Collaborative workflows between Dev, Ops, and SRE for smooth deployments." }
      ]
    },
    tabs: [
      { id: "01", label: "Reliability", title: "Proactive Problem-Solving", content: "Utilizing automation and alerting to catch problems before they reach end-users, facilitating proactive solutions.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
      { id: "02", label: "Strategy", title: "Resilience & Recovery", content: "Implementing effective disaster recovery and failover strategies to ensure services remain resilient.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" },
      { id: "03", label: "Metrics", title: "SLIs, SLOs, and SLAs", content: "Defining and tracking reliability standards to ensure performance targets are always met.", image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  // 12. MONITORING & LOGGING
  "monitoring-logging": {
    heroTitle: "Monitoring & Logging",
    heroDesc: "Master The Art Of Performance With Real-Time Monitoring & Logging. Increase effectiveness in performance management and troubleshooting through solutions that provide real-time visible information.",
    introTitle: "Transforming Possibilities Into Realities",
    introDesc: "Our monitoring and logging solutions offer real-time insights into your application's lifecycle. By leveraging centralized logging and predictive analytics, we help you discover problems early, optimize system performance, and ensure a seamless user experience.",
    faqs: [
      { q: "What is meant by APM (Application Performance Monitoring) in DevOps?", a: "APM instruments innovate and assess dynamic applications in real-time. They manage the end-user experience by locating bottlenecks and improving application performance through transaction traces, response time analysis, and correlated server-side metrics." },
      { q: "What role do AI/ML technologies play in DevOps for monitoring purposes?", a: "AI/ML procedures streamline the detection and evaluation of anomalies, help in early failure prognosis, and manage the escalation of issues. This leads to quicker response times and promotes the overall efficiency of DevOps teams." },
      { q: "How important is continuous monitoring in DevOps?", a: "Continuous monitoring ensures that applications and infrastructure are tracked at every stage. It enables real-time assessment of performance, security, and operational readiness, promoting rapid resolution of challenges." },
      { q: "Can DevOps monitoring be utilized for compliance management purposes?", a: "Yes, monitoring systems verify adherence to internal policies and external norms like GDPR or HIPAA by generating extensive logs, relevant metrics, and security notifications suitable for audits and reporting." }
    ],
    deploymentModels: [
      { title: "Real-Time APM", desc: "Monitor application behavior in real-time to ensure optimal user experience and systemic health." },
      { title: "Centralized Logging", desc: "Collect and process logs from diverse sources using ELK or Splunk for streamlined debugging." },
      { title: "Proactive Alerting", desc: "Setup of incident management systems to catch and resolve issues before they escalate." },
      { title: "Predictive Analytics", desc: "Identify possible issues before they affect performance using advanced data patterns." }
    ],
    processSteps: [
      { id: "01", title: "Infrastructure Monitoring", desc: "Tracking the health of underlying hardware to ensure stability and resource utilization." },
      { id: "02", title: "Dashboard Creation", desc: "Developing intuitive visualizations for critical application metrics and performance indicators." },
      { id: "03", title: "Log Analysis", desc: "Real-time analysis to detect security threats and troubleshoot complex system problems." },
      { id: "04", title: "Cost Optimization", desc: "Using detailed system insights to eliminate wasteful spending and optimize resource usage." }
    ],
    partnerSection: {
      title: "Streamlining Success With Every Step",
      desc: "Our success is rooted in your commitment. We provide technology that works and results that matter for long-term growth.",
      strengths: [
        { title: "Increased Visibility", desc: "Gain real-time insights into the entire lifecycle to fix problems on time." },
        { title: "Faster Incident Resolution", desc: "Detect and resolve incidents quickly to minimize downtime and system failure." },
        { title: "Optimal System Performance", desc: "Continuous tracking to optimize systems for maximum efficiency and scalability." },
        { title: "Enhanced Collaboration", desc: "Bridges the gap among teams by providing a transparent and shared data environment." },
        { title: "Culture Change", desc: "Harmonizes development and operations through a collaborative and productive atmosphere." },
        { title: "Minimum Downtime", desc: "Proactive detection ensures services remain reliable and available to customers." }
      ]
    },
    tabs: [
      { id: "01", label: "APM", title: "Application Performance", content: "Identify bottlenecks and optimize performance for a seamless user experience using advanced APM tools.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
      { id: "02", label: "Infrastructure", title: "Stability & Health", content: "Tracks the health of your underlying infrastructure, ensuring stability and optimal resource utilization.", image: "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=800&auto=format&fit=crop" },
      { id: "03", label: "Logging", title: "Log Analysis", content: "Collects and analyzes logs in real-time to ensure security and troubleshoot problems across the system.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop" }
    ]
  }
};

// --- SUB-COMPONENTS (Accordion & Tabs) ---
const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-slate-50 dark:bg-[#0f0518] border-fuchsia-500/30' : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10'}`}>
          <button onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)} className="flex items-center justify-between w-full p-6 text-left hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
            <span className={`text-lg font-semibold transition-colors duration-300 ${openIndex === idx ? 'text-fuchsia-600 dark:text-fuchsia-400' : 'text-slate-800 dark:text-white'}`}>{item.q}</span>
            <span className={`transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-fuchsia-500' : 'text-slate-400 dark:text-white'}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </span>
          </button>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-white leading-relaxed border-t border-slate-200 dark:border-white/5">
                  <div className="pt-4 font-light">{item.a}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const TabSection = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-slate-100 dark:bg-[#0f0518]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative shadow-xl dark:shadow-2xl">
       <div className="relative z-10">
          <div className="flex flex-wrap gap-8 border-b border-slate-300 dark:border-white/10 mb-12">
            {tabs.map((tab, idx) => (
              <button key={idx} onClick={() => setActiveTab(idx)} className={`pb-4 text-sm font-bold tracking-widest uppercase transition-all relative ${activeTab === idx ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}>
                <span className={`mr-2 ${activeTab === idx ? 'text-fuchsia-600 dark:text-fuchsia-400' : 'text-slate-400 dark:text-white'}`}>0{idx + 1}</span> {tab.label}
                {activeTab === idx && <motion.div layoutId="tabUnderline" className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-fuchsia-500" />}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 relative group">
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
               <motion.img key={activeTab} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} src={tabs[activeTab].image} alt={tabs[activeTab].title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
             </div>
             <div>
               <motion.h3 key={`h-${activeTab}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">{tabs[activeTab].title}</motion.h3>
               <motion.p key={`p-${activeTab}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-slate-600 dark:text-white text-lg leading-relaxed font-light">{tabs[activeTab].content}</motion.p>
               <button className="mt-8 px-6 py-2 rounded-full border border-slate-300 dark:border-white/10 text-sm font-bold text-slate-700 dark:text-white hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">Explore Capability</button>
             </div>
          </div>
       </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const basicService = servicesData.find((s) => String(s.id) === String(id));
  let richData = richServiceData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!basicService && !richData) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#050011] flex flex-col items-center justify-center text-slate-900 dark:text-white">
        <h2 className="text-4xl font-bold mb-4 text-fuchsia-600 dark:text-fuchsia-500">Service Not Found</h2>
        <button onClick={() => navigate('/services')} className="px-6 py-3 bg-fuchsia-600 rounded-full text-white font-bold hover:bg-fuchsia-500 transition-colors">Back to Services</button>
      </div>
    );
  }

  const content = richData || {
    heroTitle: basicService?.title || "Service Details",
    heroDesc: basicService?.desc || "",
    introTitle: `About ${basicService?.title}`,
    introDesc: basicService?.details || "",
    faqs: [],
    deploymentModels: [],
    processSteps: [],
    partnerSection: { title: "Why Choose Us?", desc: "", strengths: [] },
    tabs: []
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative selection:bg-fuchsia-500/30 bg-white dark:bg-[#050011] transition-colors duration-500 text-slate-900 dark:text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-200 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-fuchsia-200 dark:bg-fuchsia-900/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-overlay"></div>
      </div>

      <Header />

      <main className="flex-grow pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-32">
          
          <section className="text-center">
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 backdrop-blur-md mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-fuchsia-600 dark:text-fuchsia-300 uppercase tracking-wider">Service Details</span>
             </motion.div>
             <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">{content.heroTitle}</motion.h1>
             <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-600 dark:text-white font-light max-w-3xl mx-auto leading-relaxed">{content.heroDesc}</motion.p>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 relative lg:sticky lg:top-32 h-fit">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">{content.introTitle}</h2>
              <p className="text-lg text-slate-600 dark:text-white leading-relaxed text-justify font-light">{content.introDesc}</p>
              <div className="pt-4">
                 <button className="px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold rounded-lg transition-all shadow-lg border border-white/10">Connect Us</button>
              </div>
            </div>
            <div>
              <FAQAccordion items={content.faqs} />
            </div>
          </section>

          {content.deploymentModels && content.deploymentModels.length > 0 && (
            <section>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Solving Complex Challenges</h2>
                <p className="text-slate-600 dark:text-white">Smart solutions tailored for your business needs.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.deploymentModels.map((model, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="p-8 rounded-[2rem] bg-white dark:bg-[#0f0518] border border-slate-200 dark:border-white/5 hover:border-fuchsia-500/30 transition-all group">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-fuchsia-600 transition-colors">{model.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-white leading-relaxed">{model.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {content.processSteps && content.processSteps.length > 0 && (
            <section className="bg-slate-50/50 dark:bg-[#0f0518]/60 border border-slate-200 dark:border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-xl">
              <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Delivering Excellence</h2>
                <p className="text-slate-600 dark:text-white">Efficient, Seamless, and Tailored to Your Needs.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {content.processSteps.map((step, idx) => (
                  <div key={idx} className="relative group">
                    <div className="text-6xl font-bold text-slate-200 dark:text-white/5 absolute -top-4 -left-2 z-0">{step.id}</div>
                    <div className="relative z-10 pt-8 pl-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-fuchsia-500 to-transparent mb-4 rounded-full"></div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-white leading-relaxed font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {content.partnerSection && (
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-1 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{content.partnerSection.title}</h2>
                  <p className="text-slate-600 dark:text-white leading-relaxed text-justify font-light">{content.partnerSection.desc}</p>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {content.partnerSection.strengths.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl border border-transparent hover:border-slate-200 transition-colors group">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:text-white transition-all">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h4 className="text-slate-800 dark:text-white font-bold mb-1 group-hover:text-fuchsia-600 transition-colors">{item.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-white leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </section>
          )}

          {content.tabs && content.tabs.length > 0 && (
            <section><TabSection tabs={content.tabs} /></section>
          )}
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServiceDetails;