import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",
};

export const changeColorSlice = createSlice({
  name: 'changeColor',
  initialState,
  reducers: {
    getColor: (state,payload) => {
      state.color = payload.payload.color
    }
  }
});

export const { getColor } = changeColorSlice.actions;

export const selColor = (state) => state.changeColor.value;

export default changeColorSlice.reducer;
