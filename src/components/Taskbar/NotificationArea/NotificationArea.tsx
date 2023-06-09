'use client'

import { useState } from 'react';
import { useTime } from 'react-timer-hook';
import volumeOnIcon from '@/assets/icons/volume-on.png';
import volumeOffIcon from '@/assets/icons/volume-off.png';
import ReactSound from 'react-sound';
import VolumeSlider from '@/components/Taskbar/NotificationArea/VolumeSlider/VolumeSlider';
import Image from 'next/image';

export default function NotificationArea () {
  const [volume, setVolume] = useState<number>(0);
  const [playStatus, setPlayStatus] = useState<'PLAYING' | 'STOPPED' | 'PAUSED'>('STOPPED');
  const {
    minutes,
    hours,
    ampm
  } = useTime({
      format: '12-hour'
    });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return <div onMouseEnter={() => {
    playStatus !== 'PLAYING' && setPlayStatus('PLAYING');
  }} className="ml-auto border-2 border-windows-grey border-b-white h-full items-center gap-2 px-1 flex">
      <div className="flex">
        <button onClick={() => setIsOpen((value : boolean) => !value)}>
          { playStatus === 'PLAYING' && <ReactSound url="./music/audio.mp3" playStatus={playStatus} volume={volume} loop={true} /> }
          <Image alt="Sound on" className={volume > 0 ? 'block' : 'hidden'} src={volumeOnIcon.src} width={23} height={23} />
          <Image alt="Sound off" className={volume <= 0 ? 'block' : 'hidden'} src={volumeOffIcon.src} width={23} height={23} />
        </button>
        <VolumeSlider isOpen={isOpen} volume={volume} setVolume={setVolume} />
      </div>
    <span className="hidden md:block text-xl uppercase">{hours === 0 ? '00' : hours < 10 ? '0' + hours : hours}:{minutes === 0 ? '00' : minutes < 10 ? '0' + minutes : minutes} {ampm}</span>
  </div>;
};
