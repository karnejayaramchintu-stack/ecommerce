import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  X, 
  Filter,
  Clock,
  Zap,
  TrendingUp,
  Package,
  Users,
  CreditCard
} from 'lucide-react';
import { useData } from '../context/DataContext';

const Notifications = () => {
  const { liveData, markNotificationRead } = useData();
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'success',
      title: 'New Order Received',
      message: 'Priya Sharma ordered Bohemian Silver Earrings for ₹850',
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
      read: false,
      category: 'orders',
      priority: 'high'
    },
    {
      id: '2',
      type: 'warning',
      title: 'Low Stock Alert',
      message: 'Handcrafted Necklace Set has only 3 items left in inventory',
      timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
      read: false,
      category: 'inventory',
      priority: 'medium'
    },
    {
      id: '3',
      type: 'info',
      title: 'Trust Score Updated',
      message: 'Your trust score increased to 8.7/10 (+0.2 from last week)',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      read: true,
      category: 'analytics',
      priority: 'low'
    },
    {
      id: '4',
      type: 'success',
      title: 'Payment Received',
      message: 'Payment of ₹1,200 from Arjun Mehta has been processed successfully',
      timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
      read: false,
      category: 'payments',
      priority: 'high'
    },
    {
      id: '5',
      type: 'info',
      title: 'New Review Posted',
      message: 'Kavya Patel left a 5-star review for Vintage Ring Collection',
      timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
      read: true,
      category: 'reviews',
      priority: 'medium'
    }
  ]);

  // Simulate real-time notifications
  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now().toString(),
        type: ['success', 'warning', 'info'][Math.floor(Math.random() * 3)],
        title: 'Live Update',
        message: 'Real-time notification from your store',
        timestamp: new Date(),
        read: false,
        category: 'live',
        priority: 'medium'
      };
      
      setNotifications(prev => [newNotification, ...prev.slice(0, 9)]);
    }, 30000); // New notification every 30 seconds

    return () => clearInterval(interval);
  }, []);

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

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return CheckCircle;
      case 'warning': return AlertTriangle;
      case 'error': return X;
      default: return Info;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success': return 'green';
      case 'warning': return 'yellow';
      case 'error': return 'red';
      default: return 'blue';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'orders': return Package;
      case 'payments': return CreditCard;
      case 'analytics': return TrendingUp;
      case 'inventory': return Package;
      case 'reviews': return Users;
      default: return Bell;
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    return notification.category === filter;
  });

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
    markNotificationRead(id);
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 mb-8 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2 flex items-center">
                <Bell className="w-6 h-6 text-cyan-400 mr-3" />
                Notifications
              </h1>
              <p className="text-gray-400">Stay updated with your store activity</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Updates</span>
              </div>
              <button
                onClick={markAllAsRead}
                className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 text-sm"
              >
                Mark All Read
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 mb-6 shadow-2xl">
          <div className="flex items-center space-x-4">
            <Filter className="w-4 h-4 text-gray-400" />
            <div className="flex space-x-2">
              {[
                { id: 'all', label: 'All', count: notifications.length },
                { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
                { id: 'orders', label: 'Orders', count: notifications.filter(n => n.category === 'orders').length },
                { id: 'payments', label: 'Payments', count: notifications.filter(n => n.category === 'payments').length },
                { id: 'analytics', label: 'Analytics', count: notifications.filter(n => n.category === 'analytics').length }
              ].map((filterOption) => (
                <button
                  key={filterOption.id}
                  onClick={() => setFilter(filterOption.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filter === filterOption.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-400/25'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50'
                  }`}
                >
                  {filterOption.label}
                  {filterOption.count > 0 && (
                    <span className="ml-2 px-1.5 py-0.5 bg-gray-700 rounded-full text-xs">
                      {filterOption.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.map((notification) => {
            const IconComponent = getNotificationIcon(notification.type);
            const CategoryIcon = getCategoryIcon(notification.category);
            const color = getNotificationColor(notification.type);
            
            return (
              <div 
                key={notification.id}
                className={`bg-gray-800/50 backdrop-blur-md border rounded-xl p-6 shadow-2xl transition-all duration-300 hover:shadow-cyan-400/10 ${
                  notification.read 
                    ? 'border-gray-700/50 opacity-75' 
                    : 'border-gray-700/50 hover:border-cyan-400/30'
                }`}
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r ${
                    color === 'green' ? 'from-green-500/20 to-emerald-500/20 border border-green-500/30' :
                    color === 'yellow' ? 'from-yellow-500/20 to-orange-500/20 border border-yellow-500/30' :
                    color === 'red' ? 'from-red-500/20 to-pink-500/20 border border-red-500/30' :
                    'from-blue-500/20 to-cyan-500/20 border border-blue-500/30'
                  } shadow-lg`}>
                    <IconComponent className={`w-5 h-5 ${
                      color === 'green' ? 'text-green-400' :
                      color === 'yellow' ? 'text-yellow-400' :
                      color === 'red' ? 'text-red-400' : 'text-blue-400'
                    }`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-white">{notification.title}</h3>
                        <CategoryIcon className="w-3 h-3 text-gray-500" />
                        {!notification.read && (
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          notification.priority === 'high' 
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                          notification.priority === 'medium'
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                            'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}>
                          {notification.priority}
                        </div>
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-3">{notification.message}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{getTimeAgo(notification.timestamp)}</span>
                      </div>
                      
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredNotifications.length === 0 && (
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-12 text-center shadow-2xl">
            <Bell className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-400 mb-2">No notifications</h3>
            <p className="text-gray-500">You're all caught up! New notifications will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;