import React from 'react';
import Percentage from '../percentage/percentage';
import './book.css';

const SingleBook = ({
  title, category, author, status,
}) => (
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
        <a href="/">Comment</a>
        <a href="/">Remove</a>
        <a href="/">Edit</a>
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

export default SingleBook;
