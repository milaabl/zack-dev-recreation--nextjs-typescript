'use client';

import './globals.css';
import { Inconsolata } from 'next/font/google';
import { useState, Fragment } from 'react';
import BackgroundElements from '@/components/BackgroundElements/BackgroundElements';
import Taskbar from '@/components/Taskbar/Taskbar';
import DraggableArea from '@/components/DraggableArea/DraggableArea';
import SystemProperties from '@/components/SystemProperties/SystemProperties';
import FilePreview from '@/components/FilePreview/FilePreview';
import { WindowsFile, availableFiles, initialOpenedFiles } from '@/data/mock';

export default function Home() {
  const [openedFiles, setOpenedFiles] = useState<Array<WindowsFile>>(initialOpenedFiles);
  return (
    <Fragment>
      <main className="p-2 h-[calc(100vh-40px)] overflow-hidden">
      <SystemProperties />
        {openedFiles.map(
          (openedFile : WindowsFile, index : number) =>
            <DraggableArea key={openedFile.name}>
              <FilePreview onMaxify={() => {
                const newOpenedFiles = [...openedFiles];
                const updatedFile = {...openedFile, isMaxified: !openedFile.isMaxified};
                newOpenedFiles.splice(index, 1, updatedFile);
                setOpenedFiles(newOpenedFiles);
              }}
              onClose={() => {
                const newOpenedFiles = [...openedFiles];
                newOpenedFiles.splice(index, 1);
                setOpenedFiles(newOpenedFiles);
              }}
              onMinify={() => {
                const newOpenedFiles = [...openedFiles];
                const updatedFile = {...openedFile, isToggled: !openedFile.isToggled};
                newOpenedFiles.splice(index, 1, updatedFile);
                setOpenedFiles(newOpenedFiles);
              }}
              key={openedFile.name} file={openedFile} />
            </DraggableArea>
        )}
      </main>
      <Taskbar setOpenedFiles={setOpenedFiles} openedFiles={openedFiles} availableFiles={availableFiles} />
      <BackgroundElements />
    </Fragment>
  )
}
