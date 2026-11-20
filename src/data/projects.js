import maxBattleImg from '../assets/images/project-maxbattle.png';

export const projectCategories = [
  { id: 'all', label: 'All Projects', icon: 'sparkles' },
  { id: 'full-stack', label: 'Full Stack', icon: 'layers' },
  { id: 'web-apps', label: 'Web Applications', icon: 'globe' },
  { id: 'backend', label: 'Backend & APIs', icon: 'server' }
];

export const projects = [
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
    featured: true,
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
