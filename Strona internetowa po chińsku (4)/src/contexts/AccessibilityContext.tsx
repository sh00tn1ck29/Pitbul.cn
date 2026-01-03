import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../translations/translations';

type FontSize = '100' | '125' | '150';

interface AccessibilityContextType {
  darkMode: boolean;
  highContrast: boolean;
  fontSize: FontSize;
  language: Language;
  toggleDarkMode: () => void;
  toggleHighContrast: () => void;
  setFontSize: (size: FontSize) => void;
  setLanguage: (lang: Language) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSizeState] = useState<FontSize>('100');
  const [language, setLanguageState] = useState<Language>('zh');

  // Load settings from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('accessibility-dark-mode') === 'true';
    const savedHighContrast = localStorage.getItem('accessibility-high-contrast') === 'true';
    const savedFontSize = localStorage.getItem('accessibility-font-size') as FontSize || '100';
    const savedLanguage = localStorage.getItem('accessibility-language') as Language || 'zh';

    setDarkMode(savedDarkMode);
    setHighContrast(savedHighContrast);
    setFontSizeState(savedFontSize);
    setLanguageState(savedLanguage);
  }, []);

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('accessibility-dark-mode', String(darkMode));
  }, [darkMode]);

  // Apply high contrast
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem('accessibility-high-contrast', String(highContrast));
  }, [highContrast]);

  // Apply font size
  useEffect(() => {
    const fontSizeMap: Record<FontSize, string> = {
      '100': '16px',
      '125': '20px',
      '150': '24px'
    };
    document.documentElement.style.setProperty('--font-size', fontSizeMap[fontSize]);
    localStorage.setItem('accessibility-font-size', fontSize);
  }, [fontSize]);

  // Apply language
  useEffect(() => {
    localStorage.setItem('accessibility-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleHighContrast = () => setHighContrast(!highContrast);
  const setFontSize = (size: FontSize) => setFontSizeState(size);
  const setLanguage = (lang: Language) => setLanguageState(lang);

  return (
    <AccessibilityContext.Provider
      value={{
        darkMode,
        highContrast,
        fontSize,
        language,
        toggleDarkMode,
        toggleHighContrast,
        setFontSize,
        setLanguage
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}