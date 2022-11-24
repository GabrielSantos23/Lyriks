import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import gif from '../assets/gif.gif';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <img src={gif} alt='' className='h-[30px] w-[30px]' onClick={handlePause} />
  ) : (
    <AiFillPlayCircle
      fontSize={30}
      className='text-gray-400'
      onClick={handlePlay}
    />
  );

export default PlayPause;
