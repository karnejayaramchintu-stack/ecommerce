import React, { createContext, useContext, useState, useEffect } from 'react';

interface LiveData {
  stores: any[];
  analytics: any;
  notifications: any[];
  lastUpdated: Date;
  isConnected: boolean;
}

interface DataContextType {
  liveData: LiveData;
  refreshData: () => void;
  updateSettings: (settings: any) => void;
  markNotificationRead: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [liveData, setLiveData] = useState<LiveData>({
    stores: [],
    analytics: {},
    notifications: [],
    lastUpdated: new Date(),
    isConnected: false
  });

  // Simulate real-time data connection
  useEffect(() => {
    const connectToLiveData = async () => {
      // Simulate API connection
      setTimeout(() => {
        setLiveData(prev => ({
          ...prev,
          isConnected: true,
          lastUpdated: new Date()
        }));
      }, 1000);
    };

    connectToLiveData();

    // Simulate real-time updates every 30 seconds
    const interval = setInterval(() => {
      setLiveData(prev => ({
        ...prev,
        lastUpdated: new Date(),
        analytics: {
          ...prev.analytics,
          totalSales: Math.floor(Math.random() * 1000000) + 500000,
          orders: Math.floor(Math.random() * 1000) + 200,
          visitors: Math.floor(Math.random() * 5000) + 1000,
          trustScore: (Math.random() * 2 + 8).toFixed(1)
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const refreshData = () => {
    setLiveData(prev => ({
      ...prev,
      lastUpdated: new Date()
    }));
  };

  const updateSettings = (settings: any) => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
  };

  const markNotificationRead = (id: string) => {
    setLiveData(prev => ({
      ...prev,
      notifications: prev.notifications.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    }));
  };

  return (
    <DataContext.Provider value={{ liveData, refreshData, updateSettings, markNotificationRead }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};