import { configureStore } from "@reduxjs/toolkit";
// Importing the reducer for managing the favorites state from favoritesSlice
import favoritesReducer from "./favoritesSlice";

// Configuring the store using configureStore
const store = configureStore({
  // The 'reducer' property defines the slices of state and their corresponding reducers
  reducer: {
    // Mapping the 'favorites' slice of state to the favoritesReducer
    favorites: favoritesReducer, 
  },
});

export default store;
