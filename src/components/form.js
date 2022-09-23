/*eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/books/books';
import {v4 as uuidv4} from 'uuid'
import './form.css';
import {postBooks} from '../redux/books/books'

function form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleChangeTitle = (e) => {
      setTitle(e.target.value)
  };

  const handleChangeAuthor = (e) => {
     setAuthor(e.target.value);
  }

  const handleCategoryHandler = (e)=> {
      setCategory(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      // dispatch(actions.ADDBOOK({id: uuidv4(), title, author}));
       dispatch(postBooks({item_id: uuidv4(), author, title, category}))
      setTitle('');
      setAuthor('')
      setCategory('')
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
        <input onChange={handleCategoryHandler} id="category" value={category} type="text" placeholder='Book Category' name="category" />
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
}

export default form;
