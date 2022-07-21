import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// Initial State
const initialState = [];

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/v61nR7BOOe26ot4UuTZb/books';

/*
const BookList = (obj) => {
    const result = [];
    const keys = Object.keys(obj);
    console.log(keys)
    keys.forEach((item) => {
      result.push({
        id: item,
        author: obj[item][0].author,
        title: obj[item][0].title,
        category: obj[item][0].category,
        status: true,
        currentChapter: `Chapter ${Math.floor(Math.random() * 15)}`,
      });
    });
    return result;
  };

*/

// Async Action Creators
export const fetchBookApi = createAsyncThunk('fetchBookApi', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addBookApi = createAsyncThunk('addBookApi', async (data) => {
  const response = await axios.post(url, {
    item_id: uuidv4(),
    title: data.title,
    author: data.author,
    category: data.category,
  });
  return response.data;
});

export const delBookApi = createAsyncThunk('delBookApi', async (data) => {
  const response = await axios.delete(`${url}/${data}`);
  return response.data;
});

// BookSlice Reducer
const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [fetchBookApi.fulfilled]: (state, action) => {
      const result = [];
      const keys = Object.keys(action.payload);
      keys.forEach((item) => {
        result.push({
          author: action.payload[item][0].author,
          id: item,
          category: action.payload[item][0].category,
          title: action.payload[item][0].title,
        });
      });
      return result;
    },
    [addBookApi.fulfilled]: (state, action) => [...state, action.payload],
    // eslint-disable-next-line
    [delBookApi.fulfilled]: (state, action) => [...state.filter((el) => el.item_id !== action.payload.item_id)],
  },
});

export default booksSlice.reducer;
