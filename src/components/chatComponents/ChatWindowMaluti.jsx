import React, { useEffect } from 'react';
import Split from 'split.js';
import '../../css/split.css';

const ChatWindowMaluti = () => {
    
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
        className="flex flex-col w-full bg-gray-100 overflow-hidden"
      >
        <div className="flex-1 overflow-y-auto p-4">
          マルチウィンドウ1 ここにチャットの内容を表示
        </div>
        <div className="h-20 bg-gray-300 p-4">
          マルチウィンドウ1 ここにチャット入力欄を表示
        </div>
      </div>

      <div 
        id="split-1" 
        className="flex flex-col w-full bg-gray-100 overflow-hidden"
      >
        <div className="flex-1 overflow-y-auto p-4">
          マルチウィンドウ2 ここにチャットの内容を表示
        </div>
        <div className="h-20 bg-gray-300 p-4">
          マルチウィンドウ2 ここにチャット入力欄を表示
        </div>
      </div>
    </div>
  );
}

export default ChatWindowMaluti;