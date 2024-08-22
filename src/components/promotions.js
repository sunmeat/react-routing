import React, { useEffect } from 'react';
import '../styles/promotions.css';

const promotionsData = [
  {
    title: 'Летняя распродажа!',
    description: 'Скидка до 50% на все летние коллекции. Спешите, предложение ограничено!',
    discount: '50%',
    validUntil: '31 августа 2024'
  },
  {
    title: 'Скидка на первый заказ',
    description: 'Получите 20% скидку на первый заказ в нашем интернет-магазине. Используйте промокод FIRST20 при оформлении заказа.',
    discount: '20%',
    validUntil: '30 сентября 2024'
  },
  {
    title: 'Акция «Купи 2, получи 1 бесплатно»',
    description: 'При покупке двух товаров из выбранной категории, третий товар в подарок. Отличное предложение для вас и ваших близких!',
    discount: 'Бесплатно',
    validUntil: '15 сентября 2024'
  }
];

const Promotions = () => {
  useEffect(() => {
    document.title = "Акции";
  }, []);

  return (
  <main className="promotions">
    <h1>Акции</h1>
    <p>Текущие скидки и специальные предложения:</p>
    <div className="promotions-list">
      {promotionsData.map((promotion, index) => (
        <div key={index} className="promotion-item">
          <h2>{promotion.title}</h2>
          <p>{promotion.description}</p>
          <span className="discount">{promotion.discount}</span>
          <p className="valid-until">Действует до: {promotion.validUntil}</p>
        </div>
      ))}
    </div>
  </main>
  );
};


export default Promotions;