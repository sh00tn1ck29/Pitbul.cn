import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getProductById, getRelatedProducts } from '../data/products';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, ShoppingCart, Heart, Share2, Truck, Shield, RefreshCw } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(Number(id));
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4 text-black">产品未找到</h1>
          <Link to="/products">
            <Button className="bg-black hover:bg-gray-800 text-white">
              返回产品列表
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);
  const productImages = product.images || [product.image];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('请选择尺码');
      return;
    }
    if (!selectedColor) {
      toast.error('请选择颜色');
      return;
    }
    
    toast.success('已添加到购物车');
    // Here you would typically add to cart context/state
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-[#e5e5e5]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-400 hover:text-gray-900 transition-colors">
              首页
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/products" className="text-gray-400 hover:text-gray-900 transition-colors">
              产品
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-black">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>返回</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square mb-4 overflow-hidden border border-[#e5e5e5]">
              {product.badge && (
                <Badge className="absolute top-4 left-4 z-10 bg-black text-white border-0">
                  {product.badge}
                </Badge>
              )}
              <ImageWithFallback
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-gray-600'
                        : 'border-[#e5e5e5] hover:border-gray-400'
                    }`}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl lg:text-4xl mb-2 text-black">
              {product.name}
            </h1>
            <p className="mb-6 text-gray-400">{product.category}</p>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl text-gray-700">¥{product.price}</span>
              {product.originalPrice && (
                <span className="text-2xl line-through text-gray-400">
                  ¥{product.originalPrice}
                </span>
              )}
            </div>

            <p className="mb-8 leading-relaxed text-gray-700">
              {product.description}
            </p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <p className="mb-3 text-black">
                  颜色: {selectedColor && <span className="text-gray-700">{selectedColor}</span>}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-2 border-2 transition-all ${
                        selectedColor === color
                          ? 'border-black bg-gray-50 text-black'
                          : 'border-[#e5e5e5] text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <p className="mb-3 text-black">
                  尺码: {selectedSize && <span className="text-gray-700">{selectedSize}</span>}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-16 h-12 border-2 transition-all ${
                        selectedSize === size
                          ? 'border-black bg-gray-50 text-black'
                          : 'border-[#e5e5e5] text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="mb-3 text-black">数量:</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-[#e5e5e5] hover:border-gray-600 hover:text-gray-900 transition-colors"
                >
                  -
                </button>
                <span className="text-xl w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-[#e5e5e5] hover:border-gray-600 hover:text-gray-900 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-black hover:bg-gray-800 text-white py-6 text-lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                加入购物车
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#e5e5e5] hover:border-gray-600 hover:text-gray-900 px-6"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#e5e5e5] hover:border-gray-600 hover:text-gray-900 px-6"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Product Features */}
            <div className="border-t border-[#e5e5e5] pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Truck className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="text-sm text-black">免费配送</p>
                    <p className="text-xs text-gray-400">满300元</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="text-sm text-black">品质保证</p>
                    <p className="text-xs text-gray-400">正品保障</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="text-sm text-black">7天退换</p>
                    <p className="text-xs text-gray-400">无忧退货</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Material */}
            {product.material && (
              <div className="border-t border-[#e5e5e5] pt-6">
                <p className="mb-2 text-black">材质:</p>
                <p className="text-gray-600">{product.material}</p>
              </div>
            )}
          </div>
        </div>

        {/* Product Features List */}
        {product.features && product.features.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl mb-6 text-black">产品特点</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 border border-[#e5e5e5] hover:border-gray-400 transition-colors"
                >
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl mb-8 text-black">相关产品</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="relative bg-white border border-[#e5e5e5] hover:border-gray-400 transition-all duration-300 overflow-hidden hover:shadow-lg">
                    {relatedProduct.badge && (
                      <Badge className="absolute top-4 left-4 z-10 bg-black text-white border-0">
                        {relatedProduct.badge}
                      </Badge>
                    )}
                    
                    <div className="aspect-[3/4] overflow-hidden">
                      <ImageWithFallback
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="mb-2 text-black group-hover:text-gray-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700">¥{relatedProduct.price}</span>
                        {relatedProduct.originalPrice && (
                          <span className="line-through text-sm text-gray-400">
                            ¥{relatedProduct.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
