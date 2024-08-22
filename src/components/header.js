import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Главная</Link></li>
        <li><Link to="/categories" className="nav-link">Категории</Link></li>
        <li><Link to="/promotions" className="nav-link">Акции</Link></li>
        <li><Link to="/contacts" className="nav-link">Контакты</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;