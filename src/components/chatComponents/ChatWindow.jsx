import { useState, useEffect } from 'react'
// 共通
import { callApi } from '../../common/api';
import { API_URLS } from '../../common/constants';
// コンポーネント
import { mockMessages } from '../../common/MockDatas';
import Message from './Message';

const ChatWindow = ({ chatId, messages }) => {
  
  return (
    // チャットウィンドウの本体
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', 
      width: '100%', 
      overflowY: 'auto', 
      backgroundColor: '#f0f0f0'
    }}>

      {/* メッセージ表示領域 */}
      <div style={{ 
        height: '80%',
        overflowY: 'auto',
        padding: '1rem'
      }}>

        {messages?.map((message) => (
          <Message key={message.messageId} message={message} />
        ))}
      </div>

      {/* メッセージ入力フォーム */}  
      <textarea color="primary" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '20%', 
          width: '100%', 
          overflowY: 'auto', 
          backgroundColor: '#cccccc'
      }}>
          
      </textarea>
    

    </div>
  )
}

export default ChatWindow;