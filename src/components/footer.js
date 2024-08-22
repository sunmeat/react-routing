import React from 'react';
import '../styles/footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>О компании</h4>
        <p>Мы предлагаем лучшие продукты для вашего дома и офиса. Качество и надёжность — наши главные приоритеты.</p>
      </div>
      <div className="footer-section">
        <h4>Социальные сети</h4>
        <ul className="social-links">
          <li><a href="https://www.facebook.com/AlexGarage/" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://x.com/Foods_Direct" target="_blank" rel="noreferrer">𝕏</a></li>
          <li><a href="https://www.instagram.com/__food.store/" target="_blank" rel="noreferrer">Instagram</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Полезные ссылки</h4>
        <ul className="useful-links">
          <li><a href="/categories">Категории</a></li>
          <li><a href="/promotions">Акции</a></li>
          <li><a href="/contacts">Контакты</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Контактная информация</h4>
        <p>Телефон: +38 048 728-66-60</p>
        <p>Email: support@alex.com</p>
        <p>Адрес: г. Одесса, ул. Садовая, 3</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 AlexGarage. Все права защищены.</p>
    </div>
  </footer>
);

export default Footer;