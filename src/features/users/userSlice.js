import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const api_url = process.env.REACT_APP_API_URL;


const initialState = {
  username: '',
  role: '',
  email: '',
  token : '',
  expiresAt : '',
  status : '',
  error : ''
};

export const signin = createAsyncThunk(
  "signin/user",
  async ({email,password}, { rejectWithValue }) => {
     
    try {
      const response = await axios.post(
        `${api_url}/users/signin`,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          credentials: true
        }
      );
      return response.data;
    } catch (error) {

      if (error.response && error.response.status === 401) {
        
        throw new Error('Wrong Credentials');

      }else{

      throw new Error('Sign-in request failed.');
    }
    }
  }
);

export const signup = createAsyncThunk(
  "signup/user",
  async ({name, email,password,confirmPassword}, { rejectWithValue }) => {
     
    try {
      const response = await axios.post(
        `${api_url}/users/signup`,
        JSON.stringify({name, email,password,confirmPassword}),
        {
          headers: { 'Content-Type': 'application/json' },
          credentials: true
        }
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401 || 400) {
        if(error.response.data.message === 'Duplicate field Please use another value!'){
        throw new Error('Email Already Registered');
        }    
      }else{

      throw new Error('Sign up request failed.');
    }
    }
  }
);





export const signout = createAsyncThunk(
  "signout/user",
  async () => {
     
    try {
   

      const response = await axios.post(
        `${api_url}/users/signout`, { headers: {
          'Content-Type': 'application/json',
        },
    });
      return response;
    } catch (error) {
      
       if (error.response && error.response.status === 401) {
        // Handle 401 Unauthorized error
        // You may dispatch an action to update the state indicating the user is not authenticated
      } 
      throw new Error('Signout request failed.');
    }
  }
);









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
    logout(state) {
      // Reset all user properties on logout
      state.username = '';
      state.email = '';
      state.role = '';
      state.expiresAt = '';
      state.status = '';
      state.token = '';
    },

  },

  extraReducers(builder) {
    builder
    .addCase(signin.fulfilled, (state, action) => {

      state.email = action.payload.user.email
      state.username = action.payload.user.name

      state.role = action.payload.user.role
       state.expiresAt =  action.payload.cookieopt.expires
      state.status = "succeeded";
    })
    .addCase(signin.pending, (state, action) => {
      state.status = 'loading';
     
    })
    .addCase(signin.rejected, (state, action) => {

      state.status = 'failed';
      state.error = action.error.message;

    }) .addCase(signup.fulfilled, (state, action) => {

      state.email = action.payload.data.email
      state.username = action.payload.data.name

      state.role = action.payload.data.role
       state.expiresAt =  action.payload.cookieopt.expires
      state.status = "succeeded";
    })
    .addCase(signup.pending, (state, action) => {
      state.status = 'loading';
     
    })
    .addCase(signup.rejected, (state, action) => {

      state.status = 'failed';
      state.error = action.error.message;

    })
    .addCase(signout.fulfilled, (state, action) => {

      state.username = '';
      state.email = '';
      state.role = '';
      state.expiresAt = '';
      state.status = 'succeeded';
      state.token = '';
    })
    .addCase(signout.pending, (state, action) => {
      state.status = 'loading';
     
    })
    .addCase(signout.rejected, (state, action) => {
      state.status = "failed";
    })
  
  }

});

export const { updateName, updateRole,updateEmail ,logout} = userSlice.actions;





export default userSlice.reducer;
