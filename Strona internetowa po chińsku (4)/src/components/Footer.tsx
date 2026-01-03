import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useTranslations } from '../translations/translations';

export function Footer() {
  const { language } = useAccessibility();
  const t = useTranslations(language);

  return (
    <footer className="bg-black dark:bg-gray-950 border-t border-[#1a1a1a] dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4">
              <span className="text-gray-400 dark:text-gray-500">{t.header.brand}</span>
            </h3>
            <p className="text-sm mb-4 text-gray-400 dark:text-gray-500">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-700 dark:border-gray-600 hover:border-gray-400 flex items-center justify-center transition-colors group">
                <Facebook className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 dark:border-gray-600 hover:border-gray-400 flex items-center justify-center transition-colors group">
                <Instagram className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 dark:border-gray-600 hover:border-gray-400 flex items-center justify-center transition-colors group">
                <Twitter className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 dark:border-gray-600 hover:border-gray-400 flex items-center justify-center transition-colors group">
                <Youtube className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="mb-4 text-white">{t.footer.shop}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">{t.footer.newArrivals}</Link></li>
              <li><Link to="/products" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">{t.footer.menswear}</Link></li>
              <li><Link to="/products" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">{t.footer.womenswear}</Link></li>
              <li><Link to="/products" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">{t.footer.accessoriesZone}</Link></li>
              <li><Link to="/products" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">{t.footer.limitedEdition}</Link></li>
              <li><Link to="/products" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">{t.footer.promotions}</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="mb-4 text-white">{t.footer.customerService}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">{t.footer.contactUs}</Link></li>
              <li><Link to="/cart" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">{t.footer.orderTracking}</Link></li>
              <li><Link to="/about" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">{t.footer.shippingInfo}</Link></li>
              <li><Link to="/about" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">{t.footer.returnPolicy}</Link></li>
              <li><Link to="/about" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">{t.footer.sizeGuide}</Link></li>
              <li><Link to="/contact" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">{t.footer.faq}</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-white">{t.footer.newsletter}</h4>
            <p className="text-sm mb-4 text-gray-400 dark:text-gray-500">
              {t.footer.newsletterDesc}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 bg-black dark:bg-gray-900 border border-gray-700 dark:border-gray-600 px-4 py-2 text-sm focus:outline-none focus:border-gray-400 text-white placeholder:text-gray-500"
              />
              <button className="bg-black dark:bg-gray-900 hover:bg-gray-800 dark:hover:bg-gray-800 text-white px-6 py-2 text-sm transition-colors border border-gray-400">
                {t.footer.subscribe}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 dark:text-gray-500">
            <p>{t.footer.copyright}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.cookies}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}