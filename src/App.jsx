import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import { AuthProvider } from './store';
import Login from './pages/Login';
import Chat from './pages/Chat';
import User from './pages/User';
import Dictionary from './pages/Dictionary';
import NotFound from './pages/NotFound';
import './index.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Chat />}/>
        <Route path="/user" element={<User />}/>
        <Route path="/dictionary" element={<Dictionary />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </>
  );
};

export default App;