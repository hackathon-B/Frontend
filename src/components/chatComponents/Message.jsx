
export const Message = ({ id, message, who, created_at }) => {
  // whoによってスタイルを変更 オブジェクトリテラル内での条件演算子（三項演算子）の仕様

  const messageStyle = {
    padding: '16px 24px',
    borderRadius: '8px',
    marginBottom: '8px',
    border: '1px solid #555',
    maxWidth: who === 'user' ? '90%' : '100%',
    alignSelf: who === 'user' ? 'flex-end' : 'flex-start',
    backgroundColor: who === 'user' ? '#f1f5f9' : '#ffffff',  // ライトモードの背景色を微調整
    color: '#1a202c',  // ライトモードのテキスト
    dark: {
      backgroundColor: who === 'user' ? '#000' : '#222',
      color: who === 'user' ? '#222' : '#222',
    },
  };

  return (
    <div  style={messageStyle}>
      <p>{message}</p>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {new Date(created_at).toLocaleString()}
      </span>
    </div>
  );
}

export default Message;