'use client'

import { Fragment, useState, FC } from 'react';
import folderIcon from '@/assets/icons/folder.png';
import closeIcon from '@/assets/icons/close.png';
import ludmilaAblIcon from '@/assets/icons/ludmila-abl.png';
import Image from 'next/image';

export default function SystemProperties () : FC {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeModal = () => setIsOpen(val => !val);
  return <Fragment>
    <Image className="cursor-pointer" onClick={() => setIsOpen((val : boolean) => !val)} width={96} height={96} src={folderIcon.src} alt="System properties" />
    <section className={`absolute top-0 left-0 md:top-10 md:left-10 flex flex-col pt-1 pb-4 px-2 bg-windows-tan flex w-full md:w-fit max-w-full max-h-full ${isOpen ? '' : 'hidden'}`}>
      <div className="text-base text-white flex justify-between items-center w-full px-1 bg-dark-blue"><span>System properties</span><button><Image onClick={closeModal} height={18} width={18} src={closeIcon.src} alt="x" /></button></div>
      <div className="items-center flex justify-between ml-2 w-full gap-4 my-4">
        <Image src={ludmilaAblIcon.src} alt="Mila A" width={100} height={100} className="w-24 h-24 object-cover overflow-hidden rounded-full" />
        <div>
          <h2 className="w-fit font-bold">Mila A</h2>
          <p className="w-3/4">This is a developer portfolio website</p>
        </div>
      </div>
      <div className="border-b border-b-black pb-2 text-black flex w-full justify-end gap-2">
        <button onClick={closeModal} className="border border-r-white border-t-white border-b-black border-l-black px-3">OK</button>
        <button onClick={closeModal} className="border border-r-white border-t-white border-b-black border-l-black px-3">Cancel</button>
      </div>
    </section>
  </Fragment>
};
