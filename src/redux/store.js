import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import nutritionReducer from './reducers';

const rootReducer = combineReducers({
  nutrition: nutritionReducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(rootReducer);

export default store;