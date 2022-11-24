import React from 'react';
import { useGetTopChartsQuery } from '../../redux/services/shazanCore';

const Track = ({ isPlaying, isActive, activeSong, data }) => (
  <div className='flex flex-1 items-center justify-start'>
    <div
      className={`${
        isPlaying && isActive ? '' : ''
      } mr-4 hidden h-16 w-16 sm:block`}
    >
      <img
        src={activeSong?.images?.coverart}
        alt='cover art'
        className='rounded-md'
      />
    </div>
    <div className='w-[50%]'>
      <p className='truncate text-gray-300'>
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
      <p className='truncate text-base font-bold text-white'>
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className=' text-[#1ED760]'>
        {activeSong?.hub?.explicit === true ? 'Explicit' : ''}
      </p>
    </div>
  </div>
);

export default Track;
