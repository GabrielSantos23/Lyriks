import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import { Squash as Hamburger } from 'hamburger-react';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazanCore';

import 'swiper/css';
import 'swiper/css/free-mode';
import { useDispatch, useSelector } from 'react-redux';

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className='mb-2 flex w-full cursor-pointer flex-row items-center rounded-lg p-4 py-2 hover:bg-[#1D1E24] '>
    <h3 className='mr-3 text-base font-bold text-[#1ED760]'>{i + 1}.</h3>
    <div className='flex flex-1 flex-row items-center justify-between'>
      <img
        className='h-16 w-16 rounded-md'
        src={song?.images.coverart}
        alt={song?.title}
        title={song?.title}
      />
      <div className='mx-3 mr-3 flex flex-1 flex-col justify-center  '>
        <Link to={`/artists/${song.artists[0].adamid}`}>
          <p className='mt-1 text-sm  text-gray-300'>{song?.subtitle}</p>
        </Link>
        <Link to={`/songs/${song.key}`}>
          <p className='text-[15px] font-bold text-white'>{song?.title}</p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const [topOpen, setTopOpen] = useState(false);

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const topPlays = data?.slice(0, 5);
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const topArtists = data?.slice(0, 10);

  return (
    <>
      <div className='mr-[-25px] animate-slideright '>
        <div className='absolute -right-10 top-3 z-10 text-white'>
          <Hamburger toggle={setTopOpen} toggled={topOpen} />
        </div>
        <div
          ref={divRef}
          className={`w-[450px]  animate-slideright  pt-24  backdrop-blur-lg  ${
            topOpen ? '-right-full' : 'hidden'
          }`}
        >
          <div className=' flex w-full flex-col  pl-2'>
            <div className='flex flex-row items-center justify-between'>
              <h2 className='text-2xl font-bold text-white'>Top Charts</h2>
              <Link to='/top-charts'>
                <p className='mr-2 cursor-pointer text-base text-gray-300'>
                  See more
                </p>
              </Link>
            </div>
            <hr className='mt-3 border-[#1ED760]' />
            <div className='mt-4 flex flex-col gap-1'>
              {topPlays?.map((song, i) => (
                <TopChartCard
                  key={song.key}
                  song={song}
                  i={i}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  handlePauseClick={handlePauseClick}
                  handlePlayClick={() => handlePlayClick(song, i)}
                />
              ))}
            </div>
          </div>

          <div className='mt-8 flex w-full flex-col'>
            <div className='flex flex-row items-center justify-between'>
              <h2 className='text-2xl font-bold text-white'>Top Artists</h2>
              <Link to='/top-artists'>
                <p className='mr-2 cursor-pointer text-base text-gray-300'>
                  See more
                </p>
              </Link>
            </div>
            <Swiper
              slidesPerView='auto'
              spaceBetween={15}
              freeMode
              centeredSlides
              centeredSlidesBounds
              modules={[FreeMode]}
              className='mt-5'
            >
              {topArtists?.slice(0, 10).map((artist) => (
                <SwiperSlide
                  key={artist?.key}
                  style={{ width: '25%', height: 'auto' }}
                  className='animate-slideright rounded-lg shadow-lg'
                >
                  <Link to={`/artists/${artist?.artists[0].adamid}`}>
                    <img
                      src={artist?.images?.background}
                      alt='Name'
                      className='h-24 w-24 rounded-lg object-cover'
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPlay;
