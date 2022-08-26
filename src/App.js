import React from 'react'
import './App.css';
import NewsTitle from './components/NewsTitle/NewsTitle'
import News from './components/News/News'
import Currency from './components/Currency/Currency'
import Menu from './components/Menu/Menu'
import Search from './components/Search/Search'

function App() {
  return (
    <div className="main">
      <NewsTitle />
      <News />
      <Currency />
      <Menu />
      <Search />
    </div>
  );
}

export default App;
