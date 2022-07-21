import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../books/book';
import AddBook from '../newbook/addbook';

import './container.css';

const MainContainer = () => {
  // Using Use Selector to grab the state
  const allbooks = useSelector((state) => state.books);

  return (
    <div>
      <Book book={allbooks} />
      <AddBook />
    </div>
  );
};

export default MainContainer;
