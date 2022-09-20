/*eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/books/books';
import {v4 as uuidv4} from 'uuid'
import './form.css';

function form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');


  const handleChangeTitle = (e) => {
      setTitle(e.target.value)
  };

  const handleChangeAuthor = (e) => {
     setAuthor(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(actions.ADDBOOK({id: uuidv4(), title, author}));
      setTitle('');
      setAuthor('')
    } else {
      alert('input an author/title');
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>ADD NEW BOOK</h4>
      <div className="input">
        <input onChange={handleChangeTitle} type="text" value={title} name="title" placeholder="Book title" />
        <input onChange={handleChangeAuthor} id="author" value={author} type="text" placeholder='Book author' name="author" />
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
}

export default form;
