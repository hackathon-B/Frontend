<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
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
>>>>>>> dev
