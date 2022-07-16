import React from 'react';
// import PropTypes from 'prop-types';
import SingleBook from './singlebook';

const Book = (props) => (
  <div>
    {
                props.books.map((bk) => (
                  <SingleBook
                    key={bk.id}
                    title={bk.title}
                    category={bk.category}
                    author={bk.author}
                    status={bk.status}
                  />
                ))
            }

  </div>
);

// Book.propTypes = {
//   title: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   status: PropTypes.bool.isRequired,
// };

export default Book;
