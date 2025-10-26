'use client';

import { useTasks } from '@/hooks';
import { getPriorityLabel, getPriorityColor, formatDate } from '@/lib/utils';

export default function Home() {
  const {
    tasks,
    isLoading,
    createTask,
    updateTask,
    deleteTask,
    toggleTaskComplete,
  } = useTasks();

  // テスト用：サンプルタスクを作成
  const handleCreateSample = () => {
    createTask({
      title: 'サンプルタスク',
      description: 'これはテスト用のタスクです',
      priority: 'medium',
      dueDate: new Date(Date.now() + 86400000).toISOString(), // 明日
      tags: ['テスト'],
    });
  };

  if (isLoading) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center">読み込み中...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">ToDo App</h1>
          <p className="text-gray-600">シンプルなタスク管理アプリケーション</p>
        </header>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">タスク一覧</h2>
            <button
              onClick={handleCreateSample}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              サンプルタスクを追加
            </button>
          </div>

          <div className="text-sm text-gray-500 mb-4">
            タスク数: {tasks.length}
          </div>

          {tasks.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              タスクがありません。サンプルタスクを追加してテストしてください。
            </p>
          ) : (
            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="border rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskComplete(task.id)}
                      className="mt-1 w-5 h-5 cursor-pointer"
                    />
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-medium ${
                          task.completed
                            ? 'line-through text-gray-400'
                            : 'text-gray-900'
                        }`}
                      >
                        {task.title}
                      </h3>
                      {task.description && (
                        <p className="text-gray-600 text-sm mt-1">
                          {task.description}
                        </p>
                      )}
                      <div className="flex gap-4 mt-2 text-sm">
                        <span
                          className={`font-medium ${getPriorityColor(
                            task.priority
                          )}`}
                        >
                          優先度: {getPriorityLabel(task.priority)}
                        </span>
                        {task.dueDate && (
                          <span className="text-gray-500">
                            期限: {formatDate(task.dueDate)}
                          </span>
                        )}
                      </div>
                      {task.tags && task.tags.length > 0 && (
                        <div className="flex gap-2 mt-2">
                          {task.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="px-3 py-1 text-red-600 hover:bg-red-50 rounded transition"
                    >
                      削除
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">
            Phase 1 実装完了
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>✅ データ構造（Task型定義）</li>
            <li>✅ localStorage操作関数</li>
            <li>✅ CRUD操作カスタムフック</li>
            <li>✅ 自動保存・自動読み込み</li>
          </ul>
          <p className="text-xs text-blue-600 mt-3">
            ※ ページをリロードしても、タスクは保持されます
          </p>
        </div>
      </div>
    </main>
  );
}
