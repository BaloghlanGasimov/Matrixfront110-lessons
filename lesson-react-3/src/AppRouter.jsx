import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Header from './Header';
import DetailCard from './DetailCard';
import Cart from './Cart';

import { CartProvider, useCart } from "react-use-cart";
// import books from './data'

const AppRouter = () => {  

 
  return (
    <BrowserRouter>
    <CartProvider>
        <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='contact' element={<Contact />}/>
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop/:id' element={<DetailCard/>} />
        <Route path='/cart'  element={<Cart />} />
      </Routes>

      </CartProvider>
    </BrowserRouter>
  )
}

export default AppRouter