import { Link } from 'react-router-dom';
import placeholder from '../assets/nocoverart.jpg';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId]?.attributes;
  const IMAGE_ONE = songData?.images.coverart;
  const IMAGE = IMAGE_ONE;
  return (
    <div className='relative ml-20 flex h-72 w-full flex-col '>
      <div className='h-28 w-full  sm:h-48'>
        <div className='absolute inset-0 flex items-center'>
          {songData?.images ? (
            <img
              src={
                artistId
                  ? artist?.artwork?.url
                      .replace('{w}', '500')
                      .replace('{h}', '500')
                  : songData?.images.coverart
              }
              alt=''
              className='w-28 rounded-lg border-2 object-cover shadow-xl shadow-black sm:h-48 sm:w-48'
            />
          ) : (
            <img
              src={
                artistId
                  ? artist?.artwork?.url
                      .replace('{w}', '500')
                      .replace('{h}', '500')
                  : placeholder
              }
              alt=''
              className='w-28 rounded-lg border-2 object-cover shadow-xl shadow-black sm:h-48 sm:w-48'
            />
          )}

          <div className='ml-5'>
            <p className='text-xl font-bold text-white  sm:text-3xl'>
              {artistId ? artist.name : songData?.title}
            </p>
            {!artistId && (
              <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
                <p className='mt-2 text-base text-gray-400'>
                  {songData?.subtitle}
                </p>
              </Link>
            )}
            <p className='mt-2 text-base text-gray-400 '>
              {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
            </p>
            <p>{songData?.sections?.footer}</p>
          </div>
        </div>
      </div>
      <div className='h-36 w-full sm:h-52' />
    </div>
  );
};

export default DetailsHeader;
