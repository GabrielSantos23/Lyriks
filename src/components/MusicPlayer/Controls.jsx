import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from 'react-icons/bs';

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <div className='flex items-center justify-around md:w-36 lg:w-52 2xl:w-80'>
    <BsArrowRepeat
      size={20}
      color={repeat ? '#1ED760' : '#818181'}
      onClick={() => setRepeat((prev) => !prev)}
      className='hidden cursor-pointer sm:block'
    />
    {currentSongs?.length && (
      <MdSkipPrevious
        size={30}
        color='#818181'
        className='cursor-pointer hover:text-white'
        onClick={handlePrevSong}
      />
    )}
    {isPlaying ? (
      <BsFillPauseFill
        size={45}
        color='#818181'
        onClick={handlePlayPause}
        className='cursor-pointer'
      />
    ) : (
      <BsFillPlayFill
        size={45}
        color='#818181'
        onClick={handlePlayPause}
        className='cursor-pointer'
      />
    )}
    {currentSongs?.length && (
      <MdSkipNext
        size={30}
        color='#818181'
        className='cursor-pointer'
        onClick={handleNextSong}
      />
    )}
    <BsShuffle
      size={20}
      color={shuffle ? '#1ED760' : '#818181'}
      onClick={() => setShuffle((prev) => !prev)}
      className='hidden cursor-pointer sm:block'
    />
  </div>
);

export default Controls;
