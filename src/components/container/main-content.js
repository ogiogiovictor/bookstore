import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../books/book';
import AddBook from '../newbook/addbook';
import { fetchBookApi } from '../books/bookSlice';

import './container.css';

const MainContainer = () => {
  // Using Use Selector to grab the state
  const allbooks = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookApi());
  }, [allbooks.length]);

  return (
    <div>
      {

          allbooks.length ? <Book book={allbooks} /> : <div>No Book Added Yet</div>
        }
      <AddBook />
    </div>
  );
};

export default MainContainer;
