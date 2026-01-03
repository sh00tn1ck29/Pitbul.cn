import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useTranslations } from '../translations/translations';

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { language } = useAccessibility();
  const t = useTranslations(language);
  
  const categoriesData = {
    zh: ['全部', '卫衣', 'T恤', '外套', '裤子'],
    pl: ['Wszystkie', 'Bluzy', 'Koszulki', 'Kurtki', 'Spodnie']
  };
  
  const categories = categoriesData[language];
  
  const filteredProducts = selectedCategory === categories[0]
    ? products 
    : products.filter(p => {
        // Map Polish category names to Chinese for filtering
        const categoryMap: Record<string, string> = {
          'Bluzy': '卫衣',
          'Koszulki': 'T恤',
          'Kurtki': '外套',
          'Spodnie': '裤子'
        };
        const targetCategory = language === 'pl' && categoryMap[selectedCategory] 
          ? categoryMap[selectedCategory] 
          : selectedCategory;
        return p.category === targetCategory;
      });

  return (
    <div className="py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl mb-4 text-foreground">
            {t.products.title}
          </h1>
          <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
          <p className="mt-4 text-muted-foreground">
            {t.products.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 border transition-colors ${
                selectedCategory === category
                  ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                  : 'border-border text-muted-foreground hover:border-gray-400 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative bg-card border border-border hover:border-gray-400 transition-all duration-300 overflow-hidden hover:shadow-lg"
            >
              {product.badge && (
                <Badge className="absolute top-4 left-4 z-10 bg-black dark:bg-white text-white dark:text-black border-0">
                  {product.badge}
                </Badge>
              )}
              
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-4">
                <p className="text-xs mb-1 text-gray-400">{product.category}</p>
                <h3 className="mb-2 text-foreground group-hover:text-muted-foreground transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-foreground">¥{product.price}</span>
                  {product.originalPrice && (
                    <span className="line-through text-sm text-muted-foreground">
                      ¥{product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-gray-400/0 group-hover:bg-gray-400/5 transition-colors duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          <button className="px-4 py-2 border border-border text-muted-foreground hover:border-gray-400 hover:text-foreground transition-colors">
            {t.products.previous}
          </button>
          <button className="px-4 py-2 border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black">
            1
          </button>
          <button className="px-4 py-2 border border-border text-muted-foreground hover:border-gray-400 hover:text-foreground transition-colors">
            2
          </button>
          <button className="px-4 py-2 border border-border text-muted-foreground hover:border-gray-400 hover:text-foreground transition-colors">
            3
          </button>
          <button className="px-4 py-2 border border-border text-muted-foreground hover:border-gray-400 hover:text-foreground transition-colors">
            {t.products.next}
          </button>
        </div>
      </div>
    </div>
  );
}