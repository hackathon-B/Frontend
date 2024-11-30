import React from 'react';

const Message = ({ id, message, who, created_at }) => {
  // whoによってスタイルを変更
  const messageStyle = {
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    maxWidth: '60%',
    alignSelf: who === 'user' ? 'flex-end' : 'flex-start',
    backgroundColor: who === 'user' ? '#DCF8C6' : '#FFFFFF',
    color: who === 'user' ? '#000000' : '#333333',
  };

  return (
    <div style={messageStyle}>
      <p>{message}</p>
      <span style={{ fontSize: '0.8em', color: '#888888' }}>
        {new Date(created_at).toLocaleString()}
      </span>
    </div>
  );
}

export default Message;