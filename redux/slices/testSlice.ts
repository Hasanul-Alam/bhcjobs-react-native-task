import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  testArray: [],
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    callingTest: (state, action: PayloadAction<any>) => {
      state.testArray = action.payload.testArray;
    },
  },
});

export const { callingTest } = testSlice.actions;
export default testSlice.reducer;
