import { Task } from '@/types';

/**
 * localStorageキー名
 * requirements.md:114 の仕様に基づく
 */
const STORAGE_KEY = 'todo-app-tasks';

/**
 * タスクをlocalStorageから読み込む
 */
export function loadTasks(): Task[] {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return [];
    }
    return JSON.parse(data) as Task[];
  } catch (error) {
    console.error('Failed to load tasks from localStorage:', error);
    return [];
  }
}

/**
 * タスクをlocalStorageに保存
 */
export function saveTasks(tasks: Task[]): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save tasks to localStorage:', error);
  }
}

/**
 * localStorageのタスクをクリア
 */
export function clearTasks(): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear tasks from localStorage:', error);
  }
}
