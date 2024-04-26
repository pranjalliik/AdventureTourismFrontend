import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const api_url = process.env.REACT_APP_API_URL;

const initialState = {
  cart: [],
   fetchedTours : [],
  status : '',
  error : ''
};


export const getCartItems = createAsyncThunk(
  "cart/get",
  async ({items}) => {
     
    let likedTours = []
    for(let i=1;i<items.length;i++){
  const res = await  axios.get(`${api_url}/tours/${items[i].id}`) 
       likedTours.push(res.data.data)
}
return likedTours
  }
);




const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      addItem: (state, action) => {
          state.cart.push(action.payload);
          console.log(state.cart);
      },
      deleteItem: (state, action) => {
          state.cart = state.cart.filter((item, idx) => idx == 0 || item.id !== action.payload);
          state.fetchedTours = state.fetchedTours.filter((item, idx) => item._id !== action.payload);

      },
      clearCart: (state) => {
          state.cart = [];
      }
  },
   extraReducers(builder) {
    builder
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload)
       state.fetchedTours =  action.payload
      })
      .addCase(getCartItems.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.status = "failed";
      state.error = action.payload;
      })
    }
});

export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;