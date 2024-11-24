import { useState, useEffect } from 'react'
import { callApi } from '../common/api';
import { API_URLS } from '../common/constants';

const ChatWindow = (props) => {

  const chatId = props.chatId;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const endpoint = `${API_URLS.GET_CHAT_BY_ID(chatId)}`;
    callApi('GET', endpoint, null)
    .then(response => {
      console.log(response);
      setMessages(response.messages);
    })
    .catch(error => {
      console.error(error);
      })
  }, [chatId]); 

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', 
      width: '100%', 
      overflowY: 'auto', 
      backgroundColor: '#f0f0f0'
    }}>
      <div style={{ 
        height: '80%',
        overflowY: 'auto',
        padding: '1rem'
      }}>

        {messages?.map((message) => (
          <Message key={message.messageId} message={message} />
        ))}
      </div>


        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '20%', 
            width: '100%', 
            overflowY: 'auto', 
            backgroundColor: '#cccccc'
        }}>
            ここにチャット入力欄を表示
        </div>
      

    </div>
  )
}

export default ChatWindow