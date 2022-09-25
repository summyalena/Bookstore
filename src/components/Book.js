import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Circle } from 'rc-progress';
import Remove from './removeButton';
import './Book.css';
import { removeBook } from '../redux/books/books';

function Book({ id, title, author }) {
  const dispatch = useDispatch();
  // const [increase, setIncrease] = useState(0);
  const [amount, setAmount] = useState('');
  const removeBooks = () => {
    dispatch(removeBook(id));
  };

  const addAmount = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };
  return (
    <>
      <div className="book-container">
        <div className="first-div">
          <span>Action</span>
          <h4>{title}</h4>
          <p>{author}</p>
          <div className="comment-container">
            <button type="button">Comments</button>
            <Remove removeBooks={removeBooks} />
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="circle">
          <Circle style={{ width: '85px' }} percent={amount} strokeWidth={6} strokeColor="#0290ff" />
          <p>
            {amount}
            %
            {' '}
            completed
          </p>
        </div>
        <div className="third-div">
          <span>CURRENT CHAPTER</span>
          <h5>Chapter 17</h5>
          <input placeholder="CLICK TO UPDATE PROGRESS" value={amount} onChange={addAmount} />
        </div>
      </div>
      <div className="border">.</div>
    </>
  );
}
export default Book;
