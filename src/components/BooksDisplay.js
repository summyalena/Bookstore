import React from 'react';
// import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './form';

function BooksDisplay() {
  // const books = useSelector((state) => state.Books);
  return (
    <div className="container">
      <Book
        key=""
        id=""
        author=""
        title=""
      />
      <Form />
    </div>
  );
}

export default BooksDisplay;
