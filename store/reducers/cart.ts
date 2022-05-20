import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ProductType = {
  id: string;
  name: string;
  thumb: string;
  price: string;
  count: number;
  color: string;
  size: string;
}

interface CartTypes {
  cartItems: ProductType[]
}

const initialState = { cartItems: [] } as CartTypes;

const indexSameProduct = (state: CartTypes, action: ProductType) => {
  const sameProduct = (product: ProductType) => (
    product.id === action.id && 
    product.color === action.color && 
    product.size === action.size
  );

  return state.cartItems.findIndex(sameProduct)
};

type AddProductType = {
  product: ProductType,
  count: number,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<AddProductType>) {
      // find index of product
      const index = indexSameProduct(state, action.payload.product);

      if(index !== -1) {
        state.cartItems[index].count += action.payload.count;

        return {
          ...state,
          cartItems: state.cartItems
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems,
          {
            id: action.payload.product.id,
            name: action.payload.product.name,
            thumb: action.payload.product.thumb,
            price: action.payload.product.price,
            count: action.payload.product.count,
            color: action.payload.product.color,
            size: action.payload.product.size
          }
        ]
      };
    },
    removeProduct(state, action: PayloadAction<ProductType>) {
      // find index of product
      state.cartItems.splice(indexSameProduct(state, action.payload), 1);

      return {
        ...state,
        cartItems: state.cartItems
      };
    },
    setCount(state, action: PayloadAction<AddProductType>) {
      // find index and add new count on product count
      const indexItem = indexSameProduct(state, action.payload.product);
      state.cartItems[indexItem].count = action.payload.count;

      return {
        ...state,
        cartItems: state.cartItems
      };
    },
  },
})

export const { addProduct, removeProduct, setCount } = cartSlice.actions
export default cartSlice.reducer