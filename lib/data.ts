export const PROFILE = {
  name: "Enderson Marques",
  title: "Full-stack Developer",
  tagline: "Building fast, modern, conversion-focused web apps & landing pages",
  location: "Recife, Brazil",
  email: "enderson.marques.filho@gmail.com",
  phone: "+55 81 98606-2207",
  linkedin: "https://www.linkedin.com/in/endersonmarques/",
  github: "https://github.com/endersonmarques",
  bio: "Passionate full-stack developer with 4+ years of experience building scalable web applications. I specialize in React, Next.js, and modern web technologies, helping businesses create high-converting digital experiences.",
};

export interface Project {
  title: string;
  url: string;
  role: string;
  stack: string[];
  summary: string;
  highlights: string[];
  image?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Leadership Workshop Landing Page",
    url: "https://travassos-cursos.vercel.app/",
    role: "Lead Developer",
    stack: ["Next.js", "React", "Tailwind", "Vercel"],
    summary: "High-converting landing page for a leadership workshop: clean design, responsive layout and clear CTAs to drive sign-ups.",
    highlights: [
      "Responsive, mobile-first UI",
      "SEO-ready structure (meta, OG, sitemap)",
      "Fast deploy on Vercel",
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    title: "CrispyIQ — AI Ad Analysis Platform",
    url: "https://app.crispyiq.com/",
    role: "Full-stack (end-to-end)",
    stack: ["Next.js", "Node", "Design System", "AI Integration"],
    summary: "End-to-end platform to analyze ad creatives with AI: emotional tone, visual balance, audience fit and messaging clarity.",
    highlights: [
      "Built from scratch (UI + backend + AI)",
      "Actionable insights and reports",
      "Scalable architecture",
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    title: "Mega Milhão — High-Traffic Campaign",
    url: "https://participemegamilhao.com/mega-milhao-links-trafego-c/",
    role: "Platform & Automation Dev",
    stack: ["Mass Messaging", "AI Chatbot", "Automation"],
    summary: "Mass outbound messaging + AI assistant to qualify leads and boost conversion in philanthropy-based campaigns.",
    highlights: [
      "> BRL 1M monthly revenue supported",
      "AI-assisted replies",
      "High-throughput messaging",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    title: "Geekie — EdTech Platform (2+ yrs)",
    url: "https://one.geekie.com.br/",
    role: "Product Feature Dev",
    stack: ["React", "Node", "B2B", "Scalability"],
    summary: "Developed features for schools and students, focusing on scalability and clear value delivery across the product.",
    highlights: ["New B2B features", "Performance improvements", "Product iteration"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    title: "Netlex — LegalTech (Current)",
    url: "https://netlex.io/",
    role: "Product Engineer",
    stack: ["PHP/Laravel", "React", "Contracts Automation"],
    summary: "Building features for contract lifecycle management, improving legal efficiency and automation for enterprises.",
    highlights: ["Contract workflows", "Document AI", "B2B UX"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    featured: false,
  },
];

export const SKILLS = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Python", level: 80 },
  { name: "PHP/Laravel", level: 75 },
  { name: "PostgreSQL", level: 80 },
  { name: "AWS/Vercel", level: 85 },
];

export const BENEFITS = {
  "High Performance": ["Fast and responsive sites", "Optimized loading", "Green Core Web Vitals"],
  "Visual Credibility": ["Modern design", "Featured photos", "Social proof (testimonials/badges)"],
  "Found on Google": ["On-page SEO", "Clear content structure", "Schema/OG tags"],
  "Conversão": ["CTAs claros (WhatsApp/Form)", "FAQs e objeções", "Páginas de tours que vendem"],
};
