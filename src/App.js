import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import BookListPage from './pages/book/booklist';
import CategoryPage from './pages/category/categorylist';
import Header from './components/header/header';

import './App.css';

const App = () => (
  <>
    <Header />
    <div className="App">

      <Routes>
        <Route exact path="/" element={<BookListPage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
      {/* <MainContainer /> */}
    </div>
  </>
);

export default App;
