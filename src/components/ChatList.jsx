import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

const ChatList = () => {
    const chatList = [
        { id: 1, title: "プロジェクトMTG" },
        { id: 2, title: "週次レビュー" },
        { id: 3, title: "バグ修正相談" },
        { id: 4, title: "新機能の提案" },
        { id: 5, title: "チーム会議" },
        { id: 6, title: "デイリースクラム" },
        { id: 7, title: "スプリントレビュー" },
        { id: 8, title: "技術検討会議" },
        { id: 9, title: "リリース計画MTG" },
        { id: 10, title: "パフォーマンス改善検討パフォーマンス改善検討パフォーマンス改善検討" },
        { id: 11, title: "セキュリティレビュー" },
        { id: 12, title: "UI/UXフィードバック" },
        { id: 13, title: "インフラ構成検討" },
        { id: 14, title: "コードレビュー会議" },
        { id: 15, title: "障害対応振り返り" },
        { id: 16, title: "新メンバー研修" },
        { id: 17, title: "アーキテクチャ検討" },
        { id: 18, title: "テスト計画策定" },
        { id: 19, title: "ベンダーMTG" },
        { id: 20, title: "予算検討会議" }
    ];

    const [currentChat, setCurrentChat] = useState({});

    const handleChatSelect = (chatId) => {
        const selectedChat = chatList.find(chat => chat.id === chatId);
        setCurrentChat(selectedChat);
    };

    return (
        <>
                <TableContainer 
                    component={Paper} 
                    sx={{ 
                        height: '100%',
                        minHeight: 120,
                        maxHeight: '100%',
                        overflow: 'auto',
                        flex: 1,
                    }}
                >
                    
                    <div className="
                        flex items-center justify-between
                        sticky top-0 z-10
                        h-10
                        border border-gray-500
                        rounded-md
                        bg-secondary-light dark:bg-secondary-dark
                        border-b border-gray-300 dark:border-gray-700
                    ">
                        <p className="
                            truncate
                            px-2
                            text-gray-800
                            text-sm
                            flex-1
                            text-text-light dark:text-text-dark
                        ">
                            {currentChat.title || 'チャットを選択してください'}
                        </p>

                        <Tooltip title="別ウィンドウで開く">
                            <IconButton
                                size="medium"
                                color="inherit" aria-label="menu"
                                sx={{ width: '40px', height: '40px'}}
                            >
                                <LaunchIcon />
                            </IconButton>
                        </Tooltip>

                    </div>
                    <div className="
                        bg-secondary-light dark:bg-secondary-dark
                    ">
                        <Table stickyHeader>  {/* ヘッダーを追加する場合に便利 */}
                            <TableBody>
                                {chatList.map((chat) => (
                                <TableRow
                                    key={chat.id}
                                    hover  // ホバーエフェクト
                                    onClick={() => handleChatSelect(chat.id)}
                                    sx={{ cursor: 'pointer' }}
                                    selected={currentChat.id === chat.id}  // 選択状態の表示
                                >
                                    <TableCell sx={{ 
                                        paddingY: 0.5,
                                        paddingX: 3,
                                        maxWidth: 200,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        color: 'inherit'
                                        }}
                                    >
                                        {chat.title}
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </div>
                </TableContainer>
        </>
    );
}

export default ChatList;