import React, { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { callApi } from './common/api';
import { API_URLS } from './common/constants';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null); // ログイン情報を保持する状態
  const [cookies] = useCookies(['token']);

  useEffect(() => {
    if (cookies.token) {
      callApi('GET', API_URLS.GET_USER, null, cookies.token)
        .then(data => {
          setUserInfo(data);
        })
        .catch(error => {
          console.error('ユーザー情報の取得に失敗しました:', error);
        });
    }
  }, [cookies.token]);

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};