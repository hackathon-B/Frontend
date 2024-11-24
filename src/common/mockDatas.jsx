const mockMessages = {
    1: [
      { messageId: 1, content: "プロジェクトの進捗について確認したいのですが", senderType: "user", createdAt: "2024-03-15T10:00:00" },
      { messageId: 2, content: "現在の進捗状況をご報告いたします。タスクAは80%完了、タスクBは60%完了しております。", senderType: "ai", createdAt: "2024-03-15T10:01:00" }
    ],
    2: [
      { messageId: 3, content: "先週のスプリントの振り返りをお願いします", senderType: "user", createdAt: "2024-03-14T15:00:00" },
      { messageId: 4, content: "先週は計画した10個のタスクのうち8個が完了し、残り2個は現在進行中です。", senderType: "ai", createdAt: "2024-03-14T15:01:00" }
    ],
    3: [
      { messageId: 5, content: "ログイン画面でエラーが発生しているようです", senderType: "user", createdAt: "2024-03-13T11:00:00" },
      { messageId: 6, content: "エラーログを確認したところ、認証トークンの有効期限切れが原因のようです。", senderType: "ai", createdAt: "2024-03-13T11:01:00" }
    ]
  };

export default mockMessages;