export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  badge?: string;
  description?: string;
  features?: string[];
  sizes?: string[];
  colors?: string[];
  material?: string;
  inStock?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: '龙纹连帽卫衣',
    category: '卫衣',
    price: 598,
    originalPrice: 798,
    image: '/images/bluza1.1.jpg',
    images: [
      '/images/bluza1.1.jpg',
      '/images/bluza1.2.jpg',
      '/images/bluza1.3.jpg',
      '/images/bluza1.4.jpg',
    ],
    badge: '热销',
    description: '精选优质面料，采用传统龙纹刺绣工艺，融合现代街头风格。宽松版型，舒适透气，是秋冬季节的必备单品。',
    features: [
      '100%纯棉面料，柔软舒适',
      '传统龙纹刺绣，工艺精湛',
      '加厚内里，保暖性能出色',
      '宽松版型，适合多种身材',
      '可机洗，易于打理'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['白色', '黑色', '灰色'],
    material: '100% 纯棉',
    inStock: true
  },
  {
    id: 2,
    name: '战士印花T恤',
    category: 'T恤',
    price: 298,
   image: '/images/tshirt1.1.jpg',
    images: [
      '/images/tshirt1.1.jpg',
      '/images/tshirt1.2.jpg',
      '/images/tshirt1.3.jpg',
      '/images/tshirt1.4.jpg'
    ],
    badge: '新品',
    description: '斗牛系列最新力作，独特的战士主题印花，展现街头力量美学。采用高品质环保印染工艺，色彩持久不褪色。',
    features: [
      '优质棉质面料，亲肤透气',
      '独家战士主题印花设计',
      '环保印染工艺，不易褪色',
      '修身版型，展现身材线条',
      '多种颜色可选'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['白色', '黑色', '灰色'],
    material: '95% 棉 + 5% 弹性纤维',
    inStock: true
  },
  {
    id: 3,
    name: '都市风格外套',
    category: '外套',
    price: 998,
      image: '/images/kurtka1.1.jpg',
    images: [
      '/images/kurtka1.1.jpg',
      '/images/kurtka1.2.jpg',
      '/images/kurtka1.3.jpg',
      '/images/kurtka1.4.jpg'
    ],
    description: '融合都市机能与街头美学的完美之作。防风防水面料，多功能口袋设计，无论是日常通勤还是户外活动都能轻松驾驭。',
    features: [
      '防风防水面料，适应多种天气',
      '多功能口袋设计，实用便捷',
      '可调节袖口与下摆',
      '内置保暖层，温暖舒适',
      '都市机能风格设计'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['白色', '黑色', '灰色'],
    material: '外层：聚酯纤维 | 内里：棉混纺',
    inStock: true
  },
  {
    id: 4,
    name: '街头运动裤',
    category: '裤子',
    price: 498,
    image: '/images/spodnie1.1.jpg',
    images: [
      '/images/spodnie1.1.jpg',
      '/images/spodnie1.2.jpg',
      '/images/spodnie1.3.jpg',
      '/images/spodnie1.4.jpg'
    ],
    description: '经典束脚设计，宽松舒适的版型。优质棉质面料，四季皆宜。无论是运动还是日常穿搭都能完美胜任。',
    features: [
      '弹性腰带设计，穿着舒适',
      '束脚裤型，修饰腿型',
      '侧面拉链口袋，安全实用',
      '柔软透气面料',
      '多种场合适用'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['白色', '黑色', '灰色'],
    material: '80% 棉 + 20% 聚酯纤维',
    inStock: true
  },
  {
    id: 5,
    name: '传统龙纹夹克',
    category: '外套',
    price: 1298,
    image: '/images/kurtka2.1.jpg',
    images: [
      '/images/kurtka2.1.jpg',
      '/images/kurtka2.2.jpg',
      '/images/kurtka2.3.jpg',
      '/images/kurtka2.4.jpg'
    ],
    badge: '限量',
    description: '限量发售的经典夹克，采用高级刺绣工艺，每一件都是独一无二的艺术品。将街头文化与现代风格完美融合。',
    features: [
      '限量发售，独家设计',
      '古法刺绣，工艺精湛',
      '高级面料，质感出众',
      '标准版型，经典百搭',
      '附带收藏证书'
    ],
    sizes: ['M', 'L', 'XL'],
    colors: ['白色', '黑色', '灰色'],
    material: '外层：高级聚酯纤维 | 内里：真丝',
    inStock: true
  },
  {
    id: 6,
    name: '简约基础T恤',
    category: 'T恤',
    price: 198,
     image: '/images/tshirt2.1.jpg',
    images: [
      '/images/tshirt2.1.jpg',
      '/images/tshirt2.2.jpg',
      '/images/tshirt2.3.jpg',
      '/images/tshirt2.4.jpg'
    ],
    description: '简约而不简单的基础款T恤，采用精梳棉面料，柔软亲肤。无论是单穿还是叠搭都能展现完美效果。',
    features: [
      '精梳棉面料，柔软舒适',
      '简约设计，百搭易穿',
      '加厚版型，不易变形',
      '精细车线，品质保证',
      '多色可选，轻松搭配'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['白色', '黑色', '灰色'],
    material: '100% 精梳棉',
    inStock: true
  },
  {
    id: 7,
    name: '街头拉链卫衣',
    category: '卫衣',
    price: 698,
    originalPrice: 898,
   image: '/images/bluza2.1.jpg',
    images: [
      '/images/bluza2.1.jpg',
      '/images/bluza2.2.jpg',
      '/images/bluza2.3.jpg',
      '/images/bluza2.4.jpg'
    ],
    badge: '促销',
    description: '经典拉链卫衣，方便穿脱。加厚内里，保暖性能优异。街头风格设计，彰显个性态度。',
    features: [
      'YKK拉链，顺滑耐用',
      '加厚内里，保暖舒适',
      '连帽设计，防风保暖',
      '侧边口袋，实用便捷',
      '宽松版型，舒适自在'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['白色', '黑色', '灰色'],
    material: '65% 棉 + 35% 聚酯纤维',
    inStock: true
  },
  {
    id: 8,
    name: '工装束脚裤',
    category: '裤子',
    price: 598,
      image: '/images/spodnie2.1.jpg',
    images: [
      '/images/spodnie2.1.jpg',
      '/images/spodnie2.2.jpg',
      '/images/spodnie2.3.jpg',
      '/images/spodnie2.4.jpg'
    ],
    description: '机能风格工装裤，多口袋设计，实用性与时尚性并存。束脚设计，展现层次感。',
    features: [
      '多口袋设计，超强收纳',
      '束脚设计，修饰腿型',
      '耐磨面料，经久耐用',
      '可调节腰带',
      '机能风格，潮流前沿'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['白色', '黑色', '灰色'],
    material: '100% 棉质帆布',
    inStock: true
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getRelatedProducts(productId: number, category: string, limit: number = 4): Product[] {
  return products
    .filter(p => p.id !== productId && p.category === category)
    .slice(0, limit);
}
