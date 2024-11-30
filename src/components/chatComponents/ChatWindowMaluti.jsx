import { useEffect } from 'react';
import ChatWindow from './ChatWindow';
import Split from 'split.js';
import '../../css/split.css';

const ChatWindowMaluti = ({ chatId }) => {
    
  useEffect(() => {
    Split(['#split-0', '#split-1'], {
      sizes: [50, 50],
      minSize: 100,
      gutterSize: 10,
      cursor: 'col-resize',
      direction: 'horizontal',
    });
  }, []);

  return (
    <div className="split-row flex w-full h-screen">
      <div 
        id="split-0" 
        className="flex flex-col w-full overflow-hidden"
      >
        <ChatWindow chatId={chatId} />
      </div>
      <div 
        id="split-1" 
        className="flex flex-col w-full overflow-hidden"
      >
        <ChatWindow chatIdSub={chatId} />
      </div>
    </div>
  );
}

export default ChatWindowMaluti;