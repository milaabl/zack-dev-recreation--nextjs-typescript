import React, { FC } from 'react';
import StartMenu from '@/components/Taskbar/StartMenu/StartMenu';
import NotificationArea from '@/components/Taskbar/NotificationArea/NotificationArea';
import { WindowsFile } from '@/data/mock';
import Image from 'next/image';

interface TaskbarProps {
  setOpenedFiles: React.Dispatch<React.SetStateAction<Array<WindowsFile>>>,
  openedFiles: Array<WindowsFile>,
  availableFiles: Array<WindowsFile>
}

export default function Taskbar ({
  setOpenedFiles,
  openedFiles,
  availableFiles
}) : FC<TaskbarProps> {
  return (<header className="p-1 h-10 w-full border border-white bg-windows-tan flex sticky bottom-0 left-0 p-1 gap-1.5">
      <StartMenu openedFiles={openedFiles} setOpenedFiles={setOpenedFiles} availableFiles={availableFiles} />
      <nav>
        <ul className="h-full flex gap-2">
          {openedFiles.map((openedFile : WindowsFile, index : number) => <li onClick={
            () => {
              const newOpenedFiles = [...openedFiles];
              const updatedFile = {...openedFile, isToggled: !openedFile.isToggled};
              newOpenedFiles.splice(index, 1, updatedFile);
              setOpenedFiles(newOpenedFiles);
            }
          } key={openedFile.name} className={`cursor-pointer w-20 truncate md:w-36 border ${openedFile.isToggled ? 'border-t-white border-l-white border-r-black border-b-black' : 'border-b-white border-r-white border-l-black border-t-black'} h-full border-2 flex p-1.5 items-center gap-1.5`}>
            <Image width={19} height={19} src={openedFile.icon} alt={openedFile.name} />
            <span className="text-xl">{openedFile.name}</span>
          </li>)}
        </ul>
      </nav>
      <NotificationArea />
  </header>);
};
