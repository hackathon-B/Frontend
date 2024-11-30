import { Routes, Route } from 'react-router-dom';
import { Switch, FormControlLabel } from '@mui/material';

// ページ
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import UserPage from './pages/UserPage';
import DictionaryPage from './pages/DictionaryPage';
import NotFoundPage from './pages/NotFoundPage';

// コンポーネント
import { AuthProvider } from './store';
import './index.css'
import { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // dark modeの設定
  useEffect(() => {
    // システムの設定を確認
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // dark modeの適用
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <AuthProvider>
      <div className="
        bg-primary-light dark:bg-primary-dark
        text-text-light dark:text-text-dark
      ">
        <FormControlLabel
          sx={{
            position: 'absolute',
            top: '8px',
            left: '50px',
            zIndex: 50,
          }}
          control={
            <Switch
              size="small"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              sx={{
                '& .MuiSwitch-thumb': {
                  backgroundColor: darkMode ? '#444444' : '#CCCCCC',
                },
                '& .MuiSwitch-track': {
                  backgroundColor: darkMode ? '#666666' : '#888888',
                }
              }}
            />
          }
        />
        
        <Routes>
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ChatPage />}/>
          <Route path="/user" element={<UserPage />}/>
          <Route path="/dictionary" element={<DictionaryPage />}/>
          <Route path="/*" element={<NotFoundPage />}/>
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;