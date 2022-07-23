import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import Percentage from '../percentage/percentage';
import './book.css';

const SingleBook = ({
  id, title, category, author, status,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="bookcontainer">
      <div className="first-block">
        <span>{category}</span>
        <h3>{title}</h3>
        <small>
          {author}
          {' '}
          {status}
        </small>
        <div>
          <button type="button"> Comment</button>
          <button type="button" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="second-block">
        <div><Percentage /></div>
      </div>

      <div className="third-block">
        <div>Third Block</div>
      </div>

    </div>
  );
};

export default SingleBook;
