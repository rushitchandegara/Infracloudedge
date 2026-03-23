import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useTheme } from '../context/ThemeContext';
import { servicesData } from '../constants';

// --- RICH CONTENT DATA (All content preserved exactly) ---
const richServiceData = {
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
      desc: "With more than 14+ years of Cloud IT consulting experience, our team has earned a reputation for being trustworthy. We have mastered the art and craft of delivering cloud services in USA, Australia, India, and other countries worldwide that drive innovation, efficiency, and productivity.",
      strengths: [
        { title: "Energy-Smart Cloud:", desc: "Through smart cloud optimization and responsible tech choices, we help you meet your sustainability goals." },
        { title: "Multi-Cloud Expertise:", desc: "We are experts in AWS, Azure, GCP, and beyond to help you with seamless cloud transition." },
        { title: "24/7 Support:", desc: "Continuous support and uninterrupted monitoring ensure smooth functioning." },
        { title: "Cloud Defense:", desc: "Trust our cloud professional services to fortify your environment with top-tier security protocols." },
        { title: "Agile Evolution:", desc: "We are well-versed in the cloud-native strategies that bring about undisputed agility." },
        { title: "Future-Proof:", desc: "Modernize your cloud computing software solutions to boost performance and cut unnecessary costs." }
      ]
    }
  },
  "migration-integration": {
    heroTitle: "Migration & Integration",
    heroDesc: "Seamlessly transition legacy systems to the cloud with zero disruption. We handle the complexity so you can focus on innovation.",
    introTitle: "Risk-Free Cloud Migration",
    introDesc: "Moving to the cloud doesn't have to be risky. We utilize proven methodologies (Rehost, Refactor, Rearchitect) to migrate your applications and data. Our automated validation tools ensure 100% data integrity and minimal downtime during the cutover.",
    faqs: [
       { q: "Fully Managed IT", a: "Enhance your business operations with our top-tier IT management services, backed by cutting-edge tools, expert guidance, and round-the-clock managed IT support." },
       { q: "Cybersecurity Solutions", a: "Protect your business from cyber threats with our comprehensive cybersecurity solutions. Our expert team implements advanced measures, including firewalls, antivirus software, and intrusion detection." },
       { q: "Cloud Services", a: "Leverage the power of cloud computing for your business. Our cloud services include cloud migration, management, and optimization." },
       { q: "Remote IT Support", a: "Get instant support no matter where your team is located. Our remote IT support ensures that your employees receive quick assistance." }
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
    }
  },
  "devops-consulting": {
    "heroTitle": "DevOps Consulting",
    "heroDesc": "Deliver Faster, Innovate Smarter With DevOps Excellence. Transform your development pipeline with mastery.",
    "introTitle": "Accelerate Your Delivery",
    "introDesc": "We evaluate your current processes to identify strengths and opportunities. By integrating the right toolchains and fostering a collaborative culture, we streamline tasks to improve team efficiency and consistency across your development pipelines.",
    "faqs": [
      { "q": "Why use Compufy for DevOps?", "a": "We provide customized solutions that create greater collaboration and faster delivery tailored to your business goals." },
      { "q": "Core Strategy Elements", "a": "Our holistic strategy involves CI/CD, infrastructure automation, and continuous monitoring." },
      { "q": "Process Improvement", "a": "DevOps enhances development by promoting automation and removing bottlenecks for reliable deployment." },
      { "q": "Timeline for Results", "a": "Impacts typically appear within a few weeks to a few months depending on project scope." }
    ],
    "deploymentModels": [
      { "title": "Time & Material", "desc": "Flexible resource allocation for projects with evolving requirements." },
      { "title": "SOW-based", "desc": "Fixed-price model with a clear scope and delivery plan for total control." },
      { "title": "Build, Operate & Transfer", "desc": "We establish and manage your offshore center before handing over a mature project." },
      { "title": "Risk-Free Trial", "desc": "Onboard expert developers with a 2-week trial period to ensure a perfect match." }
    ],
    "processSteps": [
      { "id": "01", "title": "Discovery", "desc": "Assessing existing practices and exploring pain points." },
      { "id": "02", "title": "Roadmap", "desc": "Defining a tailored strategy that fits your business objectives." },
      { "id": "03", "title": "Implementation", "desc": "Automating CI/CD pipelines and Infrastructure as Code (IaC)." },
      { "id": "04", "title": "Optimization", "desc": "Monitoring performance and scaling solutions as your business grows." }
    ],
    "partnerSection": {
      "title": "Innovation Driven",
      "desc": "From code to deployment, we deliver solutions that evolve with you.",
      "strengths": [
        { "title": "Quality", "desc": "Minimal downtime with automated workflows." },
        { "title": "Security", "desc": "Maximum protection using high-tech protocols." },
        { "title": "Speed", "desc": "Faster time-to-market through agile workflows." },
        { "title": "Scale", "desc": "Economical growth with automated provisioning." }
      ]
    }
  },
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
    }
  },
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
    }
  },
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
    }
  },
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
    }
  },
  "sre-consulting": {
    heroTitle: "Zero Servers, Infinite Possibilities, Future-Proof App Deployment",
    heroDesc: "Use serverless architecture to avoid limits when it comes to deploying applications in the years to come.",
    introTitle: "Turning Ambitions Into Achievements With Smart Solutions",
    introDesc: "Design Scalable, cost-efficient systems that leverage serverless platforms to remove infrastructure management burdens and make applications more flexible.",
    faqs: [
      { q: "How is serverless different from traditional cloud hosting?", a: "In traditional hosting, developers manage infrastructure and scale manually or automatically. In serverless, the cloud provider fully manages scaling and server provisioning." },
      { q: "What programming languages are supported for serverless applications?", a: "Languages supported depend on the provider. Popular options include Python, Java, JavaScript/Node.js, Go, Ruby, and C#." },
      { q: "How are serverless applications billed?", a: "Billing is typically based on the number of requests, execution time, and memory usage of the functions. There are no upfront or idle charges." },
      { q: "How do I monitor and troubleshoot serverless applications?", a: "Monitoring tools like AWS CloudWatch, Azure Monitor, or third-party solutions like Datadog can help track performance, log errors, and analyze resource usage." },
      { q: "Can serverless support databases?", a: "Yes, serverless applications can integrate with databases like Amazon DynamoDB, Firebase, or Aurora Serverless. Traditional databases can also be used, though they may require additional configuration." }
    ],
    deploymentModels: [
      { title: "AWS Lambda & Azure Functions", desc: "Executing the code on AWS or Azure Functions as an event occurs, without the necessity of purchasing or maintaining physical servers." },
      { title: "Serverless Framework Integration", desc: "Use of the Serverless Framework for streamlined deployment, management, and monitoring of serverless applications across multiple cloud providers." },
      { title: "Event-Driven Deployments", desc: "Architecting systems that automatically trigger functions in response to events such as HTTP requests, database updates, or message queues." },
      { title: "API Gateway Configuration", desc: "Configuration of API Gateway for managing, routing, and securing API requests against serverless functions that would thus be perfectly integrated with the clients." }
    ],
    processSteps: [
      { id: "01", title: "Resource Constraints", desc: "Serverless platforms possess resource limits, making the design of applications optimal." },
      { id: "02", title: "Security Risks", desc: "Due to shared infrastructure and potential exposures, data security and access controls must be sound." },
      { id: "03", title: "Interoperability with Legacy", desc: "Connecting the new serverless application with the old legacy system is not an easy task and time-consuming." },
      { id: "04", title: "Local Development with Testing and Debug", desc: "Simulating the serverless production environment is challenging for localized debugging and testing purposes." },
      { id: "05", title: "Limited Execution Time", desc: "Many serverless functions have execution time limits, making them unsuitable for long-running tasks." }
    ],
    partnerSection: {
      title: "Optimizing Your Operations For Peak Performance",
      desc: "Complex Problems, Meets Success",
      strengths: [
        { title: "Cost-Effectiveness", desc: "You only pay for the consumption of resources during the execution of the function, thereby saving idle infrastructure." },
        { title: "Scalability", desc: "Automatic scaling to adapt to peak workloads without human interference to ensure high-performance, especially in situations when there is a traffic surge." },
        { title: "Flexibility in Development", desc: "Enables developers to code in a variety of programming languages and frameworks supported by the serverless platform." },
        { title: "Security", desc: "The serverless model minimizes vulnerabilities by having security features and by executing within an isolated environment." },
        { title: "Simplified Updates and Maintenance", desc: "Automatically managed infrastructure avoids hassle in updates while minimizing efforts toward maintenance." }
      ]
    },
    optimizationSection: {
        title: "Serverless Monitoring & Optimization",
        desc: "Monitoring and optimizing serverless applications through tracking function performance, reducing latency, and ensuring cost-efficiency."
    }
  },
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
    }
  },
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
    }
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
    }
  },
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
    }
  },
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
    }
  }
};

