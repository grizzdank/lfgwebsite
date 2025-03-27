export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://lfgconsultants.com",
  "name": "LFG Consulting",
  "description": "Empowering organizations to thrive through expert change management, AI-driven workflow optimization, and rapid solution development.",
  "url": "https://lfgconsultants.com",
  "logo": "https://lfgconsultants.com/images/logo.png",
  "image": "https://lfgconsultants.com/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/company/lfg-consulting"
  ],
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "knowsAbout": [
    "Organizational Change Management",
    "AI Workflow Integration",
    "Rapid MVP Development",
    "Process Improvement",
    "Project Management",
    "Digital Transformation"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Consulting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Organizational Change Management",
          "description": "Expert guidance in managing organizational transitions and transformations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Workflow Integration",
          "description": "Strategic integration of AI technologies into existing business processes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rapid MVP Development",
          "description": "Fast-track development of minimum viable products for quick market validation."
        }
      }
    ]
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://lfgconsultants.com/#website",
  "url": "https://lfgconsultants.com",
  "name": "LFG Consulting",
  "description": "Navigate Change. Embrace AI. Build Fast.",
  "publisher": {
    "@id": "https://lfgconsultants.com"
  }
};