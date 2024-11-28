
const Message = ({ message }) => {
  // senderTypeによってスタイルを変更
  const messageStyle = {
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    maxWidth: '60%',
    alignSelf: message.senderType === 'user' ? 'flex-end' : 'flex-start',
    backgroundColor: message.senderType === 'user' ? '#DCF8C6' : '#FFFFFF',
    color: message.senderType === 'user' ? '#000000' : '#333333',
  };

  return (
    <div style={messageStyle}>
      <p>{message.content}</p>
      <span style={{ fontSize: '0.8em', color: '#888888' }}>
        {new Date(message.createdAt).toLocaleString()}
      </span>
    </div>
  );
}

export default Message;