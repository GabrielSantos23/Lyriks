import React, { useState } from 'react';
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from 'react-icons/bs';
import styled from 'styled-components';
import InputRange from 'react-input-range';

const height = '36px';
const thumbHeight = 36;
const trackHeight = '16px';

// colours
const upperColor = '#edf5f9';
const lowerColor = '#fff';
const thumbColor = '#fff';
const thumbHoverColor = '#ccc';
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

const makeLongShadow = (color, size) => {
  let i = 18;
  let shadow = `${i}px 0 0 ${size} ${color}`;

  for (; i < 706; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
  }

  return shadow;
};

const Div = styled.div``;

const VolumeBar = ({ value, min, max, onChange, setVolume }) => (
  <Div className='hidden flex-1 items-center justify-end lg:flex'>
    {value <= 1 && value > 0.5 && (
      <BsFillVolumeUpFill size={25} color='#FFF' onClick={() => setVolume(0)} />
    )}
    {value <= 0.5 && value > 0 && (
      <BsVolumeDownFill size={25} color='#FFF' onClick={() => setVolume(0)} />
    )}
    {value === 0 && (
      <BsFillVolumeMuteFill
        size={25}
        color='#FFF'
        onClick={() => setVolume(1)}
      />
    )}
    <input
      type='range'
      step='any'
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      className='ml-2 h-1  bg-red-500  md:w-32 lg:w-32 2xl:w-40'
    />
  </Div>
);

export default VolumeBar;
