import React, { useEffect } from 'react';
import Split from 'split.js';
import '../css/split.css';

const ChatWindowMaluti = () => {
    
  useEffect(() => {
    Split(['#split-0', '#split-1'],{
        sizes: [50, 50],
        minSize: 100,
        gutterSize: 10,
        cursor: 'col-resize'
    });
  }, []);

  return (
    <>
      <div className="split w-full">

        <div id="split-0" style={{ 
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
            マルチウィンドウ1 ここにチャットの内容を表示
          </div>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '20%', 
            width: '100%', 
            overflowY: 'auto', 
            backgroundColor: '#cccccc'
          }}>
            マルチウィンドウ1 ここにチャット入力欄を表示
          </div>

        </div>


        <div id="split-1" style={{ 
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
            マルチウィンドウ2 ここにチャットの内容を表示
          </div>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '20%', 
            width: '100%', 
            overflowY: 'auto', 
            backgroundColor: '#cccccc'
          }}>
            マルチウィンドウ2 ここにチャット入力欄を表示
          </div>

        </div>

      </div>
    </>
  );
}

export default ChatWindowMaluti;