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
│   ├── page.tsx           # メインページ（テスト用UI含む）
│   └── globals.css        # グローバルスタイル
├── components/            # Reactコンポーネント
├── hooks/                 # カスタムフック
│   ├── useTasks.ts       # タスク管理フック（CRUD操作）
│   └── index.ts          # フックのエクスポート
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

### Phase 1: データ構造とlocalStorage実装 ✅ (完了)
- ✅ Next.jsプロジェクトのセットアップ
- ✅ 基本的なプロジェクト構造の構築
- ✅ TypeScript型定義の作成（`types/task.ts`）
  - Task interface
  - CreateTaskInput, UpdateTaskInput 型
- ✅ localStorage操作ユーティリティの実装（`lib/storage.ts`）
  - loadTasks: localStorageからタスクを読み込み
  - saveTasks: localStorageにタスクを保存
  - clearTasks: localStorageをクリア
- ✅ タスク管理カスタムフック（`hooks/useTasks.ts`）
  - createTask: タスクの作成
  - updateTask: タスクの更新
  - deleteTask: タスクの削除
  - toggleTaskComplete: 完了状態の切り替え
  - clearAllTasks: 全タスクのクリア
  - getTaskById: IDでタスクを取得
  - 自動保存・自動読み込み機能
- ✅ ユーティリティ関数（`lib/utils.ts`）
  - generateId: UUID生成
  - getCurrentTimestamp: ISO 8601形式のタイムスタンプ取得
  - formatDate: 日付フォーマット
  - getPriorityLabel, getPriorityColor: 優先度表示用
- ✅ テスト用UIの実装（`app/page.tsx`）
  - タスク一覧表示
  - サンプルタスク作成機能
  - タスクの完了/削除機能

### Phase 2: CRUD機能とUI (予定)
- タスク作成フォームの実装
- タスク編集モーダルの作成
- タスク削除の確認ダイアログ
- UIコンポーネントの分離とリファクタリング

### Phase 3: 拡張機能 (予定)
- フィルタリング・ソート機能
- タグによる絞り込み
- レスポンシブデザイン対応
- データのエクスポート/インポート機能
