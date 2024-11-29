import React, { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { AuthContext } from '../store.jsx';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(['token']);
  const { setUserInfo } = useContext(AuthContext);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    removeCookie('token', { path: '/' }); // トークンを削除
    setUserInfo(null); // ユーザー情報をクリア
    navigate('/login'); // ログインページにリダイレクト
  };

  return (
    <>
        <div className="relative h-10 flex justify-end items-center bg-primary-light dark:bg-primary-dark p-4">
          <div className="text-text-light dark:text-text-dark mr-4">hogehoge@gmail.com</div>

          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            onClick={handleMenuOpen} 
            sx={{ width: '40px', height: '40px', color: 'text-text-light dark:text-text-dark' }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: (theme) => 
                  theme.palette.mode === 'dark' ? '#333' : '#fff',
                color: (theme) => 
                  theme.palette.mode === 'dark' ? '#fff' : '#000'
              }
            }}
          >
            <MenuItem onClick={handleMenuClose}>設定</MenuItem>
            <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
          </Menu>
        </div>
    </>
  )
}

export default Header