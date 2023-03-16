import { FC } from 'react';
import Image from 'next/image';
import athenaStatueImg from '@/assets/images/athena-statue.png';
import cloudySkyImg from '@/assets/effects/cloudy-sky-2.gif';
import starsImg from '@/assets/effects/stars-universe.gif';

console.log(starsImg, `bg-[url(${starsImg.src})]`);

export default function BackgroundElements () : FC {
  return <div className={` absolute top-0 right-0 bottom-0 left-0`}>
    <div className="h-[700px] relative">
      <Image
        src={athenaStatueImg.src}
        alt="Athena goddess statue"
        layout="fill"
        objectFit="cover"
        className="h-full w-unset"
      />
    </div>
    <div className="w-full opacity-50 relative">
      <Image
        src={cloudySkyImg.src}
        alt="Cloudy sky in spring"
        layout="fill"
        objectFit="cover"
        className="h-full w-unset"
      />
    </div>
  </div>
};
