import React from 'react'

const ChatWindow = () => {
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
            display: 'flex', 
            flexDirection: 'column', 
            height: '80%', 
            width: '100%', 
            overflowY: 'auto', 
            backgroundColor: '#f0f0f0'
        }}>
            ここにチャットの内容を表示
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