'use client'

import React, { FC } from 'react';
import ReactSlider from 'react-slider';

interface VolumeSliderProps {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  isOpen: boolean;
};

export default function VolumeSlider ({
  volume,
  setVolume,
  isOpen
}) : FC<VolumeSliderProps> {
  return isOpen && <div className="w-28 justify-center gap-2 absolute bottom-12 right-1 border border-l-white border-t-white border-b-black border-r-black bg-windows-tan flex-col p-2 flex">
    <span className="text-center text-lg">Volume</span>
    <div className="h-16 flex justify-center gap-4">
      <div className="h-full">
        <div className="h-full -mr-[6px] -rotate-[9deg] inline-block border-r border-r-white" />
        <div className="h-full w-3 inline-block border-r border-r-black" />
      </div>
      <ReactSlider
        value={volume}
        marks={100}
        onChange={(value) => {
          setVolume(value);
        }}
        invert
        ariaLabel={['Lowest thumb', 'Middle thumb', 'Top thumb']}
        renderThumb={(props, state) => <div {...props} className="bg-windows-tan border border-r-black border-b-black border-t-white border-l-white w-5 h-4"></div>}
        renderTrack={(props, state) => props.key === 'track-0' ? <div {...props} /> : <div {...props} className="w-1 border border-r-white border-l-black border-t-black border-b-black h-16" />}
        orientation="vertical"
        pearling
        minDistance={1}
      />
    </div>
    <div className="mx-auto flex items-center gap-1.5">
      <input type="checkbox" checked={volume === 0} onClick={() => {
        setVolume((value : number) => value <= 0 ? 100 : 0);
      }} />
      <span className="first-letter:underline">Mute</span>
    </div>
  </div>;
};
