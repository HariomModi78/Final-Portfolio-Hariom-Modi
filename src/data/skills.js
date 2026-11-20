export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    badge: 'CORE CODE',
    description: 'Foundational syntax and strong algorithmic logic.',
    skills: [
      { name: 'JavaScript (ES6+)', tag: 'JS', bg: '#F7DF1E', text: '#000', icon: 'Code', role: 'Modern syntax, async/await, closures, and DOM manipulation' },
      { name: 'C++', tag: 'C++', bg: '#00599C', text: '#FFF', icon: 'Cpu', role: 'Data Structures, Algorithms and high-performance computation' },
      { name: 'SQL', tag: 'SQL', bg: '#336791', text: '#FFF', icon: 'Database', role: 'Relational data querying, joins, and schema tables' },
      { name: 'HTML5', tag: 'HTML', bg: '#E34F26', text: '#FFF', icon: 'Layout', role: 'Semantic markup, accessibility, and modern document structuring' },
      { name: 'CSS3', tag: 'CSS', bg: '#1572B6', text: '#FFF', icon: 'Palette', role: 'Flexbox, Grid, custom styling, transitions, and responsive layouts' }
    ]
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    badge: 'END-TO-END',
    description: 'Building cohesive client-to-server web architectures.',
    skills: [
      { name: 'MERN Stack', tag: 'MERN', bg: '#E43D30', text: '#FFF', icon: 'Layers', role: 'MongoDB, Express.js, React.js, and Node.js cohesive stack' },
      { name: 'Full Stack Web Development', tag: 'FULL', bg: '#171717', text: '#FFF', icon: 'Globe', role: 'End-to-end web architecture from frontend UI to database storage' },
      { name: 'REST API Development', tag: 'API', bg: '#E43D30', text: '#FFF', icon: 'Network', role: 'Structured HTTP endpoints, CRUD operations, and JSON contracts' },
      { name: 'SaaS Application Development', tag: 'SaaS', bg: '#2563EB', text: '#FFF', icon: 'Rocket', role: 'Multi-feature web systems with business logic and user accounts' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    badge: 'CLIENT SIDE',
    description: 'Responsive, user-friendly client interfaces and state flow.',
    skills: [
      { name: 'React.js', tag: 'React', bg: '#61DAFB', text: '#000', icon: 'Atom', role: 'Component-driven user interfaces with modular design' },
      { name: 'React Router', tag: 'Router', bg: '#CA4245', text: '#FFF', icon: 'Navigation', role: 'Client-side routing, protected routes, and navigation state' },
      { name: 'Context API', tag: 'State', bg: '#7C3AED', text: '#FFF', icon: 'Boxes', role: 'Global application state management without external overhead' },
      { name: 'Responsive Web Design', tag: 'RWD', bg: '#10B981', text: '#FFF', icon: 'Smartphone', role: 'Cross-device fluid styling and mobile-first layouts' },
      { name: 'EJS', tag: 'EJS', bg: '#B4CA65', text: '#000', icon: 'FileCode2', role: 'Server-side templating engine for rapid SSR web applications' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    badge: 'SERVER SIDE',
    description: 'Server logic, secure authentication, and payment integrations.',
    skills: [
      { name: 'Node.js', tag: 'Node', bg: '#339933', text: '#FFF', icon: 'Server', role: 'Asynchronous event-driven runtime environment' },
      { name: 'Express.js', tag: 'EX', bg: '#222222', text: '#FFF', icon: 'Terminal', role: 'Backend routing, request middleware, and controller logic' },
      { name: 'REST APIs', tag: 'REST', bg: '#E43D30', text: '#FFF', icon: 'Network', role: 'Clean API endpoints with structured request/response cycles' },
      { name: 'JWT Authentication', tag: 'JWT', bg: '#000000', text: '#FFF', icon: 'Key', role: 'Stateless secure authentication and token verification' },
      { name: 'Role-Based Access Control (RBAC)', tag: 'RBAC', bg: '#D97706', text: '#FFF', icon: 'ShieldCheck', role: 'Permission management for admins, organizers, and members' },
      { name: 'Razorpay Payment Integration', tag: 'Pay', bg: '#0C2340', text: '#FFF', icon: 'CreditCard', role: 'Payment order creation, webhooks, and checkout verification' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    badge: 'DATA VAULT',
    description: 'Document and relational data modeling and querying.',
    skills: [
      { name: 'MongoDB', tag: 'Mongo', bg: '#47A248', text: '#FFF', icon: 'Database', role: 'NoSQL document database with Mongoose schemas and relationships' },
      { name: 'SQL', tag: 'SQL', bg: '#336791', text: '#FFF', icon: 'Database', role: 'Relational table design, foreign keys, and structured queries' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    badge: 'DEV GEAR',
    description: 'Version control, API testing, and deployment platforms.',
    skills: [
      { name: 'Git', tag: 'Git', bg: '#F05032', text: '#FFF', icon: 'GitBranch', role: 'Distributed version control and branch management' },
      { name: 'GitHub', tag: 'Hub', bg: '#181717', text: '#FFF', icon: 'Github', role: 'Code repository hosting, version tracking, and collaboration' },
      { name: 'Postman', tag: 'API', bg: '#FF6C37', text: '#FFF', icon: 'Send', role: 'API testing, request collection testing, and debugging' },
      { name: 'VS Code', tag: 'IDE', bg: '#007ACC', text: '#FFF', icon: 'Code2', role: 'Primary development environment with custom workflows' },
      { name: 'Render', tag: 'Deploy', bg: '#46E3B7', text: '#000', icon: 'UploadCloud', role: 'Hosting and deploying full-stack web applications and services' },
      { name: 'Vercel', tag: '▲', bg: '#000000', text: '#FFF', icon: 'Globe', role: 'Frontend deployments and serverless static hosting' }
    ]
  },
  {
    id: 'concepts',
    title: 'Core Computer Science Concepts',
    badge: 'FOUNDATION',
    description: 'Fundamental principles that guide scalable software design.',
    skills: [
      { name: 'Data Structures and Algorithms', tag: 'DSA', bg: '#E43D30', text: '#FFF', icon: 'Cpu', role: 'Arrays, Linked Lists, Trees, Graphs, Sorting, Dynamic Programming' },
      { name: 'Object-Oriented Programming', tag: 'OOP', bg: '#171717', text: '#FFF', icon: 'Boxes', role: 'Encapsulation, Abstraction, Inheritance, and Polymorphism' },
      { name: 'RESTful API Design', tag: 'API', bg: '#2563EB', text: '#FFF', icon: 'Network', role: 'Resource naming, HTTP verb conventions, status codes, and error payloads' },
      { name: 'Authentication and Authorization', tag: 'AUTH', bg: '#059669', text: '#FFF', icon: 'ShieldCheck', role: 'Securing endpoints, password hashing, and token lifecycles' },
      { name: 'Database Schema Design', tag: 'SCHEMA', bg: '#D97706', text: '#FFF', icon: 'Database', role: 'Data normalization, relationship integrity, and indexing strategies' }
    ]
  }
];

export const heroQuickPills = [
  { name: 'JavaScript', tag: 'JS', bg: '#F7DF1E', text: '#000' },
  { name: 'React.js', tag: '⚛️', bg: '#61DAFB', text: '#000' },
  { name: 'Node.js', tag: 'Node', bg: '#339933', text: '#FFF' },
  { name: 'Express.js', tag: 'EX', bg: '#222222', text: '#FFF' },
  { name: 'MongoDB', tag: '🍃', bg: '#47A248', text: '#FFF' },
  { name: 'C++', tag: 'C++', bg: '#00599C', text: '#FFF' },
  { name: 'SQL', tag: 'SQL', bg: '#336791', text: '#FFF' },
  { name: 'REST APIs', tag: 'API', bg: '#E43D30', text: '#FFF' }
];
