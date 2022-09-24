import React from 'react';

function RemoveButton({ removeBooks }) {
  return (
    <div>
      <button onClick={removeBooks} type="button">Remove</button>
    </div>
  );
}

export default RemoveButton;
