import fitCoreImg from '../assets/images/project-fitcore.png';
import maxBattleImg from '../assets/images/project-maxbattle.png';

export const projectCategories = [
  { id: 'all', label: 'All Projects', icon: 'sparkles' },
  { id: 'full-stack', label: 'Full Stack', icon: 'layers' },
  { id: 'saas', label: 'SaaS Platforms', icon: 'server' },
  { id: 'web-apps', label: 'Web Applications', icon: 'globe' },
  { id: 'backend', label: 'Backend & APIs', icon: 'server' }
];

export const projects = [
  {
    id: 'fitcore',
    title: 'FITCORE — MULTI-TENANT SAAS GYM MANAGEMENT',
    brandName: 'FITCORE',
    subtitle: 'B2B Multi-Tenant Gym Operations, Billing & Member Management Platform',
    shortDescription: 'A production-grade multi-tenant B2B SaaS platform for gym owners to manage memberships, staff RBAC, billing, and automated WhatsApp renewal reminders.',
    fullDescription: 'FitCore is a comprehensive full-stack multi-tenant SaaS application designed to digitize end-to-end gym business operations. It features tenant-isolated data models, granular Role-Based Access Control (SuperAdmin, Gym Owner, Staff), an automated nightly background scheduler for membership expiration alerts via the Meta WhatsApp Cloud API, secure Razorpay payment processing with webhook verification, and native MongoDB aggregation pipelines for real-time financial reporting.',
    category: ['full-stack', 'saas', 'web-apps', 'backend'],
    tags: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Razorpay', 'WhatsApp Cloud API', 'JWT'],
    image: fitCoreImg,
    featured: true,
    featuredLabel: 'FLAGSHIP SAAS ★',
    liveUrl: 'https://fitcorefrontend.onrender.com',
    githubFrontend: 'https://github.com/HariomModi78/fitCoreFrontend',
    githubBackend: 'https://github.com/HariomModi78/fitCoreBackend',
    githubUrl: 'https://github.com/HariomModi78/fitCoreFrontend',
    features: [
      'Multi-Tenant SaaS Data Isolation with Tenant Scoping (gymId)',
      'Custom Subscription Paywall Middleware (saasGuard)',
      'Automated Nightly Expiration Scanner & Member Due Tracking',
      'Meta WhatsApp Cloud API Integration with Dynamic Templating',
      'Razorpay Payment Gateway with HMAC-SHA256 Webhook Verification',
      'Automated PDF Invoice & Receipt Generation with PDFKit',
      'High-Performance MongoDB Aggregation Pipelines for Revenue & Cash Flow',
      'Role-Based Access Control (RBAC) with Protected Route Guards'
    ],
    myContributions: [
      'Architected the entire MERN stack multi-tenant application from database schema design to responsive UI.',
      'Designed and implemented RESTful APIs in Node.js & Express with JWT authentication stored in HTTP-Only cookies.',
      'Developed an automated nightly background worker scanning active subscriptions and queueing alert notifications.',
      'Integrated Razorpay payment gateway with cryptographic webhook signature verification and PDFKit receipt streaming.',
      'Engineered optimized MongoDB aggregation queries and compound/TTL database indexes for instant dashboard analytics.'
    ]
  },
  {
    id: 'max-battle',
    title: 'TOURNAMENT ORGANIZING APPLICATION',
    brandName: 'MAX BATTLE',
    subtitle: 'Sports & Esports Tournament Management Platform',
    shortDescription: 'A full-stack web application designed to organize sports and gaming tournaments efficiently.',
    fullDescription: 'Max Battle is a full-stack platform built to streamline the entire lifecycle of competitive sports and gaming tournaments. From automated team sign-ups and bracket scheduling to live result tracking and administrative workflows, it reduces manual coordination overhead for event hosts.',
    category: ['full-stack', 'web-apps', 'backend'],
    tags: ['EJS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    image: maxBattleImg,
    featured: false,
    featuredLabel: 'FEATURED APPLICATION ★',
    liveUrl: 'https://max-battle.onrender.com',
    githubUrl: null, // Configure real GitHub repository URL when public
    features: [
      'Team Registration & Roster Management',
      'Automated Match Scheduling & Brackets',
      'Tournament Result Management & Standings',
      'Tournament Workflow Automation',
      'RESTful API Development with Express.js',
      'Scalable MongoDB Data Modeling'
    ],
    myContributions: [
      'Developed a full-stack application for managing sports and gaming tournaments.',
      'Designed and implemented RESTful APIs using Node.js and Express.js.',
      'Modeled tournament-related data in MongoDB.',
      'Automated tournament workflows to reduce manual management effort for organizers.'
    ]
  }
];
