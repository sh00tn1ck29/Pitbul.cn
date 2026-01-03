import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export function Collection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left image */}
          <div className="relative h-[500px] overflow-hidden group shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1638517317391-af4c18e4c96a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwdHJhZGl0aW9uYWwlMjBwYXR0ZXJufGVufDF8fHx8MTc2MjcxMDMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl text-white mb-2">传统工艺</h3>
              <p className="text-gray-200 mb-4">
                传承千年文化，融入现代设计
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                探索更多
              </Button>
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col justify-center space-y-6 lg:pl-12">
            <div className="inline-block w-fit">
              <span className="text-gray-600 border border-gray-400 px-4 py-1 text-sm tracking-widest">
                限量系列
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl text-black">
              力量美学 × 街头文化
            </h2>
            
            <p className="leading-relaxed text-gray-600">
              我们的设计师从街头文化中汲取灵感，将力量、态度等元素与现代街头服饰完美结合。
              每一件产品都经过精心打磨，体现街头精神与当代潮流的碰撞。
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gray-600 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="mb-1 text-black">独特设计</h4>
                  <p className="text-sm text-gray-600">原创图案，独家版权</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gray-600 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="mb-1 text-black">优质面料</h4>
                  <p className="text-sm text-gray-600">精选进口材质，舒适耐穿</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gray-600 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="mb-1 text-black">精工制作</h4>
                  <p className="text-sm text-gray-600">严格质检，匠心工艺</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/products">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6">
                  查看限量系列
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
