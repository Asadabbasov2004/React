import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import NoPage from './Pages/NoPage'
import Menu from './Pages/Menu';
import Reservation from './Pages/Reservation';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Layout from './Pages/Layout';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path='Menu' element={<Menu />} />
            <Route path='Reservation' element={<Reservation />} />
            <Route path='Gallery' element={<Gallery />} />
            <Route path='About' element={<About />} />
            <Route path='Blog' element={<Blog />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

