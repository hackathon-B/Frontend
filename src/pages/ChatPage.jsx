import { useState } from 'react';
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
        <Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                <Button onClick={toggleDrawer(true)}>Sidebar</Button>
                
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
                
                <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    <ChatWindow content={chatContent1} />
                </Box>

                <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    <Button onClick={() => {
                        setShowChatWindow2(!showChatWindow2);
                    }}>
                        {showChatWindow2 ? 'Hide ChatWindow 2' : 'Show ChatWindow 2'}
                    </Button>
                    {showChatWindow2 && <ChatWindow content={chatContent2} />}
                </Box>
            </Box>
        </Container>
    );
};

export default ChatPage;