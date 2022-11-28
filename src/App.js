import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './components/Category';
import Product from './components/Product';
import Sidebar from './components/Sidebar';
import Users from './components/Users';

function App() {
  return <>
   <Router>
    <Sidebar />
      <Routes>
        <Route path='products' element={<Product />} />
        <Route path='category' element={<Category />} />
        <Route path='users' element={<Users />} />
        </Routes>
   </Router>
  </>
}

export default App;
