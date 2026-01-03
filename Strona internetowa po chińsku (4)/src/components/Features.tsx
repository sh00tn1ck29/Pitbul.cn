import { Truck, Shield, Award, Zap } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: '免费配送',
    description: '全国包邮，订单满299元'
  },
  {
    icon: Shield,
    title: '品质保证',
    description: '30天无理由退换货'
  },
  {
    icon: Award,
    title: '正品保障',
    description: '100%原创设计'
  },
  {
    icon: Zap,
    title: '快速发货',
    description: '48小时内发货'
  }
];

export function Features() {
  return (
    <section className="py-16 bg-gray-50 border-y border-[#e5e5e5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center mb-4 group-hover:bg-black transition-colors">
                  <Icon className="h-8 w-8 text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-2 text-black">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
