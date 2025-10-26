export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">ToDo App</h1>
          <p className="text-gray-600">シンプルなタスク管理アプリケーション</p>
        </header>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-center text-gray-500">
            Next.jsプロジェクトのセットアップが完了しました
          </p>
        </div>
      </div>
    </main>
  );
}
