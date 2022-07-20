// Initial category
const initialCategoryState = [];

// create action contants - This are calleds action types
const STATUS_CHECKED = 'bookstore/category/STATUS_CHECKED';

// Action Creators for the action constant

// ########## Action to category ###############/
const checkStatus = () => ({
  type: STATUS_CHECKED,
  payload: {
    title: 'Under Construction',
  },
});

// Reducers that recieves the actions
const categoryReducer = (state = initialCategoryState, action) => {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under Construction';
    default:
      return state;
  }
};

// Exports actions
export { checkStatus };
// Exports Reducers
export default categoryReducer;
