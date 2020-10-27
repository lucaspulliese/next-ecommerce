const initialState = {
  cartItems: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':   

      // TODO refactor this, is horrible
      var sameProduct = (product) => (
        product.id === action.id && 
        product.color === action.color && 
        product.size === action.size
      );

      const index = state.cartItems.findIndex(sameProduct);

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
    
      // TODO refactor this, is horrible
      var sameProduct = (product) => (
        product.id === action.id && 
        product.color === action.color && 
        product.size === action.size
      );
      
      state.cartItems.splice(state.cartItems.findIndex(sameProduct), 1);

      return {
        ...state,
        cartItems: state.cartItems
      };

    case 'SET_COUNT': 
    
      // TODO refactor this, is horrible
      var sameProduct = (product) => (
        product.id === action.id && 
        product.color === action.color && 
        product.size === action.size
      );
      
      // set count to item
      const indexItem = state.cartItems.findIndex(sameProduct);
      state.cartItems[indexItem].count = action.count;

      return {
        ...state,
        cartItems: state.cartItems
      };
  
    default:
      return state;
  }
}