import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'


function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
        <AppBar position="fixed" color="primary" sx={{ height: '40px' }}>
            <Toolbar sx={{ justifyContent: 'flex-end', paddingRight: '32px' }}>

                <a> ここにemailを表示 </a>

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
                
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header