import React from 'react';
import SingleBook from './singlebook';

const Book = (props) => {
  const filterprops = props;
  return (
    <div>
      {filterprops.book.map((bk) => (
        <SingleBook
          key={bk.id}
          title={bk.title}
          category={bk.category}
          author={bk.author}
          status={bk.status}
        />
      ))}
    </div>
  );
};

export default Book;
