import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../books/book';
import AddBook from '../newbook/addbook';

import './container.css';

// const booklist = [];

const MainContainer = () => {
  // const [allbooks, setBook] = useState(booklist); //Move state to redux

  // Using Use Selector to grab the state
  const allbooks = useSelector((state) => state.books);

  // const addBook = (book) => {
  //   setBook((previousBook) => [book, ...previousBook]);
  // };

  return (
    // <div className="container">
    <div>
      <Book book={allbooks} />
      <AddBook />
    </div>
  );
};

export default MainContainer;
