import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/users/userSlice'
import cartReducer from  './features/cart/cartSlice'
import orderReducer from './features/booking/bookingSlice'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit";
import slotSlice from "./features/Admin/TimeAndDate/SlotSlice";
import reviewSlice from "./features/user/reviewSlice";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'cart'] 
  }



  const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    slot : slotSlice,
    review : reviewSlice
    // Add other reducers if needed
  });
  
  // Apply persistReducer to the combined rootReducer
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  // Configure the store using configureStore and the persistedReducer
  const store = configureStore({
    reducer: persistedReducer,
    // Add other middleware or configurations as needed
  });




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


