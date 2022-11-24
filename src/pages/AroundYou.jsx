import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazanCore';
const CountryTracks = () => {
  const [country, setCountry] = useState('BR');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  if (isFetching && loading) return <Loader title='Loading Songs around you' />;

  if (isFetching && loading) return <Error />;
  return (
    <div className='flex flex-col'>
      <h2 className='mt-4 mb-10 text-left text-3xl font-bold text-white'>
        Around You
      </h2>
      <div className='flex flex-wrap justify-center gap-8 sm:justify-start'>
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};
export default CountryTracks;
