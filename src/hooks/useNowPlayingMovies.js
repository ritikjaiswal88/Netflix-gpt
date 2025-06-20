import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowplayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies= ()=>{
    const dispatch = useDispatch();
    const NowPlayingMovies = useSelector((store)=> store.movies.NowPlayingMovies)

    const getNowPlayingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', 
        API_OPTIONS);
    
    const json = await data.json();
    dispatch(addNowplayingMovies(json.results))
    }

    useEffect(()=>{
        !NowPlayingMovies && getNowPlayingMovies();
    } ,[]);
}

export default useNowPlayingMovies;