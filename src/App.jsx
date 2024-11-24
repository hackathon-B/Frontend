// import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import { AuthProvider } from './store';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import UserPage from './pages/UserPage';
import DictionaryPage from './pages/DictionaryPage';
import NotFoundPage from './pages/NotFoundPage';
import './index.css'
import { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // システムの設定を確認
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="
      bg-primary-light dark:bg-primary-dark
      text-text-light dark:text-text-dark
    ">
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="
          w-8 h-8
          bg-secondary-light dark:bg-secondary-dark
          hover:bg-gray-200 dark:hover:bg-gray-700
          p-2 rounded-lg
          text-sm
        "
      >
        {darkMode ? '🌞' : '🌙'}
      </button>
      
      <Routes>
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ChatPage />}/>
        <Route path="/user" element={<UserPage />}/>
        <Route path="/dictionary" element={<DictionaryPage />}/>
        <Route path="/*" element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
};

export default App;