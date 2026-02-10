export const en = {
  common: {
    siteTitle: 'Portfolio – Fullstack Developer',
  },
  nav: {
    items: [
      { id: 'hero', label: 'Home' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
  },
  hero: {
    eyebrow: 'Fullstack Developer',
    title: 'Miqueas Moreno', // TODO: Replace "Your Name" with your real name
    subtitle:
      'Where I am from, what I did, what I am doing right now, and where I am going',
    ctaContact: 'Get in touch',
  },
  keyboardGuide: {
    title: 'Keyboard Navigation',
    shortcuts: [
      { keys: ['↑', '↓', '←', '→'], description: 'Navigate elements' },
      { keys: ['Tab'], description: 'Form inputs' },
      { keys: ['1-9'], description: 'Jump to section' },
      { keys: ['L'], description: 'Toggle language' },
      { keys: ['Enter'], description: 'Activate' },
      { keys: ['Esc'], description: 'Close' },
    ],
  },
  about: {
    heading: 'Personal information',
    nameLabel: 'Name',
    roleLabel: 'Role',
    name: 'Your full name here', // TODO: replace with your real name
    role: 'Fullstack Developer',
    summary:
      '',
    principlesTitle: 'How I work',
    principles: [
      'Problem-first mindset: understand the real need before choosing tools.',
      'Balance of pragmatism and quality: ship value quickly without sacrificing long-term maintainability.',
      'Strong fundamentals: separation of concerns, clear interfaces, and defensive code.',
    ],
  },
  contactInfo: {
    heading: 'Contact information',
    emailLabel: 'Email',
    emailValue: 'testing@example.com', // TODO: replace with your real email
    linkedinLabel: 'LinkedIn',
    linkedinUrl: 'https://www.linkedin.com/in/your-profile', // TODO
    githubLabel: 'GitHub',
    githubUrl: 'https://github.com/your-username', // TODO
    otherHeading: 'Other platforms',
    otherItems: ['Add portfolio links, dev communities, or speaking profiles here.'],
    tooltipEmail: 'Click to copy email',
    tooltipLinkedIn: 'View profile',
    tooltipGitHub: 'View repositories',
    copied: 'Copied',
    failed: 'Failed',
    viewProfile: 'View professional profile',
    viewRepositories: 'Browse repositories & contributions',
    connectText: 'Choose your preferred way to connect',
  },
  projects: {
    heading: 'Projects',
    intro:
      'A selection of projects that highlight how I design, implement, and ship production-ready solutions.',
    cards: [
      {
        id: 'proj-1',
        name: 'Project One',
        role: 'Fullstack Developer',
        summary: 'Brief description of the project, audience, and main value delivered.',
        technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
        githubUrl: 'https://github.com/your-username/project-one', // TODO
        liveUrl: 'https://example.com/project-one', // TODO
        image: {
          src: '/images/projects/project-one-thumb.jpg', // TODO: add image in public/images/projects/
          alt: 'Screenshot of Project One interface',
        },
        caseStudy: {
          problem:
            'Short description of the main problem or challenge this project was solving for users or the business.',
          requirements:
            'Key functional and non-functional requirements, including performance, accessibility, and constraints.',
          decisions:
            'Important technical and design decisions, trade-offs made, and why they were chosen over alternatives.',
          technologies:
            'Explanation of why this stack (e.g. Astro, TypeScript, Tailwind) was appropriate for the project goals.',
          approach:
            'High-level description of the solution architecture, responsibilities of main components, and data flow.',
          results:
            'Measurable or observable impact: performance improvements, user feedback, maintainability, or reliability gains.',
        },
      },
      {
        id: 'proj-2',
        name: 'Project Two',
        role: 'Backend & API design',
        summary: 'Another example that focuses on API design, performance, or integrations.',
        technologies: ['Node.js', 'PostgreSQL'],
        githubUrl: 'https://github.com/your-username/project-two', // TODO
        liveUrl: '',
        image: {
          src: '/images/projects/project-two-thumb.jpg', // TODO
          alt: 'Diagram or dashboard related to Project Two backend/API work',
        },
        caseStudy: {
          problem:
            'Core backend or API problem, such as performance bottlenecks, unreliable integrations, or scaling needs.',
          requirements:
            'Throughput, latency, reliability, and integration requirements that shaped the system design.',
          decisions:
            'Key decisions around database modeling, API contracts, error handling, and observability.',
          technologies:
            'Reasons for using Node.js, PostgreSQL, and any related infra or tooling in this context.',
          approach:
            'How the solution was structured: layers, patterns, and how changes were tested and rolled out.',
          results:
            'Concrete improvements such as reduced response times, fewer incidents, or faster feature delivery.',
        },
      },
    ],
    caseStudyStructure: {
      problem: 'Problem / challenge',
      requirements: 'Requirements & constraints',
      decisions: 'Technical & design decisions',
      technologies: 'Technologies & why they were chosen',
      approach: 'Solution approach',
      results: 'Results & impact',
    },
  },
  // experience section intentionally omitted from UI for now to keep the portfolio focused on projects
  experience: {
    heading: 'Experience',
    intro:
      'Experience that shaped how I design systems, work with teams, and deliver reliable software.',
    items: [
      {
        id: 'exp-1',
        role: 'Software Engineer / Fullstack',
        company: 'Your Company or Project', // TODO
        period: 'YYYY  YYYY', // TODO
        summary:
          'Short description of your responsibilities, ownership areas, and type of products you worked on.',
        highlights: [
          'Designed and implemented features across the stack (frontend, backend, data).',
          'Improved performance, observability, or reliability in existing systems.',
        ],
      },
    ],
  },
  contactSection: {
    heading: 'Contact',
    intro:
      'Interested in collaborating, hiring, or discussing a project? Use the form below or reach out directly via email.',
    visualHint: "Let's build something great together",
    form: {
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitLabel: 'Open email client',
      helperText:
        'This form does not store data. It opens your email client so you stay in control of what you send.',
    },
  },
};

export type EnDict = typeof en;
