
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    movieNames: [],
    movieResults: [],
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, actions) => {
      const { movieNames, movieResults } = actions.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    }
  },
});


export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions; // Export the new action
export default gptSlice.reducer;