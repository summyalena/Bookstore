// /*eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/books/books';
import Remove from './removeButton';
import './Book.css';

function Book({ id, title, author }) {
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(actions.REMOVEBOOK({ id }));
  };
  return (
    <div className="book-container">
      <div className="first-div">
        <span>Action</span>
        <h4>{title}</h4>
        <p>{author}</p>
        <div className="comment-container">
          <button type="button">Comments</button>
          <Remove removeBook={removeBook} />
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="spin-update">
        64% completed
      </div>

      <div className="third-div">
        <span>CURRENT CHAPTER</span>
        <h5>Chapter 17</h5>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}
export default Book;
