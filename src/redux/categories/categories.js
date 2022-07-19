// Initial category
const initialCategoryState = [];

// create action contants - This are calleds action types
const ADD_CATEGORY = 'category/ADD_CATEGORY';
const STATUS_CHECKED = 'category/STATUS_CHECKED';

// Action Creators for the action constant

// ########## Action to category ###############/
const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: {
    title: category.title,
  },
});

const statusCheck = () => ({
  type: STATUS_CHECKED,
  payload: {
    title: 'Under Construction',
  },
});

// Reducers that recieves the actions
const categoryReducer = (state = initialCategoryState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];
    case STATUS_CHECKED:
      return [...state, action.payload];
    default:
      return state;
  }
};

// Exports actions
export { addCategory, statusCheck };
// Exports Reducers
export default categoryReducer;
