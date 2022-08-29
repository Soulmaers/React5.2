import React from 'react'
import './App.css';
import NewsTitle from './components/NewsTitle/NewsTitle'
import News from './components/News/News'
import Currency from './components/Currency/Currency'
import Menu from './components/Menu/Menu'
import Search from './components/Search/Search'
import Banner from './components/Banner'
import Widgets from './components/Widgets'
import { banner } from './components/Content';

function App() {
  return (
    <div className="main">
      <NewsTitle />
      <News />
      <Currency />
      <Menu />
      <Search />
      <Banner img={banner.img} link={banner.link} />
      <Widgets />
    </div>
  );
}

export default App;
