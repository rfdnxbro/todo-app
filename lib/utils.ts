/**
 * UUIDを生成（簡易版）
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * 現在時刻をISO 8601形式で取得
 */
export function getCurrentTimestamp(): string {
  return new Date().toISOString();
}

/**
 * 日付をフォーマット
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * 優先度を日本語に変換
 */
export function getPriorityLabel(priority: 'low' | 'medium' | 'high'): string {
  const labels = {
    low: '低',
    medium: '中',
    high: '高',
  };
  return labels[priority];
}

/**
 * 優先度に応じた色を取得
 */
export function getPriorityColor(priority: 'low' | 'medium' | 'high'): string {
  const colors = {
    low: 'text-blue-600',
    medium: 'text-yellow-600',
    high: 'text-red-600',
  };
  return colors[priority];
}
