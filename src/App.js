import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksDisplay from './components/BooksDisplay';
import Headers from './components/headers';
import { fetchBooks } from './redux/books/books';
import './App.css';

function App() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, books]);

  return (
    <>
      <div className="container">
        <Headers />
        <div className="booksDisplay">
          <BooksDisplay books={books} />
        </div>
      </div>
    </>
  );
}

export default App;
