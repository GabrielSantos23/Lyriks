import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
      className='p-6 text-gray-400 focus-within:text-gray-600'
    >
      <label htmlFor='' className='sr-only'>
        Search all songs
      </label>
      <div className='flex flex-row items-center justify-start'>
        <FiSearch className='ml-4 h-6 w-6' />
        <input
          type='search'
          name='search-field'
          autoComplete='off'
          id='search-field'
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='ml-1 flex-1 border-none bg-transparent text-lg text-white placeholder-gray-500 outline-none'
        />
      </div>
    </form>
  );
};

export default Searchbar;
