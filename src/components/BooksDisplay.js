import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './form';

function BooksDisplay() {
  const booksCategory = useSelector((state) => state.books);
  const books = booksCategory.map((book) => (
    <Book id={book.id} key={book.id} author={book.author} title={book.title} />
  ));
  return (
    <div className="container">
      {books}
      <Form />
    </div>
  );
}

export default BooksDisplay;
