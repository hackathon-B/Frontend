import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
        <div position="relative" color="primary" className="h-10 flex justify-end items-center">
                <div>hogehoge@gmail.com</div>

                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                    <MenuIcon />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>設定</MenuItem>
                    <MenuItem onClick={handleMenuClose}>ログアウト</MenuItem>
                </Menu>
        </div>
    </>
  )
}

export default Header