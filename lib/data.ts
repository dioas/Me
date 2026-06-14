export const profile = {
  name: 'Dio Adhita Saputra',
  role: 'Senior Frontend Developer',
  location: 'Jakarta, Indonesia',
  email: 'dio.adhita@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dio-adhita-saputra',
  github: 'https://github.com/dioas',
  cvUrl: '/Dio-Adhita-Saputra-CV.pdf',
  photo: '/dio.jpg',
  tagline:
    'I build high-performance web applications that serve millions of users.',
  summary:
    "I'm a frontend developer who has spent the last decade turning complex product ideas into fast, reliable web apps. These days I'm at tiket.com, Indonesia's largest travel platform, where the things I build reach millions of users. I enjoy the less glamorous parts of the craft — shaving milliseconds off load times, building design systems teams actually like using, and shaping architecture so squads can ship without stepping on each other.",
};

export const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '90+', label: 'Components Built' },
  { value: '40%', label: 'Performance Gain' },
  { value: '10+', label: 'Apps Delivered' },
];

export const skillGroups = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS'],
  },
  {
    title: 'Frameworks',
    items: ['React 18/19', 'Next.js 14/15', 'Redux', 'Zustand'],
  },
  {
    title: 'Data & APIs',
    items: ['TanStack Query', 'GraphQL (Apollo)', 'REST APIs'],
  },
  {
    title: 'UI & Styling',
    items: ['Material-UI', 'Tailwind CSS', 'SCSS Modules', 'Storybook'],
  },
  {
    title: 'Testing',
    items: ['Jest', 'React Testing Library', 'MSW', 'Cypress'],
  },
  {
    title: 'DevOps & Tools',
    items: ['Webpack 5', 'Vite', 'Docker', 'Jenkins', 'SonarQube', 'Git'],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  context: string;
  current?: boolean;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'tiket.com (PT. Global Tiket Network)',
    period: 'Oct 2019 – Present',
    current: true,
    context:
      "Indonesia's #1 online travel platform serving millions of users for flights, hotels, trains, and events.",
    highlights: [
      'Led design system development with 90+ reusable components used across 10+ applications, reducing development time by 30%.',
      'Architected micro-frontend infrastructure with Webpack Module Federation, enabling 5+ teams to deploy independently.',
      'Optimized Core Web Vitals achieving 40% faster page loads via SSR, code splitting, lazy loading, and bundle optimization.',
      'Built a partner portal serving 500+ event organizers with real-time QR code scanning, handling 10,000+ daily redemptions.',
      'Maintained 80%+ test coverage with automated CI/CD pipelines, reducing production bugs by 50%.',
      'Mentored junior developers and established frontend best practices and coding standards across the team.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Urbanhire',
    period: 'Oct 2017 – Oct 2019',
    context:
      'HR-tech startup empowering companies with recruitment and employer branding solutions.',
    highlights: [
      'Developed recruitment platform features used by 100+ companies to streamline their hiring process.',
      'Established frontend best practices and coding standards across the engineering team.',
      'Optimized application performance, reducing page load time and improving user engagement.',
      'Collaborated closely with Product and Design to deliver intuitive user experiences.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'IndoTrading.com',
    period: 'Dec 2015 – Oct 2017',
    context:
      'B2B e-commerce marketplace connecting Indonesian SMEs with global buyers.',
    highlights: [
      'Built responsive web interfaces using modern JavaScript technologies.',
      'Improved website performance and optimized SEO for better search rankings.',
      'Designed and integrated new technology solutions to enhance platform capabilities.',
      'Researched and implemented UI/UX improvements based on user feedback and analytics.',
    ],
  },
  {
    role: 'Graphic Web Designer',
    company: 'Sukamol',
    period: 'Nov 2014 – Oct 2015',
    context: 'Creative studio delivering web design and visual assets for clients.',
    highlights: [
      'Created web designs and visual assets for client projects.',
      'Developed frontend implementations translating designs into functional interfaces.',
    ],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  metrics: string[];
  stack: string[];
  link?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    title: 'LRT Jabodebek Route & Schedule',
    tagline: 'Side project · Live',
    description:
      'A public web app to check the next LRT Jabodebek train, full schedules, routes, and fares — built to make daily commuting around Jakarta easier and faster.',
    metrics: ['Live in production', 'Public app', 'Real-time schedule'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://lrtroute.my.id/',
    linkLabel: 'lrtroute.my.id',
  },
  {
    title: 'Enterprise Design System',
    tagline: 'Component library at scale',
    description:
      'Architected and led a design system of reusable, accessible components adopted across the entire product suite, documented in Storybook with strict typing and visual regression testing.',
    metrics: ['90+ components', '10+ apps', '-30% dev time'],
    stack: ['React', 'TypeScript', 'Storybook', 'SCSS'],
  },
  {
    title: 'Micro-Frontend Platform',
    tagline: 'Independent team deployments',
    description:
      'Designed a micro-frontend architecture using Webpack Module Federation, letting multiple squads build, version, and ship their slices of the app independently without release bottlenecks.',
    metrics: ['5+ teams', 'Independent deploys', 'Module Federation'],
    stack: ['Webpack 5', 'React', 'Next.js', 'Docker'],
  },
  {
    title: 'Event Partner Portal',
    tagline: 'Real-time ticket redemption',
    description:
      'Built a partner portal for event organizers with real-time QR code scanning and dashboards, reliably processing tens of thousands of ticket redemptions every day.',
    metrics: ['500+ organizers', '10,000+ daily scans', 'Real-time'],
    stack: ['Next.js', 'GraphQL', 'TypeScript'],
  },
  {
    title: 'Core Web Vitals Optimization',
    tagline: 'Performance engineering',
    description:
      'Drove a platform-wide performance initiative with SSR, code splitting, lazy loading, and bundle optimization, dramatically improving load times and Core Web Vitals scores.',
    metrics: ['40% faster loads', 'SSR', 'Better CWV'],
    stack: ['Next.js', 'Webpack', 'React'],
  },
];

export const certifications = [
  'React: Software Architecture',
  'React: Design Patterns',
  'Powering Up With React',
  'Accelerating Through Angular 2',
];

export const education = {
  degree: "Bachelor's Degree, Information Technology",
  school: 'BINUS University',
  period: '2011 – 2015',
};

export const leadership = [
  {
    role: 'Chief Resource Officer',
    org: 'Bina Nusantara Computer Club (BNCC)',
    period: 'Oct 2013 – Sep 2014',
  },
  {
    role: 'Staff of Member Community',
    org: 'Bina Nusantara Computer Club (BNCC)',
    period: 'Jul 2012 – Jul 2013',
  },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];
