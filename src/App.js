import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Categories from './components/categories';
import Promotions from './components/promotions';
import Contacts from './components/contacts';
import NotFound from './components/page404';

const App = () => (
  <Router>
    <Header />
    <div className="content">
    <Navigation /> {/*использование навигации*/} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />  {/* cтраница 404 */}
      </Routes>
    </div>
    <Footer />
  </Router>
);

const Navigation = () => {
  const navigate = useNavigate(); // useNavigate даёт разработчику больше контроля и гибкости для обработки навигации, особенно в более сложных сценариях

  return (
    <div className="navigation">
      <button onClick={() => navigate('/')}>Главная</button>
      <button onClick={() => navigate('/categories')}>Категории</button>
      <button onClick={() => navigate('/promotions')}>Акции</button>
      <button onClick={() => navigate('/contacts')}>Контакты</button>
    </div>
  );
};


export default App;