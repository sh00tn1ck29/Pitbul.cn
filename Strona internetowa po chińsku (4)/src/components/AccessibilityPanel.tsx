import { X, Moon, Sun, Contrast, Type, Languages } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useTranslations } from '../translations/translations';

interface AccessibilityPanelProps {
  onClose: () => void;
}

export function AccessibilityPanel({ onClose }: AccessibilityPanelProps) {
  const { darkMode, highContrast, fontSize, language, toggleDarkMode, toggleHighContrast, setFontSize, setLanguage } = useAccessibility();
  const t = useTranslations(language);

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl w-full max-w-md border-2 border-border">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl text-foreground">{t.accessibility.title}</h2>
          <button 
            onClick={onClose}
            className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
            aria-label={t.accessibility.close}
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Language Toggle */}
          <div className="space-y-3 pb-6 border-b border-border">
            <div className="flex items-center gap-3">
              <Languages className="h-5 w-5 text-foreground" />
              <div>
                <h3 className="text-foreground">{t.accessibility.language}</h3>
                <p className="text-sm text-muted-foreground">{t.accessibility.languageDesc}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => setLanguage('zh')}
                className={`py-3 px-4 rounded-lg border-2 transition-all ${
                  language === 'zh'
                    ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                    : 'border-border text-foreground hover:border-gray-400'
                }`}
              >
                <span className="block">{t.accessibility.chinese}</span>
              </button>
              <button
                onClick={() => setLanguage('pl')}
                className={`py-3 px-4 rounded-lg border-2 transition-all ${
                  language === 'pl'
                    ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                    : 'border-border text-foreground hover:border-gray-400'
                }`}
              >
                <span className="block">{t.accessibility.polish}</span>
              </button>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {darkMode ? (
                <Moon className="h-5 w-5 text-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-foreground" />
              )}
              <div>
                <h3 className="text-foreground">{t.accessibility.darkMode}</h3>
                <p className="text-sm text-muted-foreground">{t.accessibility.darkModeDesc}</p>
              </div>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                darkMode ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={t.accessibility.darkMode}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* High Contrast Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Contrast className="h-5 w-5 text-foreground" />
              <div>
                <h3 className="text-foreground">{t.accessibility.highContrast}</h3>
                <p className="text-sm text-muted-foreground">{t.accessibility.highContrastDesc}</p>
              </div>
            </div>
            <button
              onClick={toggleHighContrast}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                highContrast ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={t.accessibility.highContrast}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  highContrast ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Font Size */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Type className="h-5 w-5 text-foreground" />
              <div>
                <h3 className="text-foreground">{t.accessibility.fontSize}</h3>
                <p className="text-sm text-muted-foreground">{t.accessibility.fontSizeDesc}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2">
              <button
                onClick={() => setFontSize('100')}
                className={`py-3 px-4 rounded-lg border-2 transition-all ${
                  fontSize === '100'
                    ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                    : 'border-border text-foreground hover:border-gray-400'
                }`}
              >
                <span className="block text-sm">{t.accessibility.standard}</span>
                <span className="block text-xs opacity-70">100%</span>
              </button>
              <button
                onClick={() => setFontSize('125')}
                className={`py-3 px-4 rounded-lg border-2 transition-all ${
                  fontSize === '125'
                    ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                    : 'border-border text-foreground hover:border-gray-400'
                }`}
              >
                <span className="block text-sm">{t.accessibility.medium}</span>
                <span className="block text-xs opacity-70">125%</span>
              </button>
              <button
                onClick={() => setFontSize('150')}
                className={`py-3 px-4 rounded-lg border-2 transition-all ${
                  fontSize === '150'
                    ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                    : 'border-border text-foreground hover:border-gray-400'
                }`}
              >
                <span className="block text-sm">{t.accessibility.large}</span>
                <span className="block text-xs opacity-70">150%</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            {t.accessibility.footer}
          </p>
        </div>
      </div>
    </div>
  );
}