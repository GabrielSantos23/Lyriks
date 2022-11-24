import SongBar from './SongBar';

const RelatedSongs = ({
  handlePauseClick,
  handlePlayClick,
  data,
  isPlaying,
  activeSong,
  artistId,
}) => (
  <div className='flex flex-col'>
    <h1 className='text-3xl font-bold text-white'>Related Songs:</h1>
    <div className='mt-6 flex w-full flex-col '>
      {data?.map((song, i) => (
        <SongBar
          key={`${artistId}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
