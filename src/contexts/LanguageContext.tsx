import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

export const translations: Translations = {
  // Navbar
  'nav.home': { en: 'Home', hi: 'होम' },
  'nav.about': { en: 'About Us', hi: 'हमारे बारे में' },
  'nav.products': { en: 'Products', hi: 'उत्पाद' },
  'nav.blog': { en: 'Blog', hi: 'ब्लॉग' },
  'nav.contact': { en: 'Contact', hi: 'संपर्क करें' },
  'nav.wishlist': { en: 'Wishlist', hi: 'विशलिस्ट' },
  'nav.search': { en: 'Search jewelry...', hi: 'गहने खोजें...' },
  'nav.brand': { en: 'Dhillon Sparkle', hi: 'ढिल्लों स्पार्कल' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, fallback?: string) => {
    return translations[key]?.[language] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
