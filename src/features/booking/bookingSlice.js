import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id : '',
    data : '',
  };

  const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
      updateId(state, action) {
        state.id = action.payload;
      },
      updateData(state, action) {
        state.data = action.payload;
      },
    },
  });


  export const { updateId, updateData } = orderSlice.actions;

export default orderSlice.reducer;
