export const mockMessages = (chatId) => {
  if (chatId === 1) {
    return [
      { messageId: 1, content: "[ChatId=1]このメッセージはテストユーザーが送信したメッセージです。メッセージのIDは1です。表示も確認したいので文章量が多いもの、少ないものを生成してください。", senderType: "user", createdAt: "2024-03-15T10:00:00" },
      { messageId: 2, content: "[ChatId=1]現在の進捗状況をご報告いたします。タスクAは80%完了、タスクBは60%完了しております。", senderType: "ai", createdAt: "2024-03-15T10:01:00" },
      { messageId: 3, content: "[ChatId=1]先週のスプリントの振り返りをお願いします", senderType: "user", createdAt: "2024-03-14T15:00:00" },
      { messageId: 4, content: "[ChatId=1]先週は計画した10個のタスクのうち8個が完了し、残り2個は現在進行中です。", senderType: "ai", createdAt: "2024-03-14T15:01:00" },
      { messageId: 5, content: "[ChatId=1]ログイン画面でエラーが発生しているようです", senderType: "user", createdAt: "2024-03-13T11:00:00" },
      { messageId: 6, content: "[ChatId=1]エラーログを確認したところ、認証トークンの有効期限切れが原因のようです。", senderType: "ai", createdAt: "2024-03-13T11:01:00" },
    ]
  } else if (chatId === 2) {
    return [
      { messageId: 1, content: "[ChatId=2]このメッセージはテストユーザーが送信したメッセージです。メッセージのIDは1です。表示も確認したいので文章量が多いもの、少ないものを生成してください。", senderType: "user", createdAt: "2024-03-15T10:00:00" },
      { messageId: 2, content: "[ChatId=2]現在の進捗状況をご報告いたします。タスクAは80%完了、タスクBは60%完了しております。", senderType: "ai", createdAt: "2024-03-15T10:01:00" },
      { messageId: 3, content: "[ChatId=2]先週のスプリントの振り返りをお願いします", senderType: "user", createdAt: "2024-03-14T15:00:00" },
      { messageId: 4, content: "[ChatId=2]先週は計画した10個のタスクのうち8個が完了し、残り2個は現在進行中です。", senderType: "ai", createdAt: "2024-03-14T15:01:00" },
      { messageId: 5, content: "[ChatId=2]ログイン画面でエラーが発生しているようです", senderType: "user", createdAt: "2024-03-13T11:00:00" },
      { messageId: 6, content: "[ChatId=2]エラーログを確認したところ、認証トークンの有効期限切れが原因のようです。", senderType: "ai", createdAt: "2024-03-13T11:01:00" },
    ]
  }
};


export const mockChatList = [
  { id: 1, title: "プロジェクトMTG" },{ id: 2, title: "週次レビュー" },{ id: 3, title: "バグ修正相談" },
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

export const mockUser = {
  id: "1",
  name: "テストユーザー",
  email: "test@example.com",
  role: "user"
};

export const mockToken = "testToken";

