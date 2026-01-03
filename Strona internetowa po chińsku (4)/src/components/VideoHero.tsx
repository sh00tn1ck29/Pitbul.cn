import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function VideoHero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Try to play video on mount
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('Autoplay prevented');
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background with Image Fallback */}
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-man-in-fashionable-winter-clothes-9680/1080p.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        /* Fallback to animated image if video fails */
        <div className="absolute inset-0 w-full h-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Winter Fashion Collection"
            className="w-full h-full object-cover animate-ken-burns"
          />
        </div>
      )}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Video Controls - only show if video is loaded */}
      {!videoError && (
        <div className="absolute top-8 right-8 flex gap-3 z-20">
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
            aria-label={isPlaying ? '暂停' : '播放'}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            onClick={toggleMute}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
            aria-label={isMuted ? '取消静音' : '静音'}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-block mb-6 animate-fade-in">
              <span className="text-white border-2 border-white px-6 py-2 tracking-[0.3em] backdrop-blur-sm bg-white/10">
                2025 冬季系列
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-8xl text-white mb-6 animate-fade-in-up">
              <span className="block mb-2">斗牛</span>
              <span className="block text-white">冬季传奇</span>
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed animate-fade-in-up">
              探索我们最新的冬季系列。融合传统工艺与现代设计，
              为您带来温暖与风格的完美结合。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up">
              <Link to="/products">
                <Button className="bg-black hover:bg-gray-800 text-white px-10 py-7 text-lg">
                  探索系列
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-7 text-lg backdrop-blur-sm bg-white/10"
                >
                  了解更多
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="mt-12 flex flex-wrap gap-8 text-white animate-fade-in-up">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xl">🔥</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300">限量发售</p>
                  <p>仅此一季</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300">精选材质</p>
                  <p>保暖舒适</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xl">🎨</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300">原创设计</p>
                  <p>街头美学</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
