import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [], 
  reducers: {
    addFavorite: (state, action) => {
      if (!state.some((item) => item.idMeal === action.payload.idMeal)) {
        state.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      return state.filter((item) => item.idMeal !== action.payload.idMeal);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
