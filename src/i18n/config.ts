
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      name: "Siddharth Singh",
      title: "AI Enthusiast & Full-Stack Developer",
      subtitle: "Hackathon Finalist • Problem Solver • Tech Innovator",
      viewResume: "View Resume",
      github: "GitHub",
      linkedin: "LinkedIn",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      achievements: "Achievements",
      education: "Education",
      contact: "Contact",
      language: "Language"
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido",
      name: "Siddharth Singh",
      title: "Entusiasta de IA y Desarrollador Full-Stack",
      subtitle: "Finalista de Hackathon • Solucionador de Problemas • Innovador Tecnológico",
      viewResume: "Ver Currículum",
      github: "GitHub",
      linkedin: "LinkedIn",
      about: "Acerca de",
      skills: "Habilidades",
      projects: "Proyectos",
      achievements: "Logros",
      education: "Educación",
      contact: "Contacto",
      language: "Idioma"
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      name: "Siddharth Singh",
      title: "Passionné d'IA et Développeur Full-Stack",
      subtitle: "Finaliste de Hackathon • Résolveur de Problèmes • Innovateur Tech",
      viewResume: "Voir CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      achievements: "Réalisations",
      education: "Éducation",
      contact: "Contact",
      language: "Langue"
    }
  },
  de: {
    translation: {
      welcome: "Willkommen",
      name: "Siddharth Singh",
      title: "KI-Enthusiast & Full-Stack-Entwickler",
      subtitle: "Hackathon-Finalist • Problemlöser • Tech-Innovator",
      viewResume: "Lebenslauf ansehen",
      github: "GitHub",
      linkedin: "LinkedIn",
      about: "Über",
      skills: "Fähigkeiten",
      projects: "Projekte",
      achievements: "Erfolge",
      education: "Bildung",
      contact: "Kontakt",
      language: "Sprache"
    }
  },
  hi: {
    translation: {
      welcome: "स्वागत",
      name: "सिद्धार्थ सिंह",
      title: "AI उत्साही और फुल-स्टैक डेवलपर",
      subtitle: "हैकाथॉन फाइनलिस्ट • समस्या समाधानकर्ता • टेक इनोवेटर",
      viewResume: "रिज्यूमे देखें",
      github: "गिटहब",
      linkedin: "लिंक्डइन",
      about: "के बारे में",
      skills: "कौशल",
      projects: "परियोजनाएं",
      achievements: "उपलब्धियां",
      education: "शिक्षा",
      contact: "संपर्क",
      language: "भाषा"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
