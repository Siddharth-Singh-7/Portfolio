
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const SEOHead = () => {
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>Siddharth Singh - AI Enthusiast & Full-Stack Developer</title>
      <meta name="description" content="Portfolio of Siddharth Singh - AI Enthusiast, Full-Stack Developer, Hackathon Finalist, and Tech Innovator. Explore projects, achievements, and skills in modern web development." />
      <meta name="keywords" content="Siddharth Singh, AI, Full-Stack Developer, React, Node.js, Python, Machine Learning, Web Development, Hackathon, Portfolio, Tech Innovation" />
      <meta name="author" content="Siddharth Singh" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://siddharthsingh.dev" />
      <meta property="og:title" content="Siddharth Singh - AI Enthusiast & Full-Stack Developer" />
      <meta property="og:description" content="Portfolio showcasing innovative projects in AI, full-stack development, and cutting-edge technology solutions." />
      <meta property="og:image" content="/lovable-uploads/04f69df9-7777-43ee-b204-2741b7ddd12a.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://siddharthsingh.dev" />
      <meta property="twitter:title" content="Siddharth Singh - AI Enthusiast & Full-Stack Developer" />
      <meta property="twitter:description" content="Portfolio showcasing innovative projects in AI, full-stack development, and cutting-edge technology solutions." />
      <meta property="twitter:image" content="/lovable-uploads/04f69df9-7777-43ee-b204-2741b7ddd12a.png" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/lovable-uploads/04f69df9-7777-43ee-b204-2741b7ddd12a.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/lovable-uploads/04f69df9-7777-43ee-b204-2741b7ddd12a.png" />
      <link rel="apple-touch-icon" href="/lovable-uploads/04f69df9-7777-43ee-b204-2741b7ddd12a.png" />
      
      {/* Theme color */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* Language */}
      <html lang={t('language') === 'Language' ? 'en' : 'multi'} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Siddharth Singh",
          "jobTitle": "AI Enthusiast & Full-Stack Developer",
          "description": "Hackathon Finalist, Problem Solver, and Tech Innovator",
          "url": "https://siddharthsingh.dev",
          "image": "/lovable-uploads/04f69df9-7777-43ee-b204-2741b7ddd12a.png",
          "sameAs": [
            "https://github.com/Siddharth-Singh-7",
            "https://www.linkedin.com/in/siddharth-singh-6414432b2/"
          ]
        })}
      </script>
    </Helmet>
  );
};
