import React from 'react';

const AddBook = () => (
  <form>
    <div className="new-book__controls">

      <div className="new-book__control">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>

      <div className="new-book__control">
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" />
      </div>

    </div>

    <div className="new-book__actions">
      <button type="submit">Add Book</button>
    </div>

  </form>
);

export default AddBook;
