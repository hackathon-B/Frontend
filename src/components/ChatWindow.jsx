import React from 'react'

const ChatWindow = (props) => {
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
        {props.messages?.map((message) => (
          <div 
            key={message.id}
            style={{
              display: 'flex',
              justifyContent: message.senderType === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '1rem'
            }}
          >
            {/* 吹き出し */}
            <div
              style={{
                maxWidth: '70%',
                padding: '0.8rem',
                borderRadius: '1rem',
                backgroundColor: message.senderType === 'user' ? '#007bff' : '#ffffff',
                color: message.senderType === 'user' ? '#ffffff' : '#000000',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                // 吹き出しの尻尾の位置を変える
                borderBottomRightRadius: message.senderType === 'user' ? '0.2rem' : '1rem',
                borderBottomLeftRadius: message.senderType === 'user' ? '1rem' : '0.2rem'
              }}
            >
              {message.content}
            </div>
          </div>
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