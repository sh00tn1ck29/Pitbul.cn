import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1683760566647-c7a51d021aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0cmVldHdlYXIlMjBmYXNoaW9ufGVufDF8fHx8MTc2MjcxMDMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/30"></div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gray-400">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-gray-600 border border-gray-400 px-4 py-1 text-sm tracking-widest">
                2025 冬季系列
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl" style={{ color: '#1A1A1A' }}>
              <span className="block">勇敢无畏</span>
              <span className="block text-gray-600">传承精神</span>
            </h2>
            
            <p className="text-lg max-w-lg" style={{ color: '#4A4A4A' }}>
              融合力量与现代街头文化，打造独特的都市战士风格。每一件单品都传递着力量与自信。
            </p>
            
            <div className="flex gap-4 pt-4">
              <Link to="/products">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6">
                  立即购买
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="hover:bg-[#1A1A1A] hover:text-white px-8 py-6" style={{ borderColor: '#1A1A1A', color: '#1A1A1A' }}>
                  查看系列
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
