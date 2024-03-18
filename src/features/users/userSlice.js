/*import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    username: '',
    role: '',
  };

const userSlice = createSlice({
 name : 'user',
 initialState,
 reducers :{
   updateName(state,action){
    state.username = action.username
   },
   updateRole(state,action){
    state.role = action.role
   }, 
 }

})

export const {updateName,updateRole} = userSlice.actions 

export default userSlice.reducer
*/

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  role: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    updateRole(state, action) {
      state.role = action.payload;
    },  
    updateEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { updateName, updateRole,updateEmail } = userSlice.actions;

export default userSlice.reducer;
