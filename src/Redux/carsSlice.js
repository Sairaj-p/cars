import { createSlice } from "@reduxjs/toolkit";
import { fetchcars} from "./carsAPI";

const initialState ={
    value:0,
    cars :[],
    status:'not initiated'
};


export const carsSlice = createSlice({
    name:'cars',
    initialState,
    reducers:{
        isLoading: (state) => {
          state.status = "loading";
        },
        loadComplete: (state) => {
            state.status="load complete";
          },
        updateCars: (state, action) => {
          state.cars= action.payload;
        },
      }
    // extraReducers:(builder)=>{
    //     builder
    //         .addCase(fetchcarsAsync.pending,(state)=>{
    //             state.status="loading";
    //         })
    //         .addCase(fetchcarsAsync.fulfilled,(state,action)=>{
    //             state.status="idle";
    //             state.cars = action.payload;
    //         })
    //         .addCase(fetchresultAsync.pending,(state)=>{
    //             state.status = "loading";
    //         })
    //         .addCase(fetchresultAsync.fulfilled,(state,action)=>{
    //             state.status="idle";
    //             state.cars = action.payload;
    //         })
    }

);
export const { isLoading,loadComplete, updateCars} =
carsSlice.actions;
export const fetchcarslist = (id) => async (dispatch, getState) => {  
    dispatch(isLoading());
    var message = null;
    try {
      const response = await fetchcars();
      dispatch(updateCars(response));
      dispatch(loadComplete());
    } catch (error) {
      console.log("Error: ", error);
      message = error?.response?.data?.error?.message;
      console.log("Message", message);
      dispatch(loadComplete());
    }}

export default carsSlice.reducer;
export const allcars = (state) => state.cars;