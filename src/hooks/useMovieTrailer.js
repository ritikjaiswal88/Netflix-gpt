import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailearVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId)=>{
    
    const dispatch = useDispatch();
    const MovieVedios = useSelector((store)=> store.movies.MovieVedios)
    const getMovieVedios = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
       const json = await data.json();

       const filtrData = json.results.filter((video) => video.type == 'Trailer');
       const trailer = filtrData.length ? filtrData[0] : json.results[0];
       dispatch(addTrailearVideo(trailer))
    };

    useEffect(()=>{
       !MovieVedios && getMovieVedios();
    },[]);
}

export default useMovieTrailer;