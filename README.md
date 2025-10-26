# ToDo App

シンプルなタスク管理Webアプリケーション

## 技術スタック

- **フレームワーク**: Next.js 15.0.2 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **データストレージ**: localStorage

## プロジェクト構成

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # メインページ
│   └── globals.css        # グローバルスタイル
├── components/            # Reactコンポーネント
├── types/                 # TypeScript型定義
│   ├── task.ts           # タスク関連の型
│   └── index.ts          # 型のエクスポート
├── lib/                   # ユーティリティ関数
│   ├── storage.ts        # localStorage操作
│   └── utils.ts          # 汎用ユーティリティ
└── requirements.md        # 要件定義書
```

## 開発環境のセットアップ

1. 依存関係のインストール:
   ```bash
   npm install
   ```

2. 開発サーバーの起動:
   ```bash
   npm run dev
   ```

3. ブラウザで開く:
   ```
   http://localhost:3000
   ```

## スクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - 本番用ビルド
- `npm run start` - 本番サーバーを起動
- `npm run lint` - ESLintでコードをチェック

## 開発フェーズ

### Phase 1: 基本機能 (完了)
- ✅ Next.jsプロジェクトのセットアップ
- ✅ 基本的なプロジェクト構造の構築
- ✅ TypeScript型定義の作成
- ✅ localStorage操作ユーティリティの実装

### Phase 2: CRUD機能 (予定)
- タスクのCRUD機能実装
- UIコンポーネントの作成
- フォーム処理

### Phase 3: 拡張機能 (予定)
- フィルタリング・ソート機能
- 優先度・期限日・タグ機能
- レスポンシブデザイン対応
