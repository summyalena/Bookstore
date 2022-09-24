import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Category() {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const checkStatus = () => {
    dispatch({ type: 'CHECK' });
  };
  return (
    <div>
      {category}
      <button type="button" onClick={checkStatus} id="check-status">Check Status</button>
    </div>
  );
}

export default Category;
