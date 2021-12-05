import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combiners from './reducers/combiners.js';

const store = createStore(
    combiners,
    composeWithDevTools()
);

export default store;