import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
  cartItems: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    case 'ADD_PRODUCT': 
      return {
        ...state,
        cartItems: [...state.cartItems,
          {
            name: action.name,
            thumb: action.thumb,
            price: action.price,
            count: action.count,
          }
        ]
      };
    default:
      return state;
  }
}