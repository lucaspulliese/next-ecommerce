const initialState = {
  cartItems: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
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