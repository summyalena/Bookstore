import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './form';
import { fetchBooks } from '../redux/books/books';

function BooksDisplay() {
  const booksCategory = useSelector((state) => state.books.books);
  // const loading = useSelector((state) => state.books.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
    // console.log('fellow');
  }, [dispatch]);

  // if (loading) return <p>Loading...</p>;

  const books = booksCategory.map((book) => (
    <Book id={book.id} key={book.id} author={book.author} title={book.title} />
  ));
  return (
    <div className="container">
      { books }
      <Form />
    </div>
  );
}

export default BooksDisplay;
