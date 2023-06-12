import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weatherDetails",
  initialState: {
    apiData: "",
    search: "",
    setLat: "",
    setLon: "",
  },

  reducers: {
    setapiData: (state, action) => {
      state.apiData = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setLat: (state, action) => {
      state.lat = action.payload;
    },
    setLon: (state, action) => {
      state.lon = action.payload;
    },
  },
});
export const { setapiData } = weatherSlice.actions;
export const { setSearch } = weatherSlice.actions;
export const { setLat } = weatherSlice.actions;
export const { setLon } = weatherSlice.actions;
export default weatherSlice.reducer;
