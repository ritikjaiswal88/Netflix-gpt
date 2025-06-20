import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const {movieResults, movieNames} = useSelector((store) => store.gpt);
  console.log("GPT movieNames:", movieNames);
  console.log("GPT movieResults:", movieResults);

  if (!movieNames || !movieResults) return null;
  return (
    <div className='bg-black p-5 ml-14 mr-10 z-50 mt-36 text-white'>
      <h1>this is movie sugetion</h1>
      <div>
      {movieNames.map((movieName, index) => (
        movieResults[index] && (  // <----  CHECK
        <MovieList 
        key={movieName}
        title={movieName}
        movies={movieResults[index]}
        />
      )))}
    </div>
    </div>
  )
}

export default GptMovieSuggestion;

