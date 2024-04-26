import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/users/userSlice'
import cartReducer from  './features/cart/cartSlice'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit";
import slotSlice from "./features/Admin/TimeAndDate/SlotSlice";
import reviewSlice from "./features/user/reviewSlice";
import authSlice from "./features/auth/authSlice";
import { createFilter } from 'redux-persist-transform-filter';

 
 



const cartFilter = createFilter('cart', ['cart']);
const userFilter = createFilter('user', ['username', 'role', 'email', 'token', 'expiresAt']);



const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user', 'cart'], // Persist only 'user' and 'cart' slices
  transforms: [cartFilter, userFilter] // Apply filters for 'cart' and 'user' slices
};

// Combine the reducers
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  slot: slotSlice,
  review: reviewSlice,
  auth: authSlice
  // Add other reducers if needed
});

// Apply persistReducer to the combined rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store using configureStore and the persistedReducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };

/*const store = configureStore({
    reducer:{
        user : userReducer,
        cart : cartReducer,
        order : orderReducer
    },
});



export default store;*/


