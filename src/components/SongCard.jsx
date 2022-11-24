import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import placeholder from '../assets/nocoverart.jpg';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div className='flex w-[220px] animate-slideup cursor-pointer flex-col rounded-md bg-white/5 bg-opacity-80 p-4 backdrop-blur-sm'>
      <div className='h-46 group relative w-full'>
        <div
          className={`absolute inset-0 items-center justify-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? 'flex bg-black bg-opacity-70'
              : 'hidden'
          }`}
        >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        {song.images?.coverart ? (
          <img
            className='rounded-t-md'
            src={song.images?.coverart}
            alt='song_img'
          />
        ) : (
          <img className='rounded-t-md' src={placeholder} alt='song_img' />
        )}
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='truncate text-lg font-semibold text-white'>
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className='mt-1 truncate text-sm text-gray-300'>
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : '/top-artists'
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
