'use client';

import { PROFILE } from '@/lib/data';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PROFILE.name,
    "jobTitle": PROFILE.title,
    "description": PROFILE.bio,
    "url": "https://endersonmarques.vercel.app",
    "image": "https://endersonmarques.vercel.app/profile_me.png",
    "sameAs": [
      PROFILE.github,
      PROFILE.linkedin
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Recife",
      "addressRegion": "Pernambuco",
      "addressCountry": "BR"
    },
    "email": PROFILE.email,
    "telephone": PROFILE.phone,
    "knowsAbout": [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Web Development",
      "Full-stack Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-stack Developer",
      "description": "Building fast, modern, conversion-focused web apps & landing pages"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Software Development"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

