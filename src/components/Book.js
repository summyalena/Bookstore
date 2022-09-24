// /*eslint-disable */
import { useDispatch } from 'react-redux';
import Remove from './removeButton';
import './Book.css';
import { removeBook } from '../redux/books/books';

function Book({ id, title, author }) {
  const dispatch = useDispatch();

  const removeBooks = () => {
    dispatch(removeBook(id));
  };
  return (
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

      <div className="spin-update">64% completed</div>

      <div className="third-div">
        <span>CURRENT CHAPTER</span>
        <h5>Chapter 17</h5>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}
export default Book;
