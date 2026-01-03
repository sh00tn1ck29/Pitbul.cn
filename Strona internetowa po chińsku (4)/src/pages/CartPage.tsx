import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

const cartItems: CartItem[] = [
  {
    id: 1,
    name: '龙纹连帽卫衣',
    price: 598,
    quantity: 1,
    size: 'L',
    image: 'https://images.unsplash.com/photo-1647797819874-f51a8a8fc5c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvb2RpZSUyMGZhc2hpb258ZW58MXx8fHwxNzYyNjU1NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    name: '战士印花T恤',
    price: 298,
    quantity: 2,
    size: 'M',
    image: 'https://images.unsplash.com/photo-1691689761290-2641cf0fc59a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYyNzEwMzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl mb-4 text-black">
            购物车
          </h1>
          <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="mb-6 text-gray-600">您的购物车是空的</p>
            <Link to="/products">
              <Button className="bg-black hover:bg-gray-800 text-white">
                继续购物
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Cart items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-white border border-[#e5e5e5] p-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-24 h-24 flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-1 text-black">{item.name}</h3>
                      <p className="text-sm mb-2 text-gray-600">尺码: {item.size}</p>
                      <p className="text-gray-700">¥{item.price}</p>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button className="text-gray-400 hover:text-gray-900 transition-colors">
                        <Trash2 className="h-5 w-5" />
                      </button>

                      <div className="flex items-center gap-2 border border-[#e5e5e5]">
                        <button className="p-2 hover:bg-gray-100">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button className="p-2 hover:bg-gray-100">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link to="/products">
                  <Button variant="outline" className="border-[#e5e5e5] text-gray-700 hover:border-gray-400 hover:text-gray-900">
                    继续购物
                  </Button>
                </Link>
              </div>
            </div>

            {/* Order summary */}
            <div>
              <div className="bg-gray-50 border border-[#e5e5e5] p-6 sticky top-24">
                <h2 className="text-xl mb-4 text-black">订单摘要</h2>
                
                <div className="space-y-3 mb-4 pb-4 border-b border-[#e5e5e5]">
                  <div className="flex justify-between text-gray-600">
                    <span>小计</span>
                    <span>¥{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>配送费</span>
                    <span>{shipping === 0 ? '免费' : `¥${shipping}`}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-black">
                    <span>总计</span>
                    <span className="text-gray-700">¥{total}</span>
                  </div>
                </div>

                <Button className="w-full bg-black hover:bg-gray-800 text-white mb-3">
                  结算
                </Button>

                <div className="text-center text-sm text-gray-400 mb-6">
                  <p>支持支付宝、微信、银联支付</p>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-6 border-t border-[#e5e5e5]">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                    <span>满300元免运费</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                    <span>7天无理由退换货</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                    <span>100%正品保障</span>
                  </div>
                </div>

                {/* Coupon code */}
                <div className="mt-6 pt-6 border-t border-[#e5e5e5]">
                  <p className="text-sm mb-2 text-black">优惠码</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="输入优惠码"
                      className="flex-1 border border-[#e5e5e5] px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
                    />
                    <Button variant="outline" className="border-[#e5e5e5] text-gray-700 hover:border-gray-400 hover:text-gray-900">
                      应用
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
