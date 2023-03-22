import Image from 'next/image';
import athenaStatueImg from '@/assets/images/athena-statue.png';
import starsImg from '@/assets/effects/stars-universe.gif';


export default function BackgroundElements () {
  return <div style={{
    backgroundImage: `url('${starsImg.src}')`
  }} className={`-z-10 flex items-center justify-center bg-center absolute top-0 right-0 bottom-0 left-0`}>
    <div className="block mx-auto opacity-50 h-full relative">
      <Image
        src={athenaStatueImg.src}
        alt="Athena goddess statue"
        layout="fill"
        objectFit="cover"
        className="relative h-full w-auto"
      />
    </div>
  </div>
};
