import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import bookReducer from './books/books';
import bookSlice from '../components/books/bookSlice';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookSlice,
  category: categoryReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
