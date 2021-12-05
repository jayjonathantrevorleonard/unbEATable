import { combineReducers } from 'redux';

// import all reducers here
import searchReducers from './reducers.js';


// combine reducers
const combiners = combineReducers({
  // if we had other reducers, they would go here
    searchPage: searchReducers
});

// make the combined reducers available for import
export default combiners;
