import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addnewBook } from '../../redux/books/books';
import { addBookApi } from '../books/bookSlice';
import './addbook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const allbooks = useSelector((state) => state.books);
  const [state, setState] = useState(allbooks);

  // Capture input state
  const [enterTitle, setEnteredTitle] = useState('');
  const [enterAuthor, setEnteredAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const changeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  const CategoryChangeHandler = (e) => {
    setBookCategory(e.target.value);
  };

  const addNewBook = (e) => {
    e.preventDefault();
    if (!enterTitle || !enterAuthor || !bookCategory) return;
    const addnewbook = {
      // id: uuidv4(),
      title: enterTitle,
      author: enterAuthor,
      category: bookCategory,
      // status: false,
      // currentChapter: 'Not Specified',
    };

    dispatch(addBookApi(addnewbook));
    // dispatch(addnewBook(addnewbook));

    setEnteredTitle('');
    setEnteredAuthor('');

    setState((previousBookState) => [state, ...previousBookState]);
  };

  return (
    <form onSubmit={addNewBook}>
      <div className="addNew">Add New Book</div>

      <div className="main-input">

        <div className="new-book__control">
          <input
            placeholder="title"
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
          <input
            placeholder="author"
            type="text"
            name="author"
            id="author"
            autoComplete="off"
            required
            value={enterAuthor}
            onChange={authorChangeHandler}
          />
        </div>

        <div className="new-book__control">
          <select
            className="selectCategory"
            onChange={CategoryChangeHandler}
            value={bookCategory}
            required
          >
            <option value="">Select Category</option>
            <option value="Action">Action</option>
            <option value="Classic">Classic</option>
            <option value="Economy">Economy</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>

        <div className="new-book__actions">
          <button type="submit">Add Book</button>
        </div>

      </div>

    </form>
  );
};

export default AddBook;
