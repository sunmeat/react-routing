import React, { useEffect } from 'react';
import '../styles/home.css';

const popularProducts = [
  {
    name: 'Мобильный телефон Apple iPhone 15 Pro Max 256GB Natural Titanium (MU793RX/A)',
    price: '55.999 ₴',
    imageUrl: 'https://content2.rozetka.com.ua/goods/images/big/364834252.jpg'
  },
  {
    name: 'Ноутбук ASUS TUF Gaming F15 FX507VV-LP212 (90NR0BV7-M00EY0) Mecha Gray / 15.6" IPS Full HD 144 Гц / Intel Core i7-13620H / RAM 16 ГБ / SSD 5',
    price: '49.999 ₴',
    imageUrl: 'https://content2.rozetka.com.ua/goods/images/big/433813139.jpg'
  },
  {
    name: 'Навушники Final Audio D8000 Pro Edition Silver',
    price: '191.999 ₴',
    imageUrl: 'https://portativ.ua/media/cache/images/1/image/750x700/602f0fa2c1f0d1ba5e241f914e856ff9/catalog/product/f/cc7bbb0bc675d0dc29eadc510731b035.png'
  },
  {
    name: 'Професійна кавомашина La San Marco V6 6GR Nero Lava б/в',
    price: '1.049.357 ₴',
    imageUrl: 'https://coffeeone.com.ua/image/cache/catalog/La%20San%20Marco/San%20Marco%20V6/LEVA-V6-La-San-Marco-nera-modificata-ok-960x720.png'
  }
];

const Home = () => {
  useEffect(() => {
    document.title = "Главная";
  }, []);

  return (
    <main className="home">
      <h1>Добро пожаловать в интернет-магазин AlexGarage!</h1>
      <p>Популярные продукты и акции:</p>
      <section className="popular-products">
        <h2>Популярные продукты</h2>
        <div className="products-list">
          {popularProducts.map((product, index) => (
            <div key={index} className="product-item">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="promotions-preview">
        <h2>Акции</h2>
        <p>Не упустите наши текущие скидки и специальные предложения!</p>
        <a href="/promotions" className="promotions-link">Посмотреть все акции</a>
      </section>
    </main>
  );
};

export default Home;