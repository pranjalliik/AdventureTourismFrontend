import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
 user :'',
  expiresAt : '',
  status : '',
  error : ''
};

export const signin = createAsyncThunk(
  "signin/user",
  async ({email,password}, { rejectWithValue }) => {
     
    try {
      const response = await axios.post(
        'http://localhost:5000/users/signin',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          credentials: true
        }
      );
  
      return response;
    } catch (error) {

      if (error.response && error.response.status === 401) {
        
        throw new Error('Wrong Credentials');

      }else{

      throw new Error('Sign-in request failed.');
    }
    }
  }
);

export const signout = createAsyncThunk(
  "signout/user",
  async () => {
     
    try {
   

      const response = await axios.post(
        'http://localhost:5000/users/signout', { headers: {
          'Content-Type': 'application/json',
        },
    });
      return response;
    } catch (error) {
      
       if (error.response && error.response.status === 401) {
        // Handle 401 Unauthorized error
        // You may dispatch an action to update the state indicating the user is not authenticated
        console.error('Unauthorized. Please log in again.');
      } 
      console.error(error);
      throw new Error('Signout request failed.');
    }
  }
);



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
  },

  extraReducers(builder) {
    builder
    .addCase(signin.fulfilled, (state, action) => {

      console.log(action.payload)

      state.user = action.payload.user
       state.expiresAt =  action.payload.cookieopt.expires
      state.status = "succeeded";
    })
    .addCase(signin.pending, (state, action) => {
      state.status = 'loading';
     
    })
    .addCase(signin.rejected, (state, action) => {
      console.log(action.error)

      state.status = 'failed';
      state.error = action.error.message;

    })
    .addCase(signout.fulfilled, (state, action) => {

  
      state.user = '';
      state.expiresAt = '';
      state.status = 'succeeded';
      
    })
    .addCase(signout.pending, (state, action) => {
      state.status = 'loading';
     
    })
    .addCase(signout.rejected, (state, action) => {
      state.status = "failed";
    })
  
  }

});







export default authSlice.reducer;