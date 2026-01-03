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
    image: 'https://images.unsplash.com/photo-1647797819874-f51a8a8fc5c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvb2RpZSUyMGZhc2hpb258ZW58MXx8fHwxNzYyNjU1NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1554638263-c62cbd0a1dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGhvb2RpZSUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzYyNzEyMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1647797819874-f51a8a8fc5c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvb2RpZSUyMGZhc2hpb258ZW58MXx8fHwxNzYyNjU1NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1620780327051-f7ad06f5b1e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmV5JTIwaG9vZGllJTIwdXJiYW58ZW58MXx8fHwxNzYyNzEyMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1509942774463-acf339c37c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
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
    image: 'https://images.unsplash.com/photo-1691689761290-2641cf0fc59a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYyNzEwMzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1688111421202-bda886f5e215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRzaGlydCUyMGZhc2hpb258ZW58MXx8fHwxNzYyNzEyMjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1657016028615-0157f9e43678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRzaGlydCUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzYyNzEyMjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1716541424893-734612ddcabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmV5JTIwdHNoaXJ0JTIwbWluaW1hbHxlbnwxfHx8fDE3NjI3MTIyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
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
    image: 'https://images.unsplash.com/photo-1695827163486-b86eac571321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZhc2hpb24lMjBtb2RlbHxlbnwxfHx8fDE3NjI2NTU2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1637248666370-70a4a603c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGphY2tldCUyMGZhc2hpb258ZW58MXx8fHwxNzYyNzEyMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1762289441987-de54678962c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGphY2tldCUyMHVyYmFufGVufDF8fHx8MTc2MjcxMjIwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1750857740536-2c5d9c3dd8ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmV5JTIwamFja2V0JTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NjI3MTIyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
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
    image: 'https://images.unsplash.com/photo-1491132271550-8788ca39a7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHVyYmFuJTIwc3R5bGV8ZW58MXx8fHwxNzYyNzEwMzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1761126087158-bf89f9d94e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHBhbnRzJTIwdXJiYW58ZW58MXx8fHwxNzYyNzEyMjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1604136172384-b2e9c43271ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBhbnRzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjI3MDA3NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1602585198422-d795fa9bfd6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmV5JTIwcGFudHMlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc2MjcxMjIwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1491132271550-8788ca39a7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHVyYmFuJTIwc3R5bGV8ZW58MXx8fHwxNzYyNzEwMzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
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
    image: 'https://images.unsplash.com/photo-1683760566647-c7a51d021aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0cmVldHdlYXIlMjBmYXNoaW9ufGVufDF8fHx8MTc2MjcxMDMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1637248666370-70a4a603c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGphY2tldCUyMGZhc2hpb258ZW58MXx8fHwxNzYyNzEyMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1683760566647-c7a51d021aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0cmVldHdlYXIlMjBmYXNoaW9ufGVufDF8fHx8MTc2MjcxMDMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1750857740536-2c5d9c3dd8ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmV5JTIwamFja2V0JTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NjI3MTIyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1762289441987-de54678962c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGphY2tldCUyMHVyYmFufGVufDF8fHx8MTc2MjcxMjIwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
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
    image: 'https://images.unsplash.com/photo-1691689761290-2641cf0fc59a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYyNzEwMzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1688111421202-bda886f5e215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRzaGlydCUyMGZhc2hpb258ZW58MXx8fHwxNzYyNzEyMjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1657016028615-0157f9e43678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRzaGlydCUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzYyNzEyMjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1716541424893-734612ddcabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmV5JTIwdHNoaXJ0JTIwbWluaW1hbHxlbnwxfHx8fDE3NjI3MTIyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1691689761290-2641cf0fc59a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYyNzEwMzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
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
    image: 'https://images.unsplash.com/photo-1647797819874-f51a8a8fc5c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvb2RpZSUyMGZhc2hpb258ZW58MXx8fHwxNzYyNjU1NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1554638263-c62cbd0a1dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGhvb2RpZSUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzYyNzEyMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1647797819874-f51a8a8fc5c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvb2RpZSUyMGZhc2hpb258ZW58MXx8fHwxNzYyNjU1NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1620780327051-f7ad06f5b1e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmV5JTIwaG9vZGllJTIwdXJiYW58ZW58MXx8fHwxNzYyNzEyMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
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
    image: 'https://images.unsplash.com/photo-1491132271550-8788ca39a7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHVyYmFuJTIwc3R5bGV8ZW58MXx8fHwxNzYyNzEwMzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1761126087158-bf89f9d94e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHBhbnRzJTIwdXJiYW58ZW58MXx8fHwxNzYyNzEyMjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1604136172384-b2e9c43271ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBhbnRzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjI3MDA3NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1602585198422-d795fa9bfd6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmV5JTIwcGFudHMlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc2MjcxMjIwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1491132271550-8788ca39a7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHVyYmFuJTIwc3R5bGV8ZW58MXx8fHwxNzYyNzEwMzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
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
