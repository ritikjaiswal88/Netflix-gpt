import React, { useRef } from 'react';
import lang from '../utils/languageConstant';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GOOGLE_API_KEY } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import { API_OPTIONS } from '../utils/constants';
import GptMovieSuggestion from './GptMovieSuggestion';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.confige.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // movies in tmdb -
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)
  const json = await data.json();

  return json.results;
  }
  

  const handleGptSearchClick = async () => {
    const inputText = searchText.current.value;
    console.log("Search input:", inputText);


    // 1. Ensure API Key is valid and configured correctly
    if (!GOOGLE_API_KEY) {
        console.error("Error: GOOGLE_API_KEY is not set.");
        // Optionally, display an error message to the user
        return;
    }

    try {
        const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

        // 2. Use the correct method to get the model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 

        const prompt = `Act as a movie recommendation system. Suggest some movies for the query: "${inputText}". Only give me the names of 5 movies, comma-separated, like the example given ahead: Example - Koi Mil Gaya, Gadar, Hero, Titanic, Sholay.`;

        const result = await model.generateContent(prompt);
        const response = await result.response; // Get the response object first
        const responseText = await response.text(); // Then get the text from the response

        console.log("Gemini response:", responseText);

        // 3. Handle potential empty or malformed responses
        if (!responseText) {
            console.warn("Gemini returned an empty response.");
            // Handle appropriately - maybe show a message to the user
            dispatch(addGptMovieResult([])); // Dispatch an empty array
            return;
        }

        const movieRecommendations = responseText.split(',').map(movie => movie.trim()).filter(movie => movie); // Filter out empty strings
        console.log("Processed recommendations:", movieRecommendations);

        const promisArray = movieRecommendations.map((movie) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promisArray);

        console.log(tmdbResults);


        dispatch(addGptMovieResult({ movieNames: movieRecommendations, movieResults: tmdbResults }));


    } catch (error) {
        console.error("Error fetching from Gemini:", error);
    }
  };

  return (
    <div className='pt-[10%] flex justify-center'>
      <form
        className='w-1/2 absolute p-6 bg-black bg-opacity-75  rounded grid grid-cols-12'
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type='text'
          ref={searchText}
          className='p-4 m-4 col-span-9 rounded-lg'
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          type='button'
          className='col-span-3 m-4 py-2 px-4 bg-red-600 rounded-lg'
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;