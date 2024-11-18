# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

React Ver.17以降はjsxファイルに import React from 'react' の記述不要

### 初期設定
.gitignoreにnode_modules/を指定しているため、git clone後にnpm ciを実行する
```
npm ci
```
 実行時package-lock.jsonを参照している。

---------------
ファイル名の付け方
---------------
コンポーネント：PascalCase（例：Header.js、UserProfile.js）
カスタムフック：camelCase（例：useAuth.js、useFetch.js）
ユーティリティ関数：camelCase（例：formatDate.js、capitalizeString.js）
ページコンポーネント：PascalCase（例：HomePage.js、ContactPage.js）
CSS/SCSSファイル：関連コンポーネントと合わせる、または機能ごとに分けてkebab-case（例：main.css、header.scss）
