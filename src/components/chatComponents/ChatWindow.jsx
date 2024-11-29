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
    <div className="
    flex flex-col h-screen 
    w-full overflow-y-auto
    rounded-lg
    bg-secondary-light dark:bg-secondary-dark">

      {/* メッセージ表示領域 */}
      <div className="h-4/5 overflow-y-auto p-4">

        {messages?.map((message) => (
          <Message key={message.messageId} message={message} />
        ))}
      </div>

      {/* メッセージ入力フォーム */}  
      <textarea className="flex flex-col h-1/4 w-full overflow-y-auto
       bg-primary-light dark:bg-primary-dark">
          
      </textarea>
    

    </div>
  )
}

export default ChatWindow;