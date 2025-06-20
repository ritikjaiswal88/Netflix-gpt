import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div className="relative h-lvh w-lvw">
      {/* Background Layer */}
      <img
        className="fixed top-0 left-0 w-full h-full object-cover z-0 overflow-hidden"
        src={BG_URL}
        alt="background"
      />
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Foreground Layer */}
      <div className="relative z-20">
        <GptSearchBar/>
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
