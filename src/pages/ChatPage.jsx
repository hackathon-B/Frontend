import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import ChatWindow from '../components/ChatWindow'
import ChatWindowMaluti from '../components/ChatWindowMaluti'
import ChatList from '../components/ChatList'
import DictionaryList from '../components/DictionaryList'
import DictionaryEditor from '../components/DictionaryEditor'
import Split from 'split.js';
import '../css/split.css';

import { Drawer, Box, IconButton, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';


const ChatPage = () => {
  const [open, setOpen] = useState(false);
  const [showMultiWindow, setShowMultiWindow] = useState(false);

  useEffect(() => {
    Split(['#chat-list', '#dictionary-list', '#dictionary-editor'],{
        sizes: [25, 25, 50 ], 
        minSize: 80,
        gutterSize: 10,
        direction: 'vertical'    // 上下分割
    });
  }, []);
  
  const handleDrawerToggle = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <div className="w-full h-full flex flex-col relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Tooltip title="サイドバーを開く">
          <IconButton 
            onClick={handleDrawerToggle}
            size="medium"
            sx={{ width: '40px', height: '40px'}}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
        
        <Header />
      </div>

      {/* Body */}
      <Box sx={{ 
        height: 'calc(100vh - 40px)', 
        display: 'flex', 
        flexDirection: 'row', 
        overflow: 'hidden',
        position: 'relative'
      }}>
        
        {/* Sidebar */}
        <Box
          sx={{
            width: open ? '300px' : '0px',
            transition: 'width 0.3s ease',
            overflow: 'hidden'
          }}
        >
          <Drawer
            variant="persistent"
            open={open}
            sx={{
              '& .MuiDrawer-paper': {
                height: 'calc(100vh - 40px)',
                width: '300px',
                position: 'relative',
                transition: 'width 0.3s ease',
              },
            }}
          >
            {/* Sidebar Content */}
            <div className="split-column" style={{ padding: '1rem', height: '100%' }}>
              
              <div id="chat-list">
                <ChatList />
              </div>
              <div id="dictionary-list">
                <DictionaryList />
              </div>
              <div id="dictionary-editor">
                <DictionaryEditor />
              </div>

            </div>            
          
          </Drawer>
        </Box>

        {/* Main Content */}
        <Box 
          sx={{ 
            width: open ? 'calc(100% - 300px)' : '100%',
            transition: 'width 0.3s ease',
            position: 'relative'
          }}
        >
          {showMultiWindow ? (
            <ChatWindowMaluti />
          ) : (
            <ChatWindow />
          )}
        </Box>
      </Box>

      <Tooltip 
        title="チャットウィンドウを追加" 
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000
        }}
      >
        <IconButton 
          onClick={() => setShowMultiWindow(prevState => !prevState)}
          size="large"
          sx={{ 
            width: '56px', 
            height: '56px',
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
            color: 'white',
            boxShadow: 3
          }}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default ChatPage;