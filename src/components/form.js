/*eslint-disable */

import React, { useState } from 'react';
import './form.css';


function form() {
 
  return (
    <form className="form">
      <h4>ADD NEW BOOK</h4>
      <div className="input">
        <input value='' type="text" placeholder="Book title" />
        <select className="select" id="author" name="author">
          <option value="author">author</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
}

export default form;
