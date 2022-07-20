import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addnewBook } from '../../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const allbooks = useSelector((state) => state.books);
  const [state, setState] = useState(allbooks);

  // Capture input state
  const [enterTitle, setEnteredTitle] = useState('');
  const [enterAuthor, setEnteredAuthor] = useState('');

  const changeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  const addNewBook = (e) => {
    e.preventDefault();
    // const { target } = e;
    // const title = target.title.value;
    // const author = target.author.value;

    const addnewbook = {
      id: uuidv4(),
      title: enterTitle,
      author: enterAuthor,
      category: 'Not Specified',
      status: false,
      currentChapter: 'Not Specified',
    };

    dispatch(addnewBook(addnewbook));
    setEnteredTitle('');
    setEnteredAuthor('');

    setState((previousBookState) => [state, ...previousBookState]);
  };

  return (
    <form onSubmit={addNewBook}>
      <div className="new-book__controls">

        <div className="new-book__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            autoComplete="off"
            required
            value={enterTitle}
            onChange={changeHandler}
          />
        </div>

        <div className="new-book__control">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            autoComplete="off"
            required
            value={enterAuthor}
            onChange={authorChangeHandler}
          />
        </div>

      </div>

      <div className="new-book__actions">
        <button type="submit">Add Book</button>
      </div>

    </form>
  );
};

export default AddBook;
