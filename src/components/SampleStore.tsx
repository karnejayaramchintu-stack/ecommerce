import React, { useState } from 'react';
import { 
  Star, 
  Shield, 
  Truck, 
  RefreshCw, 
  Heart, 
  ShoppingCart, 
  Share2,
  CheckCircle,
  MapPin,
  Users,
  Award
} from 'lucide-react';

const SampleStore = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Bohemian Silver Earrings",
      price: 850,
      originalPrice: 1200,
      image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 24,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Handcrafted Necklace Set",
      price: 1200,
      originalPrice: 1500,
      image: "https://images.pexels.com/photos/1445990/pexels-photo-1445990.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 18,
      badge: "New"
    },
    {
      id: 3,
      name: "Vintage Ring Collection",
      price: 2100,
      originalPrice: 2800,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 31,
      badge: "Limited"
    },
    {
      id: 4,
      name: "Boho Charm Bracelet",
      price: 650,
      originalPrice: 900,
      image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 15,
      badge: "Trending"
    }
  ];

  const trustIndicators = [
    { icon: Shield, text: "Verified Seller", color: "green" },
    { icon: Truck, text: "Fast Shipping", color: "blue" },
    { icon: RefreshCw, text: "Easy Returns", color: "purple" },
    { icon: CheckCircle, text: "Quality Assured", color: "emerald" }
  ];

  const recentActivity = [
    "Priya from Mumbai just bought Silver Earrings",
    "3 people added Necklace Set to cart",
    "Arjun rated us 5 stars",
    "2 new reviews this hour"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Store Header */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Trust Score: 8.7/10</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Jaipur Boho Collection
            </h1>
            <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              Handcrafted jewelry for the modern bohemian spirit
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>500+ Happy Customers</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 fill-current" />
                <span>4.8 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-6">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  indicator.color === 'green' ? 'bg-green-100' :
                  indicator.color === 'blue' ? 'bg-blue-100' :
                  indicator.color === 'purple' ? 'bg-purple-100' : 'bg-emerald-100'
                }`}>
                  <indicator.icon className={`w-3 h-3 ${
                    indicator.color === 'green' ? 'text-green-600' :
                    indicator.color === 'blue' ? 'text-blue-600' :
                    indicator.color === 'purple' ? 'text-purple-600' : 'text-emerald-600'
                  }`} />
                </div>
                <span className="text-sm font-medium text-gray-700">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <button className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
            <Share2 className="w-4 h-4 mr-2" />
            Share Store
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.badge === 'Bestseller' ? 'bg-green-100 text-green-700' :
                    product.badge === 'New' ? 'bg-blue-100 text-blue-700' :
                    product.badge === 'Limited' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {product.badge}
                  </span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
                
                <button 
                  onClick={() => setCartOpen(true)}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof & Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span>{activity}</span>
                <span className="text-gray-400 ml-2">• just now</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Overlay */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Secure Checkout</h3>
              <button 
                onClick={() => setCartOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <img 
                  src={products[0].image} 
                  alt={products[0].name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{products[0].name}</h4>
                  <p className="text-sm text-gray-600">₹{products[0].price}</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>₹{products[0].price}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all">
                Pay with UPI
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Card / EMI Options
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Cash on Delivery
              </button>
            </div>
            
            <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-1" />
                <span>Pine Labs Protected</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SampleStore;