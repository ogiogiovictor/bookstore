import { v4 as uuidv4 } from 'uuid';

// Initial book state
const bookState = [];

// create action contants - This are calleds action types
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Action Creators for the action constant

// ########## Action to Add Book ###############/
const addnewBook = (book) => ({
  type: ADD_BOOK,
  payload: {
    id: uuidv4(),
    title: book.title,
    category: book.category,
    author: book.author,
    status: book.status,
    currentChapter: book.currentChapter,
  },
});

// ########## Delete Book ###############/
const removeBook = (bookid) => ({
  type: REMOVE_BOOK,
  payload: {
    id: bookid,
  },
});

// Reducers that recieves the actions
const bookReducer = (state = bookState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((el) => el.id !== action.payload.id)];
    default:
      return state;
  }
};

export { addnewBook, removeBook };
export default bookReducer;
