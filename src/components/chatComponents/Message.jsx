
const Message = ({ messages }) => {
  // senderTypeによってスタイルを変更
  const messageStyle = {
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    maxWidth: '60%',
    alignSelf: messages.senderType === 'user' ? 'flex-end' : 'flex-start',
    backgroundColor: messages.senderType === 'user' ? '#DCF8C6' : '#FFFFFF',
    color: messages.senderType === 'user' ? '#000000' : '#333333',
  };

  return (
    <div style={messageStyle}>
      <p>{messages.message_text}</p>
      <span style={{ fontSize: '0.8em', color: '#888888' }}>
        {new Date(messages.created_at).toLocaleString()}
      </span>
    </div>
  );
}

export default Message;