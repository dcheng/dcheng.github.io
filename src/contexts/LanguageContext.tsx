
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Quiénes Somos',
    'nav.services': 'Servicios',
    'nav.environments': 'Ambientes',
    'nav.contact': 'Contacto',
    'nav.schedule': 'Agendar Cita',
    
    // Home page
    'home.hero.title': 'Sonrisas Naturalmente',
    'home.hero.titleHighlight': 'Hermosas',
    'home.hero.description': 'Especialista en odontología estética y restauradora. Transformamos tu sonrisa con la más alta calidad y tecnología avanzada.',
    'home.hero.scheduleBtn': 'Agendar Consulta',
    'home.hero.servicesBtn': 'Ver Servicios',
    'home.stats.patients': 'Pacientes Satisfechos',
    'home.stats.experience': 'Años de Experiencia',
    'home.stats.treatments': 'Tratamientos Realizados',
    'home.stats.emergency': 'Emergencias',
    'home.results.title': 'Resultados que Hablan por Sí Solos',
    'home.results.description': 'Cada sonrisa es única y merece un tratamiento personalizado. Mira las transformaciones que hemos logrado.',
    'home.services.title': 'Nuestros Servicios',
    'home.services.description': 'Ofrecemos una amplia gama de tratamientos dentales especializados',
    'home.services.aesthetic': 'Odontología Estética',
    'home.services.aestheticDesc': 'Diseño de sonrisa, carillas, blanqueamiento dental',
    'home.services.restorative': 'Odontología Restauradora',
    'home.services.restorativeDesc': 'Coronas, puentes, implantes dentales',
    'home.services.preventive': 'Tratamientos Preventivos',
    'home.services.preventiveDesc': 'Limpiezas, sellantes, fluorización',
    'home.services.learnMore': 'Saber más →',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.environments': 'Facilities',
    'nav.contact': 'Contact',
    'nav.schedule': 'Schedule Appointment',
    
    // Home page
    'home.hero.title': 'Naturally Beautiful',
    'home.hero.titleHighlight': 'Smiles',
    'home.hero.description': 'Specialist in aesthetic and restorative dentistry. We transform your smile with the highest quality and advanced technology.',
    'home.hero.scheduleBtn': 'Schedule Consultation',
    'home.hero.servicesBtn': 'View Services',
    'home.stats.patients': 'Satisfied Patients',
    'home.stats.experience': 'Years of Experience',
    'home.stats.treatments': 'Treatments Performed',
    'home.stats.emergency': 'Emergency Care',
    'home.results.title': 'Results That Speak for Themselves',
    'home.results.description': 'Each smile is unique and deserves personalized treatment. See the transformations we have achieved.',
    'home.services.title': 'Our Services',
    'home.services.description': 'We offer a wide range of specialized dental treatments',
    'home.services.aesthetic': 'Aesthetic Dentistry',
    'home.services.aestheticDesc': 'Smile design, veneers, teeth whitening',
    'home.services.restorative': 'Restorative Dentistry',
    'home.services.restorativeDesc': 'Crowns, bridges, dental implants',
    'home.services.preventive': 'Preventive Treatments',
    'home.services.preventiveDesc': 'Cleanings, sealants, fluoride treatments',
    'home.services.learnMore': 'Learn more →',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es'); // Default to Spanish

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
