import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from '../redux/services/shazanCore';
import ReactPlayer from 'react-player';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  const { data, isFetching, isFetchingRelatedSongs, error } =
    useGetSongRelatedQuery({ songid });

  if (isFetchingSongDetails || isFetchingRelatedSongs)
    return <Loader title='Searching song details' />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className='flex flex-col '>
      <DetailsHeader artistId='' songData={songData} />
      <div className='mb-10 ml-20 '>
        <h2 className='mt-3 text-3xl font-bold text-white '>Lyrics:</h2>

        <div className='mt-5 flex flex-wrap justify-between'>
          <div className=''>
            {songData?.sections[1].type === 'LYRICS' ? (
              songData?.sections[1]?.text.map((line, i) => (
                <div key={`lyrics-${line}-${i}`}>
                  <p
                    key={`lyrics-${line}-${i}`}
                    className='my-1 text-base text-gray-300'
                  >
                    {line}
                  </p>
                </div>
              ))
            ) : (
              <p className='my-1 text-base text-gray-300'>
                Sorry, No lyrics found!
              </p>
            )}
            {songData ? (
              <p
                className='
               my-1 max-w-lg text-base text-gray-400'
              >
                {songData.sections[1].footer}
              </p>
            ) : (
              ''
            )}
          </div>
          <div className='mr-16'>
            <RelatedSongs
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
              data={data}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
