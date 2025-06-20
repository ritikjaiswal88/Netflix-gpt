import React from 'react';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    const videoUrl = trailerVideo?.key
        ? `https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&loop=1&playlist=${trailerVideo.key}`
        : '';

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {trailerVideo && (
                <iframe
                    className="absolute top-0 left-0 w-full h-full object-cover transform scale-[1.4]"
                    src={videoUrl}
                    title="YouTube video player"
                    allow="autoplay; encrypted-media; fullscreen"
                    referrerPolicy="strict-origin-when-cross-origin"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

export default VideoBackground;
