import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id?: string;
  name?: string;
  email?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  phone: string;
  otp: string;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  phone: "",
  otp: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPhoneAndOtp: (
      state,
      action: PayloadAction<{ phone: string; otp: string }>,
    ) => {
      state.phone = action.payload.phone;
      state.otp = action.payload.otp;
    },
    setAuthCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setAuthCredentials, logout, setLoading, setPhoneAndOtp } =
  authSlice.actions;
export default authSlice.reducer;
