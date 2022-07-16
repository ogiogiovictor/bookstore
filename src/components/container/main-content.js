import React from 'react';
import Book from '../books/book';
import AddBook from '../newbook/addbook';

import './container.css';

const MainContainer = () => {
  const booklist = [
    {
      id: 1,
      title: 'Toilet Paper',
      category: 'Science',
      author: 'Frank dejoin',
      status: true,
    },
    {
      id: 2,
      title: 'Melborn Syndy',
      category: 'Clothing',
      author: 'Esther Adeleke',
      status: false,
    },
    {
      id: 3,
      title: 'Metal Chair',
      category: 'Adame',
      author: 'Sule Marke',
      status: false,
    },
  ];

  return (
    <div className="container">

      <Book book={booklist} />
      <AddBook />
    </div>
  );
};

export default MainContainer;
