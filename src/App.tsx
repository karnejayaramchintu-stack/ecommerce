import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import StoreBuilder from './components/StoreBuilder';
import CreatorDashboard from './components/CreatorDashboard';
import SampleStore from './components/SampleStore';
import Header from './components/Header';
import Settings from './components/Settings';
import Notifications from './components/Notifications';
import { DataProvider } from './context/DataContext';

function App() {
  const [currentStore, setCurrentStore] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <DataProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/build" 
              element={<StoreBuilder onStoreGenerated={setCurrentStore} />} 
            />
            <Route path="/dashboard" element={<CreatorDashboard />} />
            <Route path="/store/*" element={<SampleStore />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;