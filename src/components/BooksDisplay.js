import React from 'react';
import Book from './Book';
import Form from './form';

function BooksDisplay() {
  return (
    <div className="container">
      <Book author="" title="" />
      <Form />
    </div>
  );
}

export default BooksDisplay;
