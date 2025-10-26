/**
 * タスクオブジェクトの型定義
 * requirements.md:100-111 の仕様に基づく
 */
export interface Task {
  id: string;                    // 一意のID（UUID等）
  title: string;                 // タスク名
  description?: string;          // 説明
  priority: 'low' | 'medium' | 'high';  // 優先度
  dueDate?: string;              // 期限日（ISO 8601形式）
  tags?: string[];               // カテゴリ/タグ
  completed: boolean;            // 完了状態
  createdAt: string;             // 作成日時（ISO 8601形式）
  updatedAt: string;             // 更新日時（ISO 8601形式）
}

/**
 * タスク作成時の入力データ型
 */
export type CreateTaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'completed'>;

/**
 * タスク更新時の入力データ型
 */
export type UpdateTaskInput = Partial<Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>;
