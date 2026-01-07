export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  url?: string;
  category: 'Website Redesign' | 'Web Development' | 'SaaS Platform';
  year: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  images: {
    hero: string;
    before?: string;
    screenshots?: string[];
  };
  featured: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'pearlywrites',
    title: 'PearlyWrites',
    subtitle: 'Complete Website Transformation',
    client: 'PearlyWrites.com',
    url: 'https://www.pearlywrites.com/',
    category: 'Website Redesign',
    year: '2025',
    description:
      'A comprehensive website redesign for a content strategy and SEO consulting business, transforming an outdated WordPress site into a modern, high-converting platform.',
    challenge:
      'The original site was built on an aging WordPress theme with cluttered navigation, poor mobile experience, and slow load times. The dark design with busy imagery made content hard to read and didn\'t reflect the professional quality of the services offered.',
    solution:
      'We rebuilt the site from the ground up using Next.js and modern web technologies. The new design features a clean, light aesthetic with strategic use of teal brand colors, improved information architecture, and mobile-first responsive design. Performance optimizations resulted in sub-second load times.',
    results: [
      'Page load time reduced from 4.2s to under 1s',
      'Mobile usability score improved to 98/100',
      'Bounce rate decreased by 45%',
      'Contact form submissions increased 3x',
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    images: {
      hero: '/images/portfolio/pearlywrites/after-hero.png',
      before: '/images/portfolio/pearlywrites/before-home.webp',
    },
    featured: true,
  },
  {
    id: 'lfg-consulting',
    title: 'LFG Consulting',
    subtitle: 'Brand & Digital Presence',
    client: 'LFG Consulting (Internal)',
    url: 'https://lfgconsultants.com/',
    category: 'Web Development',
    year: '2025',
    description:
      'Our own digital home—a consulting website that showcases our approach to change management, AI workflow integration, and rapid solution development.',
    challenge:
      'As a new consulting practice, we needed a digital presence that would establish credibility, clearly communicate our service offerings, and convert visitors into qualified leads—all while reflecting our modern, forward-thinking approach.',
    solution:
      'We designed and built a performance-optimized Next.js site with smooth animations, integrated scheduling via Cal.com, and a blog platform for thought leadership. The forest-green color palette conveys growth and stability while standing out from typical corporate blue.',
    results: [
      'Lighthouse performance score of 95+',
      'Integrated booking system for consultations',
      'Blog platform for content marketing',
      'SEO-optimized for key service terms',
    ],
    technologies: ['Next.js', 'React', 'Framer Motion', 'Cal.com', 'Tailwind CSS'],
    images: {
      hero: '/images/portfolio/lfg-hero.png',
    },
    featured: true,
  },
  {
    id: 'contractflo',
    title: 'ContractFlo',
    subtitle: 'AI-Powered Contract Management',
    client: 'ContractFlo (Startup)',
    url: 'https://www.contractflo.ai/',
    category: 'SaaS Platform',
    year: '2025',
    description:
      'A contract lifecycle management (CLM) SaaS platform that leverages AI to streamline contract creation, negotiation, and analysis for legal and procurement teams.',
    challenge:
      'Legal teams spend countless hours on repetitive contract tasks—drafting from templates, reviewing for risks, tracking obligations. Existing CLM tools are expensive, complex, and often require significant implementation time.',
    solution:
      'ContractFlo offers an intuitive, AI-first approach to contract management. Key features include intelligent template generation, automated risk analysis, obligation tracking, and a clean interface that requires minimal training. Built for rapid deployment with enterprise-grade security.',
    results: [
      'MVP delivered in 8 weeks',
      'AI-powered clause extraction and analysis',
      'Intuitive dashboard for contract visibility',
      'Enterprise security with SOC 2 readiness',
    ],
    technologies: ['Next.js', 'React', 'OpenAI API', 'PostgreSQL', 'Vercel'],
    images: {
      hero: '/images/portfolio/contractflo-hero.png',
    },
    featured: true,
  },
];

export const capabilities = [
  {
    title: 'Website Design & Development',
    description: 'Modern, responsive websites built with performance and conversion in mind.',
    icon: 'globe',
  },
  {
    title: 'SaaS MVP Development',
    description: 'Rapid prototyping and MVP builds to validate your product ideas quickly.',
    icon: 'rocket',
  },
  {
    title: 'AI Integration',
    description: 'Embedding AI capabilities into existing workflows and applications.',
    icon: 'cpu',
  },
  {
    title: 'Brand Identity',
    description: 'Visual identity systems that communicate your unique value proposition.',
    icon: 'palette',
  },
];
