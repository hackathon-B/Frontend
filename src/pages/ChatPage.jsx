import { useState, useEffect, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store';
// 共通
import { callApi } from '../common/api';
import { API_URLS } from '../common/constants';
// モックデータのインポート
import { mockMessages } from '../common/MockDatas';
// コンポーネント
import Header from '../components/Header'
import ChatWindow from '../components/chatComponents/ChatWindow'
import ChatWindowMaluti from '../components/chatComponents/ChatWindowMaluti'
import ChatList from '../components/ChatList'
import DictionaryList from '../components/DictionaryList'
import DictionaryEditor from '../components/DictionaryEditor'
// 分割
import Split from 'split.js';
import '../css/split.css';
// MUI
import { Drawer, Box, IconButton, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';


const ChatPage = () => {
  const { setUserInfo, userInfo } = useContext(AuthContext);
  const [cookies] = useCookies(['token']);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showMultiWindow, setShowMultiWindow] = useState(false);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log('現在のチャット:', currentChat);
  }, [currentChat]);

  // ユーザー情報取得
  useEffect(() => {
    if (cookies.token) {
      // ユーザー情報取得
      callApi('GET', API_URLS.GET_USER, null)
        .then(response => {
          setUserInfo(response);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      navigate('/login');
    }
  }, []);


  useEffect(() => {
    Split(['#chat-list', '#dictionary-list'],{
        sizes: [50, 50 ], 
        minSize: 80,
        gutterSize: 20,
        direction: 'vertical'    // 上下分割
    });
  }, []);
  
  useEffect(() => {
    if (currentChat?.chat_id) {

      const endpoint = `${API_URLS.GET_CHAT(currentChat.chat_id)}`;
      callApi('GET', endpoint, null)
        .then(response => {
          setMessages(response.messages);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [currentChat?.chat_id]);

  const handleDrawerToggle = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <div className="w-full h-full flex flex-col relative bg-primary-light dark:bg-primary-dark">
      
      {/* Header */}
      <div color="primary" className="h-10 flex items-center justify-between">
        <Tooltip title="サイドバーを開く">
          <IconButton 
            color="inherit"
            onClick={handleDrawerToggle}
            size="medium"
            sx={{ width: '40px', height: '40px'}}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
        
        <Header userEmail={userInfo?.email}/>
      </div>

      {/* Body */}
      <div color="primary"
        className="
          flex flex-row
          relative
          h-[calc(100vh-40px)]
          min-h-0
          overflow-hidden
      ">
        
        {/* Sidebar */}
        <Box color="secondary"
          sx={{
            width: open ? '300px' : '0px',
            height: '100%',
            transition: 'width 0.3s ease',
            overflow: 'hidden',
            paddingBottom: '80px'
          }}
        >
          <Drawer
            color="secondary"
            variant="persistent"
            open={open}
            sx={{
              '& .MuiDrawer-paper': {
                height: 'calc(100vh - 40px)',
                width: '301px',
                position: 'relative',
                transition: 'width 0.3s ease',
              },
            }}
          >

            {/* Sidebar Content */}
            <div className="split-column flex flex-col px-4 py-2 h-full
              bg-primary-light dark:bg-primary-dark
            ">
              <div id="chat-list">
                {/* チャットリスト */}
                <ChatList 
                  userId={userInfo?.user_id}
                  currentChat={currentChat}
                  setCurrentChat={setCurrentChat}
                />
              </div>
              <div id="dictionary-list">
                {/* 辞書リスト */}
                <DictionaryList />
              </div>
            </div>
          
          </Drawer>
        </Box>

        {/* Main Content */}
        <Box 
          sx={{ 
            width: open ? 'calc(100% - 300px)' : '100%',
            height: 'calc(100vh - 40px)',
            transition: 'width 0.3s ease',
            position: 'relative',
            backgroundColor: 'gray-100',
            dark: {
              backgroundColor: 'gray-800',
            },
          }}
        >
          {/* チャットウィンドウ */}
          {showMultiWindow ? (
            // ここではchatIdをpropsとして渡している
            <ChatWindowMaluti chatId={currentChat?.chat_id} setCurrentChat={setCurrentChat}/>
          ) : (
            <ChatWindow chatId={currentChat?.chat_id} setCurrentChat={setCurrentChat}/>
          )}


        {/* チャットウィンドウを追加 */ }
        <div className="absolute top-3 right-3 z-50">
            <Tooltip 
              title="チャットウィンドウを追加" 
            >
              <IconButton 
                onClick={() => setShowMultiWindow(prevState => !prevState)}
                size="large"
                sx={{ 
                  width: '40px', 
                  height: '40px',
                  backgroundColor: 'black',
                  dark: {
                    backgroundColor: 'gray-400',
                  },
                  '&:hover': {
                    backgroundColor: 'gray',
                    dark: {
                      backgroundColor: 'darkgray',
                    },
                  },
                  color: 'white',
                  boxShadow: 3
                }}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ChatPage;