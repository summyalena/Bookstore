/*eslint-disable */
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Remove from './removeButton';
import './Book.css';

function book(props) {
 
  return (
    <div className="book-container">
      <div className="first-div">
        <span>Action</span>
        <h4>{props.title}</h4>
        <p>{props.author}</p>
        <div className="comment-container">
          <button type="button">Comments</button>
          <Remove id={props.id} />
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

export default book;
