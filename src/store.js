import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
import weatherReducer from "./features/users/weatherSlice";
export const store = configureStore({
  reducer: {
    userDetails: userReducer,
    weatherDetails: weatherReducer,
  },
});
