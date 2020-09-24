import { createStore, combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import cartReducer from './reducers/cart';
import userReducer from './reducers/user';

// create your reducer
export const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer
})
  

// create a makeStore function
const makeStore = context => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});