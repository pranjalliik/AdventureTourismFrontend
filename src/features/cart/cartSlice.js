import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    cart : [
 {
    id : '',
    name: '',
    unitPrice : '',
    photo : '' 
}
]}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItem: (state, action) => {
        state.cart.push(action.payload);
      },

    deleteItem(action,state){
      // id
       state.cart = state.cart.filter(item => item.id !== action.payload)
    } ,
    clearCart(action,state){
        state.cart = []
    }
 }
})

export const {addItem, deleteItem,clearCart} = cartSlice.actions

export default cartSlice.reducer