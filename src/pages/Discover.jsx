import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

import { useGetSongByGenreQuery } from '../redux/services/shazanCore';
import { selectGenreListId } from '../redux/features/playerSlice';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player
  );
  const { data, isFetching, error } = useGetSongByGenreQuery(
    genreListId || 'POP'
  );
  if (isFetching) return <Loader title='Loading Songs...' />;

  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className='flex flex-col'>
      <div className='mt-4 mb-10 flex w-full flex-col items-center justify-between sm:flex-row'>
        <h2 className=' text-left text-3xl font-bold text-white'>
          Discover: {genreTitle}{' '}
        </h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'POP'}
          className='mt-5 rounded-lg  bg-black p-3 text-sm text-gray-300 outline-none sm:mt-0 lg:mr-[75px]  '
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-wrap justify-center gap-8 sm:justify-start'>
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
