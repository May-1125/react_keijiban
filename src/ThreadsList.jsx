// src/ThreadsList.jsx
import { useState, useEffect } from "react";

export default function ThreadsList() {
  const [threads, setThreads] = useState([]); // 取得したデータを入れる箱

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setThreads(data); // 取得したデータを state にセット
      });
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>スレッド一覧</h1>
      <ul>
        {threads.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}
