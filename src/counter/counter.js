import { createSlice } from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

 const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 100000,
  },
  reducers: {
    increment: state => {
      state.value += 10000;
    },
    decrement: state => {
        if(state.value>0){
      state.value -= 10000;
        }
        else{
            alert("Can't negate from 0 value");
        }
    },
    donate : state => {
      state.value -= state.value ;
    },
  },
});
 const reducer = combineReducers({
    counter: counterSlice.reducer,
  })

export const { increment, decrement, donate } = counterSlice.actions;

export const selectCount = state => state.counter.value;

export default reducer;