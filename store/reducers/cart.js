const initialState = {
  cartItems: [],
}

const indexSameProduct = (state, action) => {
  const sameProduct = (product) => (
    product.id === action.id && 
    product.color === action.color && 
    product.size === action.size
  );

  return state.cartItems.findIndex(sameProduct)
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':   

      // find index of product
      const index = indexSameProduct(state, action);

      if(index !== -1) {
        state.cartItems[index].count += action.count;

        return {
          ...state,
          cartItems: state.cartItems
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems,
          {
            id: action.id,
            name: action.name,
            thumb: action.thumb,
            price: action.price,
            count: action.count,
            color: action.color,
            size: action.size
          }
        ]
      };

    case 'REMOVE_PRODUCT': 
    
      // find index of product
      state.cartItems.splice(indexSameProduct(state, action), 1);

      return {
        ...state,
        cartItems: state.cartItems
      };

    case 'SET_COUNT': 
      
      // find index and add new count on product count
      const indexItem = indexSameProduct(state, action);
      state.cartItems[indexItem].count = action.count;

      return {
        ...state,
        cartItems: state.cartItems
      };
  
    default:
      return state;
  }
}