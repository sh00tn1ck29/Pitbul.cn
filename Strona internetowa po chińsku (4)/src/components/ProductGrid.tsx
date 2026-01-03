import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export function ProductGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-black">
            精选系列
          </h2>
          <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
          <p className="mt-4 text-gray-600">
            探索我们最新的街头服饰系列
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative bg-white border border-[#e5e5e5] hover:border-gray-400 transition-all duration-300 overflow-hidden hover:shadow-lg"
            >
              {product.badge && (
                <Badge className="absolute top-4 left-4 z-10 bg-black text-white border-0">
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
                <h3 className="mb-2 text-black group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">¥{product.price}</span>
                  {product.originalPrice && (
                    <span className="line-through text-sm text-gray-400">
                      ¥{product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-gray-400/0 group-hover:bg-gray-400/5 transition-colors duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <button className="border border-black text-black hover:bg-black hover:text-white px-8 py-3 transition-colors">
              查看更多产品
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
