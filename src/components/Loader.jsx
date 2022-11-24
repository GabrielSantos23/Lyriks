import { loader } from '../assets';
import { Audio } from 'react-loader-spinner';
const Loader = ({ title }) => (
  <div className='flex w-full flex-col items-center justify-center'>
    <Audio
      height='100'
      width='100'
      color='#4fa94d'
      ariaLabel='audio-loading'
      wrapperStyle={{}}
      wrapperClass='wrapper-class'
      visible={true}
    />
    <h1 className='mt-2 text-2xl font-bold text-white'>{title}</h1>
  </div>
);

export default Loader;
