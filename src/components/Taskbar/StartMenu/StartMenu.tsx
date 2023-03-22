import React, { useState } from 'react';
import startMenuIcon from '@/assets/icons/win95-logo.ico';
import Image from 'next/image';
import { WindowsFile } from '@/data/mock';

interface StartMenuProps {
  openedFiles: Array<WindowsFile>;
  availableFiles: Array<WindowsFile>;
  setOpenedFiles: React.Dispatch<React.SetStateAction<Array<WindowsFile>>>;
};

export default function StartMenu ({
  availableFiles,
  setOpenedFiles,
  openedFiles
}: StartMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return <button onClick={() => setIsOpen((val : boolean) => !val)} className="cursor-pointer w-28 border border-b-white border-r-white border-l-black border-t-black focus:border-t-white focus:border-l-white focus:border-r-black focus:border-b-black h-full border-2 flex p-1.5 items-center gap-1.5">
    <Image width={29} height={29} src={startMenuIcon.src} alt='Start menu' />
    <span className="font-bold text-xl">Start</span>
    <div className={`${!isOpen ? 'hidden' : ''} bg-windows-tan border-2 border-r-black border-b-white border-t-black border-l-white w-52 bottom-12 absolute left-0 flex flex-col`}>
      {availableFiles.map((availableFile : WindowsFile) => <button key={availableFile.name} className="hover:bg-dark-blue hover:text-white w-full p-2 text-lg flex items-center gap-1.5" onClick={() => {
        if (openedFiles.find((file : WindowsFile) => file.name === availableFile.name)) return;

        setOpenedFiles((openedFiles : Array<WindowsFile>) => [...openedFiles, availableFile]);
      }}>
          <Image src={availableFile.icon} alt={availableFile.name} width={32} height={32} />
          {availableFile.name}
        </button>)}
    </div>
  </button>;
};
