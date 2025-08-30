import React, { useState, useEffect } from 'react';
import { 
  Package, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Plus, 
  MessageCircle,
  Star,
  Eye,
  ShoppingCart,
  BarChart3,
  Zap,
  Activity,
  Clock,
  Wifi
} from 'lucide-react';
import ToggleBar from './ToggleBar';
import { useData } from '../context/DataContext';

const CreatorDashboard = () => {
  const [currentView, setCurrentView] = useState('overview');
  const [filters, setFilters] = useState({});
  const { liveData, refreshData } = useData();
  const [realTimeStats, setRealTimeStats] = useState({
    totalSales: 524750,
    orders: 347,
    visitors: 2890,
    trustScore: 8.7
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeStats(prev => ({
        totalSales: prev.totalSales + Math.floor(Math.random() * 1000),
        orders: prev.orders + Math.floor(Math.random() * 3),
        visitors: prev.visitors + Math.floor(Math.random() * 10),
        trustScore: Math.min(10, prev.trustScore + (Math.random() * 0.1 - 0.05))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { 
      title: 'Total Sales', 
      value: `₹${realTimeStats.totalSales.toLocaleString()}`, 
      change: '+23%', 
      icon: DollarSign, 
      color: 'cyan',
      trend: 'up'
    },
    { 
      title: 'Orders', 
      value: realTimeStats.orders.toString(), 
      change: '+18%', 
      icon: ShoppingCart, 
      color: 'purple',
      trend: 'up'
    },
    { 
      title: 'Store Views', 
      value: realTimeStats.visitors.toLocaleString(), 
      change: '+12%', 
      icon: Eye, 
      color: 'green',
      trend: 'up'
    },
    { 
      title: 'Trust Score', 
      value: `${realTimeStats.trustScore.toFixed(1)}/10`, 
      change: '+0.3', 
      icon: Star, 
      color: 'pink',
      trend: 'up'
    }
  ];

  const recentOrders = [
    { 
      id: '#ORD-1234', 
      customer: 'Priya Sharma', 
      product: 'Bohemian Silver Earrings', 
      amount: '₹850', 
      status: 'Delivered',
      timestamp: new Date(Date.now() - 1000 * 60 * 15) // 15 minutes ago
    },
    { 
      id: '#ORD-1235', 
      customer: 'Arjun Mehta', 
      product: 'Handcrafted Necklace Set', 
      amount: '₹1,200', 
      status: 'Processing',
      timestamp: new Date(Date.now() - 1000 * 60 * 45) // 45 minutes ago
    },
    { 
      id: '#ORD-1236', 
      customer: 'Kavya Patel', 
      product: 'Vintage Ring Collection', 
      amount: '₹2,100', 
      status: 'Shipped',
      timestamp: new Date(Date.now() - 1000 * 60 * 120) // 2 hours ago
    }
  ];

  const aiSuggestions = [
    { 
      type: 'inventory', 
      message: 'Your silver earrings are selling fast! Consider restocking soon.', 
      action: 'Add Inventory',
      priority: 'high',
      impact: '+₹15K potential revenue'
    },
    { 
      type: 'pricing', 
      message: 'Based on competitor analysis, you could increase necklace prices by 15%.', 
      action: 'Adjust Pricing',
      priority: 'medium',
      impact: '+12% profit margin'
    },
    { 
      type: 'marketing', 
      message: 'Launch a festival collection campaign - Diwali season is approaching!', 
      action: 'Create Campaign',
      priority: 'high',
      impact: '+40% seasonal boost'
    }
  ];

  const getTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    
    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toggle Bar */}
        <ToggleBar 
          onFilterChange={setFilters}
          onViewChange={setCurrentView}
          currentView={currentView}
        />

        {/* Store Header */}
        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 mb-8 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Jaipur Boho Collection</h1>
              <p className="text-gray-300">Handcrafted jewelry for the modern bohemian spirit</p>
              <div className="flex items-center mt-3 space-x-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm text-green-400 font-medium">Store Live</span>
                </div>
                <div className="flex items-center">
                  <Wifi className="w-3 h-3 text-cyan-400 mr-1" />
                  <span className="text-xs text-gray-400">neocommerce.ai/jaipur-boho</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-400">
                    Updated {getTimeAgo(liveData.lastUpdated)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <div className="flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 px-4 py-2 rounded-lg">
                <Star className="w-4 h-4 text-yellow-400 mr-2 fill-current" />
                <span className="text-sm font-medium text-yellow-400">Trust Score: {realTimeStats.trustScore.toFixed(1)}/10</span>
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center shadow-lg shadow-cyan-400/25">
                <Eye className="w-4 h-4 mr-2" />
                View Store
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r ${
                  stat.color === 'cyan' ? 'from-cyan-500/20 to-blue-500/20 border border-cyan-500/30' :
                  stat.color === 'purple' ? 'from-purple-500/20 to-pink-500/20 border border-purple-500/30' :
                  stat.color === 'green' ? 'from-green-500/20 to-emerald-500/20 border border-green-500/30' :
                  'from-pink-500/20 to-red-500/20 border border-pink-500/30'
                } shadow-lg`}>
                  <stat.icon className={`w-5 h-5 ${
                    stat.color === 'cyan' ? 'text-cyan-400' :
                    stat.color === 'purple' ? 'text-purple-400' :
                    stat.color === 'green' ? 'text-green-400' : 'text-pink-400'
                  }`} />
                </div>
                <div className="flex items-center">
                  <Activity className="w-3 h-3 text-green-400 mr-1" />
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    stat.change.startsWith('+') 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.title}</div>
              <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${
                  stat.color === 'cyan' ? 'from-cyan-400 to-blue-500' :
                  stat.color === 'purple' ? 'from-purple-400 to-pink-500' :
                  stat.color === 'green' ? 'from-green-400 to-emerald-500' :
                  'from-pink-400 to-red-500'
                } animate-pulse`} style={{ width: '75%' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-2xl">
              <h2 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Plus, label: 'Add Product', color: 'cyan', glow: 'cyan-400' },
                  { icon: BarChart3, label: 'Analytics', color: 'purple', glow: 'purple-400' },
                  { icon: MessageCircle, label: 'Campaign', color: 'green', glow: 'green-400' },
                  { icon: Package, label: 'Inventory', color: 'pink', glow: 'pink-400' }
                ].map((action, index) => (
                  <button 
                    key={index}
                    className={`flex flex-col items-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-lg hover:border-${action.color}-400/50 transition-all duration-300 group hover:shadow-lg hover:shadow-${action.glow}/20 hover:-translate-y-1`}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r from-${action.color}-500/20 to-${action.color}-600/20 border border-${action.color}-500/30 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-${action.glow}/25`}>
                      <action.icon className={`w-5 h-5 text-${action.color}-400`} />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white flex items-center">
                  <Activity className="w-5 h-5 text-green-400 mr-2" />
                  Live Orders
                </h2>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Real-time</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 bg-gray-900/50 border border-gray-700/30 rounded-lg hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-medium text-white">{order.id}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                          order.status === 'Delivered' 
                            ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                          order.status === 'Processing' 
                            ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                            'bg-blue-500/20 text-blue-400 border-blue-500/30'
                        }`}>
                          {order.status}
                        </span>
                        <span className="text-xs text-gray-500">
                          {getTimeAgo(order.timestamp)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">{order.customer} • {order.product}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-white">{order.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* AI Suggestions */}
            <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-cyan-400/25">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-white">AI Insights</h2>
              </div>
              
              <div className="space-y-4">
                {aiSuggestions.map((suggestion, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/30 rounded-lg p-4 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        suggestion.priority === 'high' 
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {suggestion.priority} priority
                      </div>
                      <span className="text-xs text-green-400 font-medium">{suggestion.impact}</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">{suggestion.message}</p>
                    <button className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 px-3 py-2 rounded-lg text-xs font-medium hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                      {suggestion.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Score Details */}
            <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-2xl">
              <h2 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2 fill-current" />
                Trust Score Breakdown
              </h2>
              
              <div className="space-y-4">
                {[
                  { label: 'Order Completion', value: 95, color: 'green' },
                  { label: 'Customer Reviews', value: 92, color: 'yellow' },
                  { label: 'Response Time', value: 88, color: 'blue' },
                  { label: 'Social Presence', value: 75, color: 'purple' }
                ].map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">{metric.label}</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r transition-all duration-1000 ${
                            metric.color === 'green' ? 'from-green-400 to-emerald-500' :
                            metric.color === 'yellow' ? 'from-yellow-400 to-orange-500' :
                            metric.color === 'blue' ? 'from-blue-400 to-cyan-500' :
                            'from-purple-400 to-pink-500'
                          } shadow-lg`}
                          style={{ width: `${metric.value}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-white w-8">{metric.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-sm text-gray-300 mb-2">
                  <strong className="text-yellow-400">Boost your score:</strong> Add 5 more customer reviews to reach 9.0/10
                </p>
                <button className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400 px-3 py-1 rounded-lg text-xs font-medium hover:from-yellow-500/30 hover:to-orange-500/30 transition-all duration-300">
                  Send Review Requests
                </button>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-2xl">
              <h2 className="text-lg font-semibold text-white mb-6 flex items-center">
                <MessageCircle className="w-5 h-5 text-purple-400 mr-2" />
                AI Assistant
              </h2>
              
              <div className="space-y-3 mb-4">
                <div className="bg-gray-900/50 border border-gray-700/30 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-300">How can I help you manage your store today?</p>
                </div>
              </div>
              
              <div className="flex space-x-2 mb-4">
                <input 
                  type="text" 
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-sm text-gray-300 placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all shadow-lg shadow-cyan-400/25">
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-2">
                {[
                  "Add a new necklace product",
                  "Send discount offer to customers", 
                  "Update my store colors"
                ].map((suggestion, index) => (
                  <button 
                    key={index}
                    className="w-full text-left text-xs text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded hover:bg-gray-900/30"
                  >
                    "{suggestion}"
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Recommendations Section */}
        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 mt-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Zap className="w-5 h-5 text-cyan-400 mr-2" />
              <h2 className="text-lg font-semibold text-white">Smart Recommendations</h2>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live AI Analysis</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {aiSuggestions.map((suggestion, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/30 rounded-lg p-4 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    suggestion.priority === 'high' 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {suggestion.priority}
                  </div>
                  <span className="text-xs text-green-400 font-medium">{suggestion.impact}</span>
                </div>
                <p className="text-sm text-gray-300 mb-3">{suggestion.message}</p>
                <button className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 px-3 py-2 rounded-lg text-xs font-medium hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                  {suggestion.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;