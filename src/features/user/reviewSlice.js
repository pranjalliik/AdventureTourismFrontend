
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    status: "",
    error: "",
 
  };



  export const createReview = createAsyncThunk(
    "review/create",
    async ({review,rating,id}, { rejectWithValue }) => {
       
        try {
            console.log('hii')
            const response = await axios.post(
              `http://localhost:5000/reviews/${id}`,
              JSON.stringify({ review, rating }),
              {
                headers: { 'Content-Type': 'application/json' },
                credentials: true
              }
            );
          //  console.log(response.data)
            return response.data.reviewdata;
          } catch (error) {
            console.error(error);
            throw new Error('Sign-in request failed.');
          }
    }
  );






 

  export const reviewSlice = createSlice({
    name: "review",
    initialState,
    
    extraReducers(builder) {
      builder
        .addCase(createReview.fulfilled, (state, action) => {
            console.log(action)
          state.status = "succeeded";
          })
        .addCase(createReview.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(createReview.rejected, (state, action) => {
          state.status = "failed";
        state.error = action.payload;
        })
    }
  }) 

 // export const {updateMessagesAndConversations} = chatSlice.actions

export default reviewSlice.reducer;