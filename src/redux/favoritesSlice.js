import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
       toggleFavorite: (state, action) => {
      const recipe = action.payload; // Expecting the entire recipe object
      const existingIndex = state.favoriterecipes.findIndex(
        (item) => item.idFood === recipe.idFood
      );

      if (existingIndex >= 0) {
        // Remove the recipe if it already exists in favorites
        state.favoriterecipes.splice(existingIndex, 1);
      } else {
        // Add the recipe if it is not already in favorites
        state.favoriterecipes.push(recipe);
      }
    },
   
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
