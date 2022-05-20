import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import cartReducer from './reducers/cart';
import userReducer from './reducers/user';

//COMBINING ALL REDUCERS
const reducer = {
  cart: cartReducer,
  user: userReducer
}

const makeStore = ({ isServer }: { isServer: Boolean }) => {
  if (isServer) {
    //If it's on server side, create a store
    return configureStore({ 
      reducer,
    });
  } else {
    //If it's on client side, create a store which will persist
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "shoppingcart",
      whitelist: ["cart", "user"], // only counter will be persisted, add other reducers if needed
      storage, // if needed, use a safer storage
    };

    const persistedReducer = persistReducer(persistConfig, reducer); // Create a new reducer with our existing reducer

    const store = configureStore({ 
      reducer: persistedReducer,
    }); // Creating the store again

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store;
  }
};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});