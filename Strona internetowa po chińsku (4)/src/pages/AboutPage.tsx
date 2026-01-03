import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Award, Users, Target, Heart } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: '品质至上',
    description: '我们坚持使用最优质的材料，每一件产品都经过严格的质量把控。'
  },
  {
    icon: Users,
    title: '以人为本',
    description: '倾听客户需求，不断改进我们的产品和服务。'
  },
  {
    icon: Target,
    title: '创新设计',
    description: '融合力量与现代，打造独特的街头风格。'
  },
  {
    icon: Heart,
    title: '文化传承',
    description: '通过服饰传递街头精神，让世界看到街头文化之美。'
  }
];

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="relative h-[400px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1638517317391-af4c18e4c96a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwdHJhZGl0aW9uYWwlMjBwYXR0ZXJufGVufDF8fHx8MTc2MjcxMDMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="About us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl mb-4">关于斗牛</h1>
            <p className="text-xl text-gray-200">传承街头精神，打造都市战士风格</p>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl mb-6 text-black">我们的故事</h2>
            <div className="w-24 h-1 bg-gray-400 mx-auto mb-6"></div>
            <p className="leading-relaxed mb-4 text-gray-600">
              斗牛创立于2020年，源于一个简单而强大的理念：将力量与现代街头时尚完美融合。
              我们相信，服饰不仅仅是穿着，更是一种态度的表达和精神的传承。
            </p>
            <p className="leading-relaxed text-gray-600">
              从最初的一个小工作室，到如今拥有数十位设计师和工匠的团队，我们始终坚持原创设计，
              用心打磨每一件产品。我们的使命是让世界看到街头文化的独特魅力，让每一位穿着斗牛的人，
              都能感受到力量与自信。
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="mb-2 text-black">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-black">我们的团队</h2>
            <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto border-4 border-[#e5e5e5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGFzaWFuJTIwbWFufGVufDF8fHx8MTc2MjcxMDMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="李明"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-black">李明</h3>
              <p className="text-gray-600 text-sm mb-2">创始人 & 首席设计师</p>
              <p className="text-sm text-gray-600">15年时尚设计经验，致力于街头美学研究</p>
            </div>

            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto border-4 border-[#e5e5e5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGFzaWFuJTIwd29tYW58ZW58MXx8fHwxNzYyNzEwMzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="王静"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-black">王静</h3>
              <p className="text-gray-600 text-sm mb-2">创意总监</p>
              <p className="text-sm text-gray-600">前国际时装周设计师，擅长图案创作</p>
            </div>

            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto border-4 border-[#e5e5e5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwb3J0cmFpdCUyMGFzaWFuJTIwbWFufGVufDF8fHx8MTc2MjcxMDMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="张伟"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-black">张伟</h3>
              <p className="text-gray-600 text-sm mb-2">生产总监</p>
              <p className="text-sm text-gray-600">20年服装生产管理经验，品质把控专家</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl mb-6 text-black">我们的使命</h2>
                <p className="mb-4 text-gray-600 leading-relaxed">
                  将力量与现代街头文化完美融合，打造具有态度的时尚品牌。
                  我们希望通过服饰，让更多人展现真实的自我，让世界看到街头文化之美。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  每一件斗牛的产品，都承载着我们对品质的坚持、对设计的热爱、对街头文化的尊重。
                  我们相信，真正的时尚应该是有灵魂的，它能够讲述故事，传递价值，激发共鸣。
                </p>
              </div>
              <div className="h-[400px] overflow-hidden rounded shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwYXJ0JTIwbW9kZXJufGVufDF8fHx8MTc2MjcxMDMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
