import React from 'react';

function removeButton({ id }) {
  return (
    <div>
      <button id={id} type="button">Remove</button>
    </div>
  );
}

export default removeButton;
