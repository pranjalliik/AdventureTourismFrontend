
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api_url = process.env.REACT_APP_API_URL;


const initialState = {
    status: "",
    error: "",
 
  };



  export const createReview = createAsyncThunk(
    "review/create",
    async ({review,rating,id}, { rejectWithValue }) => {
       
        try {
            const response = await axios.post(
              `${api_url}/reviews/${id}`,
              JSON.stringify({ review, rating }),
              {
                headers: { 'Content-Type': 'application/json' },
                credentials: true
              }
            );
            return response.data.reviewdata;
          } catch (error) {
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