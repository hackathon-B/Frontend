import { useState, useEffect } from 'react';
// 共通
import { API_URLS } from '../common/constants';
import { callApi } from '../common/api';
// MUI
import Tooltip from '@mui/material/Tooltip'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton'
import LaunchIcon from '@mui/icons-material/Launch'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { mockChatList } from '../common/MockDatas';


const ChatList = ({ userId, currentChat, setCurrentChat }) => {
    const [chatList, setChatList] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedChatId, setSelectedChatId] = useState(null);

    useEffect(() => {
        const endpoint = `${API_URLS.GET_CHAT_LIST(userId)}`;
        callApi('GET', endpoint, null)
        .then(response => {
          console.log(response);
          setChatList(response);
        })
        .catch(error => {
          console.error(error);
          })
    }, [userId]);

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
        const selectedChat = chatList.find(chat => chat.id === chatId);
        setCurrentChat(selectedChat);
    };

    // チャット -編集-
    const handleEditChat = (chatId) => {
        console.log(`Editing chat ${chatId}`);
        handleMenuClose();
        // 編集のロジックをここに追加
    };

    // チャット -削除-
    const handleDeleteClick = (chatId) => {
        setSelectedChatId(chatId);
        setOpenDialog(true);
        handleMenuClose();
    };
    // チャット -削除- 確認
    const handleDeleteConfirm = () => {
        const endpoint = `${API_URLS.DELETE_CHAT(selectedChatId)}`;
        callApi('DELETE', endpoint, null)
            .then(response => {
                console.log(response);
                setOpenDialog(false);
            })
            .catch(error => {
                console.error(error);
                setOpenDialog(false);
            });
    };
    // チャット -削除- キャンセル
    const handleDeleteCancel = () => {
        setOpenDialog(false);
        setSelectedChatId(null);
    };

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
                    {currentChat?.title || 'チャットを選択してください'}
                </p>

                {/* 別ウィンドウで開く */}
                <Tooltip title="別ウィンドウで開く">
                    <IconButton
                        size="medium"
                        aria-label="menu"
                        sx={{ width: '40px', height: '40px', color: 'primary.main'}}
                    >
                        <LaunchIcon />
                    </IconButton>
                </Tooltip>
            </div>

            {/* チャットリストの本体 */}
            <div className="bg-secondary-light dark:bg-secondary-dark">
                {chatList.length > 0 ? (
                    // チャットリストのアイテム マッピング
                    chatList.map((chat) => (
                        <div
                            key={chat.id}
                            // チャットリストのアイテムをクリックした時の処理
                            onClick={() => handleChatSelect(chat.id)}
                            // マウスオーバー時の背景色
                            // 現在選択中のチャットの背景色
                                className={`
                                flex items-center justify-between
                                px-3 py-0
                                cursor-pointer
                                hover:bg-gray-400 dark:hover:bg-gray-600
                                ${currentChat?.id === chat.id ? 'bg-gray-300 dark:bg-gray-700' : ''}
                            `}
                        >
                            {/* チャットタイトル */}
                            <span className="truncate max-w-[200px] text-sm text-gray-800 dark:text-gray-200">
                                {chat.title}
                            </span>

                            {/* メニューボタン */}
                            <button className={`
                                p-1
                                opacity-0
                                ${currentChat?.id === chat.id ? 'opacity-100' : 'opacity-0'}
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
                                <MenuItem onClick={() => handleEditChat(chat.id)}>編集</MenuItem>
                                <MenuItem onClick={() => handleDeleteClick(chat.id)}>削除</MenuItem>
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

            <Dialog
                open={openDialog}
                onClose={handleDeleteCancel}
            >
                <DialogTitle>チャットの削除</DialogTitle>
                <DialogContent>
                    このチャットを削除してもよろしいですか？
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteCancel}>キャンセル</Button>
                    <Button onClick={handleDeleteConfirm} color="error">
                        削除
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ChatList;