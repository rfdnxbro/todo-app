'use client';

import { useState, useEffect, useCallback } from 'react';
import { Task, CreateTaskInput, UpdateTaskInput } from '@/types';
import { loadTasks, saveTasks } from '@/lib/storage';
import { generateId, getCurrentTimestamp } from '@/lib/utils';

/**
 * タスク管理カスタムフック
 * CRUD操作とlocalStorageの自動同期を提供
 */
export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 初期化：localStorageからタスクを読み込み
  useEffect(() => {
    const loadedTasks = loadTasks();
    setTasks(loadedTasks);
    setIsLoading(false);
  }, []);

  // tasksが変更されたらlocalStorageに保存
  useEffect(() => {
    if (!isLoading) {
      saveTasks(tasks);
    }
  }, [tasks, isLoading]);

  /**
   * タスクを作成
   */
  const createTask = useCallback((input: CreateTaskInput) => {
    const newTask: Task = {
      ...input,
      id: generateId(),
      completed: false,
      createdAt: getCurrentTimestamp(),
      updatedAt: getCurrentTimestamp(),
    };

    setTasks((prev) => [...prev, newTask]);
    return newTask;
  }, []);

  /**
   * タスクを更新
   */
  const updateTask = useCallback((id: string, input: UpdateTaskInput) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              ...input,
              updatedAt: getCurrentTimestamp(),
            }
          : task
      )
    );
  }, []);

  /**
   * タスクを削除
   */
  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  /**
   * タスクの完了状態を切り替え
   */
  const toggleTaskComplete = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              updatedAt: getCurrentTimestamp(),
            }
          : task
      )
    );
  }, []);

  /**
   * すべてのタスクをクリア
   */
  const clearAllTasks = useCallback(() => {
    setTasks([]);
  }, []);

  /**
   * IDでタスクを取得
   */
  const getTaskById = useCallback(
    (id: string): Task | undefined => {
      return tasks.find((task) => task.id === id);
    },
    [tasks]
  );

  return {
    tasks,
    isLoading,
    createTask,
    updateTask,
    deleteTask,
    toggleTaskComplete,
    clearAllTasks,
    getTaskById,
  };
}
