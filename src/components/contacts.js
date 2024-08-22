import React, { useEffect } from 'react';
import '../styles/contacts.css';

const Contacts = () => {
  useEffect(() => {
    document.title = "Контакты";
  }, []);
  
  return (
  <main className="contacts">
    <h1>Контакты</h1>
    <p>Мы рады видеть вас! Ниже вы найдете информацию для связи с нами:</p>
    <div className="contact-info">
      <h2>Наши контакты</h2>
      <ul>
        <li><strong>Адрес:</strong> ул. Садовая, 3, г. Одесса, Украина</li>
        <li><strong>Телефон:</strong> +38 048 728-66-66</li>
        <li><strong>Email:</strong> support@alex.com</li>
      </ul>
    </div>
    <div className="contact-form">
      <h2>Форма обратной связи</h2>
      <form>
        <label htmlFor="name">Имя:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Сообщение:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Отправить</button>
      </form>
    </div>
  </main>
  );
};

export default Contacts;