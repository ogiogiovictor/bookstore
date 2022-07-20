import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const CategoryPage = () => {
  const text = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <p>
        {' '}
        {text}
        {' '}
      </p>
    </div>
  );
};

export default CategoryPage;
