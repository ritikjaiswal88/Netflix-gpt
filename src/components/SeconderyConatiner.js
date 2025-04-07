import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SeconderyConatiner = () => {
  const movies  = useSelector((store) => store.movies);

  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowplayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"TopRated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      </div>
    </div>
  )
}

export default SeconderyConatiner;