const ServicesPage = () => {
  const { theme } = useTheme();
  const [expandedId, setExpandedId] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [isQuickNavOpen, setIsQuickNavOpen] = useState(false);
  const location = useLocation();
  const sectionRefs = useRef({});

  const isDark = theme === 'dark';

  // SCROLL LOGIC FOR NAVIGATING FROM OTHER PAGES (DROPDOWNS ETC)
  const handleScrollToSection = (id) => {
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
      setTimeout(() => handleScrollToSection(location.state.targetId), 400);
    }
  }, [location]);

  // TOGGLE LOGIC - SIMPLY EXPANDS WITHOUT SCROLLING
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
              Our Expertise
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }} 
              className={`text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}
            >
              Comprehensive Cloud & DevOps solutions engineered for scale, security, and velocity.
            </motion.p>
          </div>
        </section>

        {/* Services Content */}
        <div className="pb-32">
          {servicesData.map((item, index) => {
            const richData = richServiceData[item.id];
            return (
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
                        {index + 1}. Service
                      </span>
                      <h2 className={`text-4xl md:text-7xl font-black mb-6 leading-[1.1] ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
                        {item.title}
                      </h2>
                      <h3 className="text-xl md:text-2xl text-fuchsia-600 dark:text-fuchsia-500 font-bold mb-8 italic">
                        {item.subtitle}
                      </h3>
                      <p className={`text-lg md:text-xl leading-relaxed mb-10 font-medium ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'} opacity-80`}>
                        {item.description}
                      </p>
                      
                      <button 
                        onClick={() => toggleExpand(item.id)}
                        className={`group flex items-center gap-4 px-10 py-4 font-black text-lg rounded-full transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95 ${isDark ? 'bg-[#ffffff] text-[#000000] hover:bg-fuchsia-600 hover:text-[#ffffff]' : 'bg-[#000000] text-[#ffffff] hover:bg-fuchsia-600'}`}
                      >
                        {expandedId === item.id ? 'Read Less' : 'Explore More'}
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
                    {expandedId === item.id && richData && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: 'auto', opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }} 
                        transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className={`pt-20 space-y-24 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                          
                          {/* Intro Section */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="space-y-6">
                              <h4 className={`text-3xl md:text-5xl font-bold tracking-tight ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
                                {richData.introTitle}
                              </h4>
                              <p className={`text-xl opacity-70 leading-relaxed font-light ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
                                {richData.introDesc}
                              </p>
                              
                            </motion.div>

                            {/* FAQ Accordion (Preserved from Detail page) */}
                            <div className="space-y-6">
                              <h5 className="text-2xl font-black mb-6">Common Questions</h5>
                              {richData.faqs?.map((faq, fIdx) => (
                                <div key={fIdx} className={`rounded-[30px] border transition-all duration-300 ${isDark ? 'border-white/10 bg-white/5 hover:bg-white/[0.07]' : 'border-black/5 bg-slate-50 hover:bg-slate-100'}`}>
                                  <button 
                                    onClick={() => setOpenFaq(openFaq === `${item.id}-${fIdx}` ? null : `${item.id}-${fIdx}`)}
                                    className="w-full p-6 flex items-center justify-between text-left"
                                  >
                                    <span className={`text-lg font-black pr-8 ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>{faq.q}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openFaq === `${item.id}-${fIdx}` ? 'rotate-45 bg-fuchsia-600 text-white' : isDark ? 'bg-white/10' : 'bg-black/5'}`}>
                                      <span className="text-2xl">+</span>
                                    </div>
                                  </button>
                                  <AnimatePresence>
                                    {openFaq === `${item.id}-${fIdx}` && (
                                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                        <p className={`p-6 pt-0 text-base leading-relaxed font-medium opacity-70 ${isDark ? 'text-[#ffffff] border-t border-white/5' : 'text-[#000000] border-t border-black/5'}`}>
                                          {faq.a}
                                        </p>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Deployment Models Grid */}
                          {richData.deploymentModels && (
                            <section>
                              <h4 className={`text-3xl md:text-5xl font-black mb-16 text-center tracking-tighter ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>Solving Complex Challenges</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {richData.deploymentModels.map((model, mIdx) => (
                                  <div key={mIdx} className={`p-8 rounded-[40px] border transition-all duration-500 ${isDark ? 'bg-white/5 border-white/10 hover:border-fuchsia-500' : 'bg-slate-50 border-black/5 hover:border-fuchsia-600'}`}>
                                    <h5 className="text-xl font-black mb-4">{model.title}</h5>
                                    <p className="opacity-70 leading-relaxed text-sm">{model.desc}</p>
                                  </div>
                                ))}
                              </div>
                            </section>
                          )}

                          {/* Process Steps Section */}
                          {richData.processSteps && (
                            <section className={`p-10 md:p-20 rounded-[60px] border ${isDark ? 'bg-fuchsia-600/5 border-fuchsia-500/10' : 'bg-slate-50 border-black/5'}`}>
                              <h4 className={`text-3xl md:text-5xl font-black mb-16 text-center tracking-tighter ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>Delivering Excellence</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                                {richData.processSteps.map((step, sIdx) => (
                                  <div key={sIdx} className="relative pt-8">
                                    <span className={`text-8xl font-black absolute -top-4 -left-4 leading-none opacity-10 ${isDark ? 'text-fuchsia-500' : 'text-fuchsia-600'}`}>{step.id}</span>
                                    <h5 className={`font-black text-xl mb-4 relative z-10 ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>{step.title}</h5>
                                    <p className={`text-base leading-relaxed font-medium opacity-70 ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>{step.desc}</p>
                                  </div>
                                ))}
                              </div>
                            </section>
                          )}

                          {/* Partner Section */}
                          {richData.partnerSection && (
                            <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 py-12 border-t border-white/10">
                              <div className="lg:col-span-1 space-y-6">
                                <h4 className="text-3xl md:text-4xl font-black">{richData.partnerSection.title}</h4>
                                <p className="opacity-70 leading-relaxed text-justify">{richData.partnerSection.desc}</p>
                              </div>
                              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {richData.partnerSection.strengths.map((str, strIdx) => (
                                  <div key={strIdx} className={`p-6 rounded-3xl border-l-8 border-fuchsia-600 transition-transform hover:translate-x-2 ${isDark ? 'bg-white/[0.03]' : 'bg-slate-50'}`}>
                                    <h5 className="font-black text-xl mb-2">{str.title}</h5>
                                    <p className="text-sm opacity-70 leading-relaxed">{str.desc}</p>
                                  </div>
                                ))}
                              </div>
                            </section>
                          )}

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </section>
            );
          })}
        </div>

        <Footer />
      </div>

      {/* QUICK NAVIGATION */}
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
                Jump to Service
              </div>
              <div className="p-4 flex flex-col gap-2 max-h-[400px] overflow-y-auto">
                {servicesData.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleScrollToSection(s.id)}
                    className={`text-left px-6 py-4 text-sm font-black rounded-2xl transition-all flex items-center justify-between group ${isDark ? 'text-[#ffffff] hover:bg-white/10' : 'text-[#000000] hover:bg-black/5'}`}
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
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 z-[101] ${isDark ? 'bg-[#ffffff] text-[#000000] shadow-purple-500/20' : 'bg-[#000000] text-[#ffffff] shadow-black/20'}`}
        >
          {isQuickNavOpen ? (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          )}
        </button>
      </div>

    </div>
  );
};

export default ServicesPage;