import { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

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
        { id: 10, title: "パフォーマンス改善検討" },
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
            <Box>
                <p>{currentChat.title || 'チャットを選択してください'}</p>
            </Box>
            <TableContainer 
                component={Paper} 
                sx={{ 
                    maxHeight: 240,  // スクロールの高さ制限
                    backgroundColor: '#e0e0e0'
                }}
            >
                <Table stickyHeader>  {/* ヘッダーを追加する場合に便利 */}
                    <TableBody>
                        {chatList.map((chat) => (
                            <TableRow
                                key={chat.id}
                                hover  // ホバーエフェクト
                                onClick={() => handleChatSelect(chat.id)}
                                sx={{ 
                                    cursor: 'pointer',
                                    '&.Mui-selected': {
                                        backgroundColor: '#bdbdbd'
                                    }
                                }}
                                selected={currentChat.id === chat.id}  // 選択状態の表示
                            >
                                <TableCell sx={{ paddingY: 1, paddingX: 3 }}>{chat.title}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default ChatList;