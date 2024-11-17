import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import ChatWindow from '../components/ChatWindow'
import ChatWindowMaluti from '../components/ChatWindowMaluti'
import ChatList from '../components/ChatList'
import DictionaryList from '../components/DictionaryList'

import { Container, Button, Drawer, Box } from '@mui/material';


const ChatPage = () => {
  const [open, setOpen] = useState(false);
  const [showMultiWindow, setShowMultiWindow] = useState(false);
  const [chatContent1, setChatContent1] = useState('Content for Button 1');
  const [chatContent2, setChatContent2] = useState('Content for Button 2');

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(isOpen);
  };

    

  return (
    <>
      <div className="w-full h-full flex flex-col" >
          
        <Header />

        <Box sx={{ height: 'calc(100vh - 40px)', display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
          
          <Button onClick={toggleDrawer(true)}>Sidebar</Button>
          <Button onClick={() => setShowMultiWindow(prevState => !prevState)}>ChatAdd</Button>
          
          <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            sx={{
              '& .MuiDrawer-paper': {
                  width: '240px',
              },
            }}
          >
            <ChatList />
            <DictionaryList />
          </Drawer>
          
          {showMultiWindow ? (
            <ChatWindowMaluti />
          ) : (
            <ChatWindow />
          )}
        </Box>

      </div>
    </>
  );
};

export default ChatPage;