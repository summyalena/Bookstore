import React from 'react';

function RemoveButton({ removeBook }) {
  return (
    <div>
      <button onClick={removeBook} type="button">Remove</button>
    </div>
  );
}

export default RemoveButton;
