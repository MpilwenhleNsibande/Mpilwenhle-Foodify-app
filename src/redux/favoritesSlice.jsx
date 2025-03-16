import { createSlice } from "@reduxjs/toolkit";

// Creating a slice of state called 'favorites' to manage the list of favorite meals
const favoritesSlice = createSlice({
  name: "favorites", // The name of the slice (used to generate action types)
  initialState: [],  // The initial state of the favorites list is an empty array
  reducers: {
    // Action to add a favorite meal to the state
    addFavorite: (state, action) => {
      // Check if the meal is already in the favorites state
      if (!state.some((item) => item.idMeal === action.payload.idMeal)) {
        // If not, add the meal to the state
        state.push(action.payload);
      }
    },

    // Action to remove a favorite meal from the state
    removeFavorite: (state, action) => {
      // Filter out the meal from the state using its idMeal to match the one being removed
      return state.filter((item) => item.idMeal !== action.payload.idMeal);
    },
  },
});

// Exporting the actions so they can be dispatched in components
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

// Exporting the reducer to be used in the store
export default favoritesSlice.reducer;
