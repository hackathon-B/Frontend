import React, { useState, useEffect } from 'react';
import Split from 'split.js';
import Header from '../components/Header'
import ChatWindow from '../components/ChatWindow'
import ChatList from '../components/ChatList'
import DictionaryList from '../components/DictionaryList'

import { Container, Button, Drawer, Box } from '@mui/material';


function ChatPage() {
    const [open, setOpen] = useState(false);
    const [showChatWindow2, setShowChatWindow2] = useState(false);
    const [chatContent1, setChatContent1] = useState('Content for Button 1');
    const [chatContent2, setChatContent2] = useState('Content for Button 2');

    useEffect(() => {
        if (showChatWindow2) {
            Split(['#chatWindow1', '#chatWindow2'], {
                sizes: [50, 50],
                minSize: 100,
                gutterSize: 10,
                cursor: 'col-resize',
            });
        }
    }, []);

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
        <Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            
            <Header />

            <Box sx={{ height: 'calc(100vh - 40px)', display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                <Button onClick={toggleDrawer(true)}>Sidebar</Button>
                <Button onClick={() => setShowChatWindow2(prevState => !prevState)}>ChatAdd</Button>
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
                
                <div id="chatWindow1" style={{ flexGrow: 1 }}>
                    <ChatWindow content={chatContent1} />
                </div>
                {showChatWindow2 && (
                    <div id="chatWindow2" style={{ flexGrow: 1 }}>
                        <ChatWindow content={chatContent2} />
                    </div>
                )}
            </Box>
        </Container>
      </>
    );
};

export default ChatPage;