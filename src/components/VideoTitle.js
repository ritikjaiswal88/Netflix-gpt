import React from 'react'
import 'remixicon/fonts/remixicon.css';

function VideoTitle({title,overview}) {
  return (
    <div className='w-full mt-36 md:mt-0 h-screen pt-[15%] px-12 z-10 absolute text-white bg-gradient-to-r from-[#00000097]'>
      <h1 className='text-3xl md:text-4xl font-bold pb-5 '>{title}</h1>
      <p className='text:1xl md:text-1.5xl md:font-bold w-1/2 md:w-1/3 mb-2'>{overview}</p>
      <div>
        <button className='px-6 py-2 my-3 mr-2 bg-[#FFFFFF] border-[1px] rounded text-black border-black font-bold hover:bg-[#dadadad2]'><i class="ri-play-large-fill"></i>play</button>
        <button className='px-6 py-2 my-3 mr-2  bg-opacity-75 bg-[#5b5b5b] rounded font-bold text-white'><i class="ri-information-line"></i> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle