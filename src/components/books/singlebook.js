import React from 'react';

const SingleBook = ({
  title, category, author, status,
}) => (
  <div>
    <h3>{title}</h3>
    <small>{author}</small>
    <small>{category}</small>
    <small>{status}</small>
  </div>
);

export default SingleBook;
