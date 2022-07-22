import React from 'react';
import { useDispatch } from 'react-redux';
// import { removeBook } from '../../redux/books/books';
import { delBookApi } from './bookSlice';
import Percentage from '../percentage/percentage';
import './book.css';

const SingleBook = ({
  id, title, category, author, status,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="bookcontainer">
      <div className="first-block">
        <div className="fcategory">{category}</div>
        <div className="ftitle">{title}</div>
        <div className="fauthor">{author}</div>
        <div className="fbutton">
          <button type="button"> Comment</button>
          <span className="divider">|</span>
          <button type="button" onClick={() => { dispatch(delBookApi(id)); }}>Remove</button>
          <span className="divider">|</span>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="second-block">
        <div><Percentage /></div>
        <div className="spercentage">
          <div className="percentage">64%</div>
          <div className="status">{ status === true ? 'Completed' : 'Completed'}</div>
        </div>
      </div>

      <div className="third-block">
        <div className="tblock">
          <div className="currentChapter">Current Chapter</div>
          <div className="chapter">Chapter 14</div>
          <button type="button" className="updateProgress">Update Progress</button>
        </div>
      </div>

    </div>
  );
};

export default SingleBook;
