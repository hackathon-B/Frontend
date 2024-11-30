import React from 'react';

const Message = ({ id, message, who, created_at }) => {
  // whoによってスタイルを変更
  const messageStyle = {
    padding: '16px 24px',
    borderRadius: '5px',
    marginBottom: '10px',
    maxWidth: who === 'user' ? '92%' : '98%',
    alignSelf: who === 'user' ? 'flex-end' : 'flex-start',
    backgroundColor: who === 'user' ? '#f1f5f9' : '#ffffff',  // ライトモードの背景色を微調整
    color: '#1a202c',  // ライトモードのテキスト
    dark: {
      backgroundColor: who === 'user' ? '#000' : '#222',
      color: who === 'user' ? '#222' : '#222',
    },
  };

  return (
    <div className={`
      ${who === 'user' 
        ? 'dark:bg-gray-800 dark:text-gray-100'  // ユーザーメッセージのダークモード
        : 'dark:bg-gray-900 dark:text-gray-100'  // AIメッセージのダークモード
      }
    `} style={messageStyle}>
      <p>{message}</p>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {new Date(created_at).toLocaleString()}
      </span>
    </div>
  );
}

export default Message;