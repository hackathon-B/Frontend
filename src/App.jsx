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
  // dark modeの状態
  // Appで管理することで配下のコンポーネントでもdark modeを管理できる
  const [darkMode, setDarkMode] = useState(false);

  // dark modeの設定
  useEffect(() => {
    // ページ呼び出し時にユーザーのシステムの設定を確認
    // window.matchMediaメソッドでシステムの設定を確認 (CSSの "@media" のようなもの)
    // prefers-color-scheme: 値は "dark" or "light"など(CSS標準値)
    // 下記の記述ではシステムの設定がdarkの場合はtrueを返す
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // dark modeの適用
  useEffect(() => {
    if (darkMode) {
      // document.documentElementはhtml要素を指す
      // classListは要素に適用されたクラスを管理する
      // add:  darkクラスを適用する
      document.documentElement.classList.add('dark');
    } else {
      // remove:  darkクラスを削除する
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    // store.jsxで管理しているAuthProvider関数を使用して
    // ユーザー情報を配下のコンポーネントで使用できるようにする
    // useContextを使用してAuthProviderのvalueを取得する
    <AuthProvider>
      <div className="
        bg-primary-light dark:bg-primary-dark
        text-text-light dark:text-text-dark
      ">
        {/* MUIのFormControlLabelを使用してdark modeの切り替え */}
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