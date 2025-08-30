import React, { useState, useEffect } from 'react';
import { 
  User, 
  Palette, 
  Bell, 
  Shield, 
  Globe, 
  CreditCard,
  Save,
  RefreshCw,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Eye,
  EyeOff
} from 'lucide-react';
import { useData } from '../context/DataContext';

const Settings = () => {
  const { updateSettings } = useData();
  const [settings, setSettings] = useState({
    profile: {
      name: 'Jaipur Boho Collection',
      email: 'creator@neocommerce.ai',
      phone: '+91 98765 43210',
      location: 'Jaipur, Rajasthan'
    },
    theme: {
      darkMode: true,
      accentColor: 'cyan',
      animations: true,
      compactMode: false
    },
    notifications: {
      email: true,
      push: true,
      sms: false,
      marketing: true,
      orderUpdates: true,
      lowStock: true
    },
    privacy: {
      profileVisible: true,
      analyticsSharing: false,
      dataCollection: true
    },
    store: {
      currency: 'INR',
      timezone: 'Asia/Kolkata',
      language: 'en',
      autoBackup: true
    }
  });

  const [hasChanges, setHasChanges] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleSettingChange = (category: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
    setHasChanges(true);
  };

  const saveSettings = async () => {
    setSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    updateSettings(settings);
    localStorage.setItem('userSettings', JSON.stringify(settings));
    setHasChanges(false);
    setSaving(false);
  };

  const accentColors = [
    { id: 'cyan', name: 'Neon Blue', color: 'from-cyan-400 to-blue-500' },
    { id: 'purple', name: 'Electric Purple', color: 'from-purple-400 to-pink-500' },
    { id: 'green', name: 'Neon Green', color: 'from-green-400 to-emerald-500' },
    { id: 'pink', name: 'Bright Pink', color: 'from-pink-400 to-red-500' }
  ];

  const ToggleSwitch = ({ enabled, onChange, color = 'cyan' }: any) => (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
        enabled 
          ? `bg-gradient-to-r from-${color}-500 to-${color}-600 shadow-lg shadow-${color}-400/25` 
          : 'bg-gray-700 border border-gray-600'
      }`}
    >
      <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
        enabled ? 'translate-x-6' : 'translate-x-0'
      } shadow-lg`}></div>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 mb-8 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Settings</h1>
              <p className="text-gray-400">Customize your store and account preferences</p>
            </div>
            
            {hasChanges && (
              <button
                onClick={saveSettings}
                disabled={saving}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center shadow-lg shadow-cyan-400/25 disabled:opacity-50"
              >
                {saving ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Save className="w-4 h-4 mr-2" />
                )}
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Settings */}
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-2xl">
            <div className="flex items-center mb-6">
              <User className="w-5 h-5 text-cyan-400 mr-2" />
              <h2 className="text-lg font-semibold text-white">Profile</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Store Name</label>
                <input
                  type="text"
                  value={settings.profile.name}
                  onChange={(e) => handleSettingChange('profile', 'name', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={settings.profile.email}
                  onChange={(e) => handleSettingChange('profile', 'email', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  value={settings.profile.phone}
                  onChange={(e) => handleSettingChange('profile', 'phone', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <input
                  type="text"
                  value={settings.profile.location}
                  onChange={(e) => handleSettingChange('profile', 'location', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-2xl">
            <div className="flex items-center mb-6">
              <Palette className="w-5 h-5 text-purple-400 mr-2" />
              <h2 className="text-lg font-semibold text-white">Appearance</h2>
            </div>
            
            <div className="space-y-6">
              {/* Dark Mode Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {settings.theme.darkMode ? (
                    <Moon className="w-4 h-4 text-gray-400 mr-2" />
                  ) : (
                    <Sun className="w-4 h-4 text-yellow-400 mr-2" />
                  )}
                  <span className="text-sm text-gray-300">Dark Mode</span>
                </div>
                <ToggleSwitch 
                  enabled={settings.theme.darkMode}
                  onChange={(value: boolean) => handleSettingChange('theme', 'darkMode', value)}
                />
              </div>

              {/* Accent Color */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Accent Color</label>
                <div className="grid grid-cols-2 gap-2">
                  {accentColors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => handleSettingChange('theme', 'accentColor', color.id)}
                      className={`p-3 rounded-lg border transition-all duration-300 ${
                        settings.theme.accentColor === color.id
                          ? 'border-white shadow-lg'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className={`w-full h-3 bg-gradient-to-r ${color.color} rounded mb-2`}></div>
                      <span className="text-xs text-gray-300">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Animations Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Animations</span>
                <ToggleSwitch 
                  enabled={settings.theme.animations}
                  onChange={(value: boolean) => handleSettingChange('theme', 'animations', value)}
                  color="purple"
                />
              </div>

              {/* Compact Mode */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Compact Mode</span>
                <ToggleSwitch 
                  enabled={settings.theme.compactMode}
                  onChange={(value: boolean) => handleSettingChange('theme', 'compactMode', value)}
                  color="green"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-2xl">
            <div className="flex items-center mb-6">
              <Bell className="w-5 h-5 text-green-400 mr-2" />
              <h2 className="text-lg font-semibold text-white">Notifications</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { key: 'email', label: 'Email Notifications', icon: Globe },
                { key: 'push', label: 'Push Notifications', icon: Bell },
                { key: 'sms', label: 'SMS Alerts', icon: Volume2 },
                { key: 'orderUpdates', label: 'Order Updates', icon: Package },
                { key: 'lowStock', label: 'Low Stock Alerts', icon: RefreshCw },
                { key: 'marketing', label: 'Marketing Updates', icon: TrendingUp }
              ].map((notification) => (
                <div key={notification.key} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <notification.icon className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-300">{notification.label}</span>
                  </div>
                  <ToggleSwitch 
                    enabled={settings.notifications[notification.key]}
                    onChange={(value: boolean) => handleSettingChange('notifications', notification.key, value)}
                    color="green"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Store Configuration */}
        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 mt-8 shadow-2xl">
          <div className="flex items-center mb-6">
            <Globe className="w-5 h-5 text-blue-400 mr-2" />
            <h2 className="text-lg font-semibold text-white">Store Configuration</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Currency</label>
              <select
                value={settings.store.currency}
                onChange={(e) => handleSettingChange('store', 'currency', e.target.value)}
                className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
              >
                <option value="INR" className="bg-gray-900">Indian Rupee (₹)</option>
                <option value="USD" className="bg-gray-900">US Dollar ($)</option>
                <option value="EUR" className="bg-gray-900">Euro (€)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Timezone</label>
              <select
                value={settings.store.timezone}
                onChange={(e) => handleSettingChange('store', 'timezone', e.target.value)}
                className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
              >
                <option value="Asia/Kolkata" className="bg-gray-900">Asia/Kolkata</option>
                <option value="America/New_York" className="bg-gray-900">America/New_York</option>
                <option value="Europe/London" className="bg-gray-900">Europe/London</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
              <select
                value={settings.store.language}
                onChange={(e) => handleSettingChange('store', 'language', e.target.value)}
                className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
              >
                <option value="en" className="bg-gray-900">English</option>
                <option value="hi" className="bg-gray-900">Hindi</option>
                <option value="es" className="bg-gray-900">Spanish</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Auto Backup</span>
              <ToggleSwitch 
                enabled={settings.store.autoBackup}
                onChange={(value: boolean) => handleSettingChange('store', 'autoBackup', value)}
                color="blue"
              />
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 mt-8 shadow-2xl">
          <div className="flex items-center mb-6">
            <Shield className="w-5 h-5 text-pink-400 mr-2" />
            <h2 className="text-lg font-semibold text-white">Privacy & Security</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-300">Profile Visible</span>
                </div>
                <ToggleSwitch 
                  enabled={settings.privacy.profileVisible}
                  onChange={(value: boolean) => handleSettingChange('privacy', 'profileVisible', value)}
                  color="pink"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BarChart3 className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-300">Analytics Sharing</span>
                </div>
                <ToggleSwitch 
                  enabled={settings.privacy.analyticsSharing}
                  onChange={(value: boolean) => handleSettingChange('privacy', 'analyticsSharing', value)}
                  color="pink"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-300">Data Collection</span>
                </div>
                <ToggleSwitch 
                  enabled={settings.privacy.dataCollection}
                  onChange={(value: boolean) => handleSettingChange('privacy', 'dataCollection', value)}
                  color="pink"
                />
              </div>
              
              <button className="w-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-red-400 px-4 py-2 rounded-lg hover:from-red-500/30 hover:to-pink-500/30 transition-all duration-300 text-sm">
                Delete Account
              </button>
            </div>
          </div>
        </div>

        {/* Save Button (Mobile) */}
        {hasChanges && (
          <div className="fixed bottom-6 right-6 lg:hidden">
            <button
              onClick={saveSettings}
              disabled={saving}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-110 shadow-2xl shadow-cyan-400/25 disabled:opacity-50"
            >
              {saving ? (
                <RefreshCw className="w-6 h-6 animate-spin" />
              ) : (
                <Save className="w-6 h-6" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;