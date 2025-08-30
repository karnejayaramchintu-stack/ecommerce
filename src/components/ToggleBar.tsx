import React, { useState } from 'react';
import { 
  Filter, 
  Calendar, 
  Package, 
  TrendingUp, 
  Users, 
  BarChart3,
  RefreshCw,
  ChevronDown
} from 'lucide-react';

interface ToggleBarProps {
  onFilterChange: (filters: any) => void;
  onViewChange: (view: string) => void;
  currentView: string;
}

const ToggleBar: React.FC<ToggleBarProps> = ({ onFilterChange, onViewChange, currentView }) => {
  const [activeFilters, setActiveFilters] = useState({
    timeRange: '7d',
    category: 'all',
    status: 'all'
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const views = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'customers', label: 'Customers', icon: Users }
  ];

  const timeRanges = [
    { id: '1d', label: '24h' },
    { id: '7d', label: '7 days' },
    { id: '30d', label: '30 days' },
    { id: '90d', label: '90 days' }
  ];

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'jewelry', label: 'Jewelry' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'clothing', label: 'Clothing' }
  ];

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...activeFilters, [key]: value };
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 mb-6 shadow-2xl">
      {/* Main Toggle Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* View Toggles */}
        <div className="flex items-center space-x-2">
          <div className="flex bg-gray-900/50 rounded-lg p-1 border border-gray-700">
            {views.map((view) => (
              <button
                key={view.id}
                onClick={() => onViewChange(view.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${
                  currentView === view.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-400/25'
                    : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50'
                }`}
              >
                <view.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{view.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center space-x-4">
          {/* Time Range */}
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <select
              value={activeFilters.timeRange}
              onChange={(e) => handleFilterChange('timeRange', e.target.value)}
              className="bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            >
              {timeRanges.map((range) => (
                <option key={range.id} value={range.id} className="bg-gray-900">
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Advanced Filters Toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all duration-300 ${
              isExpanded
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400'
                : 'bg-gray-900/50 border-gray-700 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-400'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filters</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          {/* Refresh Button */}
          <button
            onClick={() => window.location.reload()}
            className="p-2 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-400 hover:text-green-400 hover:border-green-400/50 transition-all duration-300 group"
          >
            <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </div>

      {/* Expanded Filters */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-700/50 animate-in slide-in-from-top-2 duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">Category</label>
              <select
                value={activeFilters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-gray-900">
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">Status</label>
              <select
                value={activeFilters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-all"
              >
                <option value="all" className="bg-gray-900">All Status</option>
                <option value="active" className="bg-gray-900">Active</option>
                <option value="pending" className="bg-gray-900">Pending</option>
                <option value="completed" className="bg-gray-900">Completed</option>
              </select>
            </div>

            {/* Quick Actions */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">Quick Actions</label>
              <div className="flex space-x-2">
                <button className="flex-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 px-3 py-2 rounded-lg text-xs font-medium hover:from-green-500/30 hover:to-emerald-500/30 transition-all">
                  Export Data
                </button>
                <button className="flex-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 px-3 py-2 rounded-lg text-xs font-medium hover:from-blue-500/30 hover:to-cyan-500/30 transition-all">
                  Sync Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Data Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-60"></div>
    </div>
  );
};

export default Header;