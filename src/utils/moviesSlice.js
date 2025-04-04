import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: { // Corrected the typo here
        nowplayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowplayingMovies: (state, action) => {
            state.nowplayingMovies = action.payload;
        },
        addTrailearVideo: (state, action) =>{
            state.trailerVideo = action.payload;
        },
    },
});

export const { addNowplayingMovies, addTrailearVideo } = moviesSlice.actions;

export default moviesSlice.reducer;