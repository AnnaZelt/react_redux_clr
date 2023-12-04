import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "red",
};

export const cColorSlice = createSlice({
  name: 'cColorSlice',
  initialState,
  reducers: {
    getColor: (state,action) => {
      state.value = action.payload.color
    },
  },
});

export const { getColor} = cColorSlice.actions;
export const selectMyColor = (state) => state.cColorSlice.value;
export default cColorSlice.reducer;
