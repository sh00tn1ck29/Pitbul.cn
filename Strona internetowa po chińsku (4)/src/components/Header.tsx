import { ShoppingCart, User, Menu, Search, ChevronDown, Accessibility } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AccessibilityPanel } from './AccessibilityPanel';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useTranslations } from '../translations/translations';

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showAccessibility, setShowAccessibility] = useState(false);
  const { language } = useAccessibility();
  const t = useTranslations(language);

  const menuItemsData = {
    zh: {
      新品: {
        男装: ['卫衣', 'T恤', '外套', '裤子', '套装'],
        女装: ['连衣裙', '上衣', '裤装', '裙装', '外套'],
        配饰: ['帽子', '包包', '腰带', '围巾', '袜子']
      },
      男装: {
        上装: ['卫衣', 'T恤', '衬衫', '外套', '夹克'],
        下装: ['牛仔裤', '运动裤', '休闲裤', '短裤'],
        套装: ['运动套装', '休闲套装']
      },
      女装: {
        上装: ['T恤', '衬衫', '卫衣', '毛衣', '外套'],
        下装: ['裤子', '裙子', '牛仔裤', '短裤'],
        连衣裙: ['长裙', '短裙', '连衣裙']
      },
      配饰: {
        头部配饰: ['帽子', '发带', '头巾'],
        手部配饰: ['手套', '手链', '戒指'],
        其他: ['包包', '腰带', '围巾', '袜子']
      }
    },
    pl: {
      Nowości: {
        'Męska': ['Bluzy', 'Koszulki', 'Kurtki', 'Spodnie', 'Zestawy'],
        'Damska': ['Sukienki', 'Góra', 'Spodnie', 'Spódnice', 'Kurtki'],
        'Akcesoria': ['Czapki', 'Torby', 'Paski', 'Szaliki', 'Skarpety']
      },
      Męska: {
        'Góra': ['Bluzy', 'Koszulki', 'Koszule', 'Kurtki', 'Płaszcze'],
        'Dół': ['Jeansy', 'Spodnie sportowe', 'Spodnie casualowe', 'Szorty'],
        'Zestawy': ['Zestaw sportowy', 'Zestaw casualowy']
      },
      Damska: {
        'Góra': ['Koszulki', 'Koszule', 'Bluzy', 'Swetry', 'Kurtki'],
        'Dół': ['Spodnie', 'Spódnice', 'Jeansy', 'Szorty'],
        'Sukienki': ['Długie sukienki', 'Krótkie sukienki', 'Sukienki']
      },
      Akcesoria: {
        'Nakrycia głowy': ['Czapki', 'Opaski', 'Bandany'],
        'Na ręce': ['Rękawiczki', 'Bransoletki', 'Pierścionki'],
        'Inne': ['Torby', 'Paski', 'Szaliki', 'Skarpety']
      }
    }
  };

  const menuItems = menuItemsData[language];

  const toggleMenu = (category: string) => {
    setActiveMenu(activeMenu === category ? null : category);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  // Close menu when pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
      }
    };

    if (activeMenu) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [activeMenu]);

  return (
    <>
      <header className="border-b border-[#1a1a1a] dark:border-gray-800 sticky top-0 z-50 shadow-sm bg-black dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 border-b border-white/10 dark:border-gray-700">
            <div className="flex items-center gap-6 text-sm text-white/70">
              <span className="hover:text-gray-400 transition-colors cursor-pointer">{t.header.freeShipping}</span>
              <Link to="/products" className="hover:text-gray-400 transition-colors">{t.header.newArrivals}</Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/70">
              <Link to="/contact" className="hover:text-gray-400 transition-colors">{t.header.customerService}</Link>
              <span className="hover:text-gray-400 transition-colors cursor-pointer">{t.header.orderTracking}</span>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            <button className="lg:hidden">
              <Menu className="h-6 w-6 text-white" />
            </button>

            <Link to="/" className="flex-1 lg:flex-none" onClick={closeMenu}>
              <h1 className="text-3xl tracking-wider text-center lg:text-left cursor-pointer">
                <span className="text-gray-400">斗</span>
                <span className="text-white">牛</span>
              </h1>
              <p className="text-xs text-gray-400 text-center lg:text-left tracking-[0.3em]">{t.header.brandSubtitle}</p>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              <Link 
                to="/" 
                className="text-white hover:text-gray-400 transition-colors"
                onClick={closeMenu}
              >
                {t.header.home}
              </Link>

              {/* Dropdown menus */}
              {Object.keys(menuItems).map((mainCategory) => (
                <div
                  key={mainCategory}
                  className="relative"
                >
                  <button 
                    onClick={() => toggleMenu(mainCategory)}
                    className={`flex items-center gap-1 transition-colors ${
                      activeMenu === mainCategory ? 'text-gray-400' : 'text-white hover:text-gray-400'
                    }`}
                  >
                    {mainCategory}
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      activeMenu === mainCategory ? 'rotate-180' : ''
                    }`} />
                  </button>
                </div>
              ))}

              <Link 
                to="/about" 
                className="text-white hover:text-gray-400 transition-colors"
                onClick={closeMenu}
              >
                {t.header.about}
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-gray-400 transition-colors"
                onClick={closeMenu}
              >
                {t.header.contact}
              </Link>
              <Link 
                to="/products" 
                className="text-gray-400"
                onClick={closeMenu}
              >
                {t.header.sale}
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowAccessibility(true)}
                className="hover:bg-white/10 p-2 rounded-lg transition-colors"
                aria-label={t.header.accessibility}
              >
                <Accessibility className="h-5 w-5 text-white hover:text-gray-400 transition-colors" />
              </button>
              <button className="hidden lg:block">
                <Search className="h-5 w-5 text-white hover:text-gray-400 transition-colors" />
              </button>
              <button>
                <User className="h-5 w-5 text-white hover:text-gray-400 transition-colors" />
              </button>
              <Link to="/cart" onClick={closeMenu}>
                <button className="relative">
                  <ShoppingCart className="h-5 w-5 text-white hover:text-gray-400 transition-colors" />
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center border border-gray-400">
                    2
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mega dropdown - Full width */}
      {activeMenu && (
        <div className="fixed left-0 right-0 z-40" style={{ top: 'calc(var(--header-height, 130px))' }}>
          <div className="bg-white dark:bg-gray-900 border-t border-b border-[#e5e5e5] dark:border-gray-700 shadow-xl">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-3 gap-12">
                {Object.entries(menuItems[activeMenu as keyof typeof menuItems]).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="mb-4 pb-3 border-b-2 border-gray-400 text-foreground">
                      {category}
                    </h3>
                    <ul className="space-y-2.5">
                      {items.map((item) => (
                        <li key={item}>
                          <Link
                            to="/products"
                            onClick={closeMenu}
                            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors block py-1 hover:pl-2 transition-all"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Featured section */}
              <div className="mt-8 pt-6 border-t border-[#e5e5e5] dark:border-gray-700 flex items-center justify-between">
                <Link
                  to="/products"
                  onClick={closeMenu}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-2 group"
                >
                  <span>{t.menu.viewAll} {activeMenu}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <div className="text-sm text-gray-400">
                  {t.menu.discoverStyles}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay when menu is open */}
      {activeMenu && (
        <div 
          className="fixed inset-0 bg-black/20 z-30"
          style={{ top: 'calc(var(--header-height, 130px))' }}
          onClick={closeMenu}
        />
      )}

      {/* Accessibility Panel */}
      {showAccessibility && (
        <AccessibilityPanel onClose={() => setShowAccessibility(false)} />
      )}
    </>
  );
}