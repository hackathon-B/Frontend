import { useState, useEffect } from 'react'
// 共通
import { callApi } from '../../common/api';
import { API_URLS } from '../../common/constants';
// コンポーネント
import Message from './Message';
import PostMessage from './PostMessage';

const ChatWindow = ({ chatId, setCurrentChat }) => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		console.log('ChatWindow の chatId:', chatId);
		if (chatId) {
			// chatIdに紐づくmessagesを全て取得
			const endpoint = `${API_URLS.GET_CHAT_MESSAGES(chatId)}`;
			callApi('GET', endpoint, null)
			.then(response => {
				const chatMessages = response;
				setMessages(chatMessages.messages);
				console.log('取得した messages:', chatMessages.messages);
			})
			.catch(error => {
				console.error(error);
			});
		} else {
			setMessages([]); // chatId がない場合はメッセージをリセット
		}
	}, [chatId]);

	useEffect(() => {
		// メッセージが更新されたら最下部にスクロール
		const messageContainer = document.querySelector('.overflow-y-auto');
			if (messageContainer) {
				messageContainer.scrollTop = messageContainer.scrollHeight;
			}
		}, [messages]); // messagesが更新されるたびに実行	

	// メッセージを追加するコールバック関数
	const handleNewMessages = (response) => {
		console.log('New messages received:', response);  // デバッグ用
		
		// 新しいメッセージを既存のメッセージ配列に追加
		setMessages(response.messages);

		// chatIdが変更された場合、親に通知
		if (response.chat_id && response.chat_id !== chatId) {
		setCurrentChat(response.chat_id);
		}
	};

  return (
    // チャットウィンドウの本体
    <div className="
      flex flex-col
      h-screen w-full min-w-[400px]
      overflow-y-auto
      rounded-lg
      bg-secondary-light dark:bg-secondary-dark">

      {/* メッセージ表示領域 */}
      <div className="
        flex flex-col 
        h-4/5 
        overflow-y-auto 
        scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100
        py-4 px-[15%]
        [mask-image:linear-gradient(to_bottom,transparent,black_10%,black)]
      ">
        {messages.length > 0 ? (
          <div className="flex flex-col">
            {messages.map((message) => (
              <Message 
                key={message.message_id} 
                id={message.message_id} 
                message={message.message_text} 
                who={message.sender_type}
                created_at={message.created_at}
              />
            ))}
          </div>
        ) : (
          <div className="text-[1.5rem] flex items-center justify-center h-full text-center text-gray-500">メッセージがありません</div>
        )}
      </div>

      {/* メッセージ送信フォーム */}
      <div className="h-1/5">
        <PostMessage chatId={chatId} msgCallback={handleNewMessages} />
      </div>

    </div>
  );
}

export default ChatWindow;