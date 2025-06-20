import { configureStore } from "@reduxjs/toolkit";
 import userReducer from "./userSlice";
 import moviesReducer from "./moviesSlice";
 import gptReducer from "./gptSlice";
 import configeReducer from "./configeSlice"; // ✅ clean name

 const appStore = configureStore({
   reducer: {
     user: userReducer,
     movies: moviesReducer,
     gpt: gptReducer,
     confige: configeReducer, // ✅ clean name
   },
 });

 export default appStore;