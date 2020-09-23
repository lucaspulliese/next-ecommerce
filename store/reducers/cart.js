import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
  cartItems: [],
  tick: 'hola',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    case 'ADD_PRODUCT': 
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TICK':
      return {...state, tick: action.payload};
    default:
      return state;
  }
}