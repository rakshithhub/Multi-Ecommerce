import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop from './components/Shop';
import ShopDetail from './components/ShopDetail';
import ShopingCart from './components/ShopingCart';
import Errorpage from './components/Errorpage';

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home/shop/' element={<Shop/>}/>
        <Route path='/home/shopdetail/' element={<ShopDetail/>}/>
        <Route path='/home/shop/shopingcart/' element={<ShopingCart/>}/>
        <Route path='*'element={<Errorpage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
