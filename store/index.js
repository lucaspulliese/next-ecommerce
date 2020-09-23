import {createStore} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import cartReducer from './reducers/cart';

// create your reducer
const reducer = cartReducer;

// create a makeStore function
const makeStore = context => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});