import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

    return (
        <div className="my-4">
            <h1 className="text-2xl text-white font-bold px-5">{title}</h1>
            <div className="flex overflow-x-scroll gap-4 p-5 scrollbar-hide">
                {movies ? (
                    movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))
                ) : (
                    <p>Loading movies...</p>
                )}
            </div>
        </div>
    );
};

export default MovieList;
