import { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const DictionaryList = () => {
    const dictionaryList = [
        { id: 1, title: "API (Application Programming Interface)", description: "ソフトウェア同士が互いにやり取りするための仕様や規約" },
        { id: 2, title: "CI/CD (Continuous Integration/Continuous Delivery)", description: "継続的インテグレーション/継続的デリバリーの略。自動化された開発プロセス" },
        { id: 3, title: "Docker", description: "コンテナ型の仮想化プラットフォーム。開発環境の統一や展開が容易" },
        { id: 4, title: "Git", description: "分散型バージョン管理システム。ソースコードの変更履歴を管理" },
        { id: 5, title: "HTTP (Hypertext Transfer Protocol)", description: "WebブラウザとWebサーバー間の通信プロトコル" },
        { id: 6, title: "IDE (Integrated Development Environment)", description: "統合開発環境。コーディング、デバッグ、コンパイルなどの機能を統合" },
        { id: 7, title: "JSON (JavaScript Object Notation)", description: "データ交換フォーマット。人間にも読みやすく、機械処理も容易" },
        { id: 8, title: "Kubernetes (K8s)", description: "コンテナオーケストレーションツール。コンテナの管理・運用を自動化" },
        { id: 9, title: "Linux", description: "オープンソースのOS。サーバー環境で広く使用される" },
        { id: 10, title: "MVC (Model-View-Controller)", description: "ソフトウェア設計パターン。機能を3つの役割に分離" },
        { id: 11, title: "NoSQL", description: "リレーショナルデータベース以外のデータベース。柔軟なデータ構造" },
        { id: 12, title: "OAuth", description: "認可の標準プロトコル。サードパーティアプリケーションの認証に使用" },
        { id: 13, title: "REST (Representational State Transfer)", description: "WebAPIの設計原則。リソースベースのアーキテクチャスタイル" },
        { id: 14, title: "SQL (Structured Query Language)", description: "データベース操作言語。データの検索や更新に使用" },
        { id: 15, title: "SSL/TLS", description: "通信を暗号化するプロトコル。セキュアな通信を実現" },
        { id: 16, title: "TypeScript", description: "JavaScriptに型システムを追加した言語。大規模開発に適している" },
        { id: 17, title: "UI/UX (User Interface/User Experience)", description: "ユーザーインターフェースとユーザー体験。使いやすさや満足度を重視" },
        { id: 18, title: "VPN (Virtual Private Network)", description: "仮想プライベートネットワーク。安全な通信経路を確立" },
        { id: 19, title: "WebSocket", description: "双方向通信プロトコル。リアルタイムな通信を実現" },
        { id: 20, title: "XSS (Cross-Site Scripting)", description: "Webアプリケーションの脆弱性。不正なスクリプト実行攻撃" }
    ];

    const [currentDictionary, setCurrentDictionary] = useState(dictionaryList[0]);

    const handleDictionarySelect = (dictionaryId) => {
        const selectedDictionary = dictionaryList.find(dictionary => dictionary.id === dictionaryId);
        setCurrentDictionary(selectedDictionary);
    };

    return (
        <>

            <TableContainer 
                component={Paper} 
                sx={{
                    height: '100%',
                    minHeight: 120,
                    maxHeight: '100%',
                    backgroundColor: '#e0e0e0',
                    overflow: 'auto',
                    flex: 1,
                }}
            >
              
                <Box sx={{
                    padding: 1,
                    backgroundColor: '#bdbdbd',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    borderBottom: '1px solid #999'
                }}>
                    <p style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        margin: 0
                    }}>{currentDictionary.title || '辞書を選択してください'}</p>
                </Box>

                <Table>
                    <TableBody>
                        {dictionaryList.map((dictionary) => (
                            <TableRow
                                key={dictionary.id}
                                hover
                                onClick={() => handleDictionarySelect(dictionary.id)}
                                sx={{ 
                                    cursor: 'pointer',
                                    '&.Mui-selected': {
                                        backgroundColor: '#bdbdbd'
                                    }
                                }}
                                selected={currentDictionary.id === dictionary.id}
                            >
                                <TableCell 
                                    sx={{ 
                                        paddingY: 0.5, 
                                        paddingX: 3,
                                        maxWidth: 200,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {dictionary.title}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default DictionaryList