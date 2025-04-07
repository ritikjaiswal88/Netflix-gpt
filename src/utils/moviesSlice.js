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
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailearVideo: (state, action) =>{
            state.trailerVideo = action.payload;
        },
    },
});

export const { addNowplayingMovies, addTrailearVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;