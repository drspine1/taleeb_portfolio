export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Idris Mutolib",
    jobTitle: "Frontend Developer",
    description: "3+ years experienced Frontend Developer specializing in React, Next.js, and modern web applications",
    url: "https://your-domain.com",
    email: "idrismutolib5@gmail.com",
    sameAs: [
      "https://github.com/drspine1"
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Frontend Development",
      "Web Development",
      "GSAP",
      "Framer Motion"
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Frontend Development"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
