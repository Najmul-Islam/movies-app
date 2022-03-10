import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
});

export default movieSlice.reducer;
