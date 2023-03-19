'use client';

import './globals.css';
import { Inconsolata } from 'next/font/google';
import { useState, Fragment, FC } from 'react';
import BackgroundElements from '@/components/BackgroundElements/BackgroundElements';
import Taskbar from '@/components/Taskbar/Taskbar';
import DraggableArea from '@/components/DraggableArea/DraggableArea';
import FileEditor from '@/components/FileEditor/FileEditor';
import { WindowsFile, availableFiles, initialOpenedFiles } from '@/data/mock';

export default function Home() : FC {
  const [openedFiles, setOpenedFiles] = useState<Array<WindowsFile>>(initialOpenedFiles);
  return (
    <Fragment>
      <main className="overflow-hidden">
        {openedFiles.map(
          (openedFile : WindowsFile) =>
            <DraggableArea>
              <FileEditor key={openedFile.name} file={openedFile} />
            </DraggableArea>
        )}
      </main>
      <Taskbar setOpenedFiles={setOpenedFiles} openedFiles={openedFiles} availableFiles={availableFiles} />
      <BackgroundElements />
    </Fragment>
  )
}
