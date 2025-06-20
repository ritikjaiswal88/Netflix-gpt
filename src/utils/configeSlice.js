import { createSlice } from '@reduxjs/toolkit';
 import React from 'react';

 const configeSlice = createSlice({
     name: "confige",
     initialState:{
        lang: "en", // Ensure there's an initial language set
     },
     reducers:{
        changeLanguage: (state, action) => {
            state.lang = action.payload;
         },
     },
 });

 export const { changeLanguage } = configeSlice.actions;
 export default configeSlice.reducer;