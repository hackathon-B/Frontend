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

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ChatPage />}/>
        <Route path="/user" element={<UserPage />}/>
        <Route path="/dictionary" element={<DictionaryPage />}/>
        <Route path="/*" element={<NotFoundPage />}/>
      </Routes>
    </>
  );
};

export default App;