import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import nutritionReducer from './reducers';

const rootReducer = combineReducers({
  nutrition: nutritionReducer,
});

// const middleware = [thunk];
const middleware = [thunk]; // This will cause the error
console.log(middleware);
console.log('Thunk:', thunk);

// const store = createStore(rootReducer, applyMiddleware(...middleware));
const store = createStore(rootReducer);

export default store;