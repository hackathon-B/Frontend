import React, { useState, useEffect } from 'react'
// 共通
import { callApi } from '../../common/api';
import { API_URLS } from '../../common/constants';
// コンポーネント
import Message from './Message';
import PostMessage from './PostMessage';

const ChatWindow = ({ chatId, onChatIdUpdate }) => {
  const [messages, setMessages] = useState([]);
  
  useEffect(()=>{
    // chatIdに紐づくmassageを全て取得
    const endpoint = `${API_URLS.GET_CHAT_MESSAGES(chatId)}`;
    callApi('GET', endpoint, null)
    .then(response => {
      setMessages(response.messages);
      console.log(messages);
    })
    .catch(error => {
        console.error(error);
      });
    }, [chatId]);

  // メッセージを追加するコールバック関数
  const handleNewMessages = (response) => {
    console.log('New messages received:', response);  // デバッグ用
    
    // 新しいメッセージを既存のメッセージ配列に追加
    setMessages(prevMessages => [...prevMessages, ...response.messages]);

    // chatIdが変更された場合、親に通知
    if (response.chat_id && response.chat_id !== chatId) {
      onChatIdUpdate(response.chat_id);
    }
  };

  return (
    // チャットウィンドウの本体
    <div className="
    flex flex-col h-screen 
    w-full overflow-y-auto
    rounded-lg
    bg-secondary-light dark:bg-secondary-dark">

      {/* メッセージ表示領域 */}
      <div className="h-4/5 overflow-y-auto p-4">

        {messages?.map((messages) => (
          <Message key={messages.message_id} message={messages.message_text} />
        ))}
      </div>

      {/* メッセージ送信フォーム */}
      <div className="h-1/5">
        <PostMessage chatId={chatId} messageCallback={handleNewMessages} />
      </div>


    </div>
  )
}

export default ChatWindow;