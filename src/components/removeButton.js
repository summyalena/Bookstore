import React from 'react';
import './removeButton.css';

function RemoveButton({ removeBooks }) {
  return (
    <div className="remove-container">
      <button onClick={removeBooks} type="button">Remove</button>
    </div>
  );
}

export default RemoveButton;
