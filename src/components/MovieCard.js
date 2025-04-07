import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
    return (
        <div className="min-w-[150px]">
            <img
                className="w-full rounded-lg"
                alt="movie poster"
                src={IMG_CDN_URL + posterPath}
            />
        </div>
    );
};

export default MovieCard;
