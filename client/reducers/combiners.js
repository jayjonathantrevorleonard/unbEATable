import { combineReducers } from 'redux';


import searchReducers from './reducers.js';



const combiners = combineReducers({
  state: searchReducers,
});



export default combiners;
