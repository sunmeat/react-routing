import React, { useEffect } from 'react';
import '../styles/page404.css';

const NotFound = () => {
    useEffect(() => {
      document.title = "Упс...";
    }, []);
    
    return (
  <main className="not-found">
    <h1>404 - Страница не найдена</h1>
    <p>Извините, страница, которую Вы ищете, не существует.</p>
    <a href="/" className="back-home-link">Вернуться на главную</a>
  </main>
  );
};

export default NotFound;