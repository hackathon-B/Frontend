import { useState, useEffect } from 'react';
// 共通
import { API_URLS } from '../common/constants';
import { callApi } from '../common/api';
// MUI
import Tooltip from '@mui/material/Tooltip'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';

const ChatList = ({ userId, currentChat, setCurrentChat }) => {
    const [chatList, setChatList] = useState({});
    const [anchorEl, setAnchorEl] = useState(null);
    const [editChatTitle, setEditChatTitle] = useState('');
    // ダイアログ 削除
    // const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    // ダイアログ 編集
    // const [openEditDialog, setOpenEditDialog] = useState(false);
    // 選択中のチャットID
    const [selectedChatId, setSelectedChatId] = useState(null);

    useEffect(() => {
        const endpoint = API_URLS.GET_CHAT_LIST;
        callApi('GET', endpoint, null)
        .then(response => {
          console.log(response);
          setChatList(response.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)));
        })
        .catch(error => {
          console.error(error);
          })
    }, [userId, chatList.length]);

    // メニューボタン 開く
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    // メニューボタン 閉じる
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // チャット -選択-
    const handleChatSelect = (chatId) => {
        const selectedChat = chatList.find(chat => chat.chat_id === chatId);
        setCurrentChat(selectedChat);
        console.log('ChatListからを渡しました', selectedChat);
    };
    
    /*
    useEffect((chatId) => {
        console.log('ChatListのcurrentChat', currentChat);
        setSelectedChatId(chatId);
    }, [currentChat]);
    */

    // チャット -編集-
    const handleEditChat = (selectedChatId) => {
        console.log(`Editing chat ${selectedChatId}`);
        handleMenuClose();
        // 編集のロジックをここに追加
    };

    // チャット -削除-
    const handleDeleteClick = (selectedChatId) => {
        setSelectedChatId(selectedChatId);
        // setOpenDeleteDialog(true);
        handleMenuClose();
    };
    
    // チャット -削除- 確認
    /*
    const handleDeleteConfirm = () => {
        const endpoint = `${API_URLS.DELETE_CHAT(selectedChatId)}`;
        callApi('DELETE', endpoint, null)
            .then(response => {
                console.log(response);
                setOpenDeleteDialog(false);
                setChatList(chatList.filter(chat => chat.chat_id !== selectedChatId));
                setCurrentChat(null);
            })
            .catch(error => {
                console.error(error);
                setOpenDeleteDialog(false);
            });
    };
    // チャット -削除- キャンセル
    const handleDeleteCancel = () => {
        setOpenDeleteDialog(false);
        setSelectedChatId(null);
    };
    */

    return (
        <div className="
            h-full min-h-[120px] max-h-full 
            rounded-md border border-gray-500
            overflow-auto flex-1
        ">
            {/* チャットリストのヘッダー 現在選択中のチャット */}
            <div className="
                flex items-center justify-between
                sticky top-0 z-10 h-10 rounded-md
                bg-primary-light dark:bg-primary-dark
                border-b border-gray-500
                ">
                <p className={`
                    truncate px-3 text-sm flex-1
                    text-text-light dark:text-text-dark
                `}>
                    {currentChat?.chat_title || 'チャットを選択してください'}
                </p>

                {/* 別ウィンドウで開く */}
                <Tooltip title="新規チャット">
                    <IconButton
                        color="inherit"
                        size="medium"
                        aria-label="new-chat"
                        onClick={() => setCurrentChat(null)}
                        sx={{ 
                            width: '40px', 
                            height: '40px',
                            
                        }}
                    >
                        <LibraryAddOutlinedIcon sx={{ color: 'white' }}/>
                    </IconButton>
                </Tooltip>
            </div>

            {/* チャットリストの本体 */}
            <div className="bg-secondary-light dark:bg-secondary-dark">
                {chatList.length > 0 ? (
                    // チャットリストのアイテム マッピング
                    chatList.map((chat) => (
                        <div
                            key={chat.chat_id}
                            // チャットリストのアイテムをクリックした時の処理
                            onClick={() => handleChatSelect(chat.chat_id)}
                            // マウスオーバー時の背景色
                            // 現在選択中のチャットの背景色
                                className={`
                                flex items-center justify-between
                                px-3 py-0
                                cursor-pointer
                                hover:bg-gray-400 dark:hover:bg-gray-600
                                ${currentChat?.chat_id === chat.chat_id ? 'bg-gray-300 dark:bg-gray-700' : ''}
                            `}
                        >
                            {/* チャットタイトル */}
                            <span className="truncate max-w-[200px] text-sm text-gray-800 dark:text-gray-200">
                                {chat.chat_title}
                            </span>

                            {/* メニューボタン */}
                            <button className={`
                                p-1
                                opacity-0
                                ${currentChat?.chat_id === chat.chat_id ? 'opacity-100' : 'opacity-0'}
                                transition-opacity
                            `}>
                            <MoreVertIcon 
                                className="w-5 h-5 text-gray-300 dark:text-gray-700" 
                                aria-label="chat-list-menu" 
                                onClick={handleMenuOpen}
                            />
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                sx={{
                                    '& .MuiPaper-root': {
                                        backgroundColor: (theme) => 
                                            theme.palette.mode === 'dark' ? '#333' : '#fff',
                                        color: (theme) => 
                                            theme.palette.mode === 'dark' ? '#fff' : '#000'
                                    }
                                }}
                            >
                                <MenuItem onClick={() => handleEditChat(chat.chat_id)}>編集</MenuItem>
                                <MenuItem onClick={() => handleDeleteClick(chat.chat_id)}>削除</MenuItem>
                            </Menu>
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="
                        flex items-center justify-center h-full
                        text-sm text-gray-500
                    ">
                        履歴がありません
                    </div>
                )}
            </div>

            {/* チャット -削除- ダイアログ 
            {openDeleteDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                        <p className="mb-4">このチャットを削除しますか？, {selectedChatId}</p>
                        <div className="flex justify-end space-x-4">
                            <button 
                                onClick={handleDeleteConfirm} 
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                はい
                            </button>
                            <button 
                                onClick={() => setOpenDeleteDialog(false)} 
                                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-600"
                            >
                                いいえ
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {openEditDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                        <p className="mb-4">このチャットを編集しますか？</p>
                        <div className="flex justify-end space-x-4">
                            <button 
                                onClick={handleEditConfirm} 
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                はい
                            </button>
                            <button 
                                onClick={() => setOpenEditDialog(false)} 
                                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-600"
                            >
                                いいえ
                            </button>
                        </div>
                    </div>
                </div>
            )}
            */}
        </div>
    );
};

export default ChatList;