import React from 'react';
import { Audio } from 'react-loader-spinner';

const Error = () => (
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
    <h1 className='mt-2 text-2xl font-bold text-white'>
      Something went Wrong please Try Again
    </h1>
  </div>
);

export default Error;
