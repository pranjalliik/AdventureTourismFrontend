
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import { mapdates } from "../../../services/apiBook";


const initialState = {
    status: "",
    error: "",
    Slot: [],  
  };



  export const delSlot = createAsyncThunk(
    "slot/delete",
    async ({id}, { rejectWithValue }) => {
       
      try {
      let data =  await  axios.delete(`http://localhost:5000/slots/${id}`)
      console.log(data)
        return data;
      } catch (error) {
        console.log(error);
        return;
      }
    }
  );


  export const updateSlot = createAsyncThunk(
    "slot/send",
    async ({id,newdata}, { rejectWithValue }) => {
       
      try {
      let data =  await  axios.patch(`http://localhost:5000/slots/${id}`,
        newdata , {
         headers: {
           'Content-Type': 'application/json',
         },
    })
        return data;
      } catch (error) {
        console.log(error);
        return;
      }
    }
  );


  export const createSlot = createAsyncThunk(
    "slot/create",
    async ({sdata,id}, { rejectWithValue }) => {
       
      try {
      let data =  await  axios.post(`http://localhost:5000/slots/${id}`,
        sdata , {
         headers: {
           'Content-Type': 'application/json',
         },
    })
        return data;
      } catch (error) {
        console.log(error);
        return;
      }
    }
  );






  export const getAllSlot = createAsyncThunk(
    "slots/get",
    async (values) => {
        console.log('hii')

      let {id} = values
        try {
      const response = await axios.get(`http://localhost:5000/slots/${id}`)
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('cannot get slots');
    }
      
    }
  );



  export const slotSlice = createSlice({
    name: "slot",
    initialState,
    
    extraReducers(builder) {
      builder
        .addCase(updateSlot.fulfilled, (state, action) => {
          state.status = "succeeded";
          console.log(action.payload)
          const updatedSlot = action.payload.data.data;
          state.Slot = state.Slot.map((slot) =>
            slot._id === updatedSlot._id ? updatedSlot : slot
          );
  

        })
        .addCase(updateSlot.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(updateSlot.rejected, (state, action) => {
          state.status = "failed";
        state.error = action.payload;
        })
        .addCase(getAllSlot.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(getAllSlot.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.Slot = action.payload.data;
        })
        .addCase(getAllSlot.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload
        })  
        .addCase(createSlot.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(createSlot.fulfilled, (state, action) => {
          state.status = "succeeded";
          let idx = 0;
          for(let i=0;i< state.Slot.length;i++){
                    if(state.Slot.date > action.payload.data.data.date){
                      idx = i;
                      break;
                    }
          }
             //does not work
          state.Slot.splice(idx,0,action.payload.data.data)

        })
        .addCase(createSlot.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload
        })

        .addCase(delSlot.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(delSlot.fulfilled, (state, action) => {
          let deletedSlot = action.payload.data.data
          state.Slot = state.Slot.filter((slot) => slot._id !== deletedSlot._id);

  
        })
        .addCase(delSlot.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload
        })  

    }
  }) 

 // export const {updateMessagesAndConversations} = chatSlice.actions

export default slotSlice.reducer;
