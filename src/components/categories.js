import React, { useEffect } from 'react';
import '../styles/categories.css';

const categoriesData = [
  {
    name: 'Электроника',
    description: 'Современные гаджеты и электроника, включая телефоны, ноутбуки и аксессуары',
    imageUrl: 'https://via.placeholder.com/150?text=Техника'
  },
  {
    name: 'Одежда',
    description: 'Модная одежда для всех сезонов, от повседневной до вечерней',
    imageUrl: 'https://via.placeholder.com/150?text=Одежда'
  },
  {
    name: 'Дом и сад',
    description: 'Всё для вашего дома и сада, от мебели до садовых инструментов',
    imageUrl: 'https://via.placeholder.com/150?text=Сад'
  },
  {
    name: 'Спорт и отдых',
    description: 'Оборудование и одежда для спорта и активного отдыха',
    imageUrl: 'https://via.placeholder.com/150?text=Спорт'
  }
];

const Categories = () => {
  useEffect(() => {
    document.title = "Категории";
  }, []);

  return (
  <main className="categories">
    <h1>Категории продуктов</h1>
    <p>Список категорий продуктов:</p>
    <div className="categories-list">
      {categoriesData.map((category, index) => (
        <div key={index} className="category-item">
          <img src={category.imageUrl} alt={category.name} className="category-image" />
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  </main>
  );
};

export default Categories;