import remarkGfm from 'remark-gfm';
import { FC } from 'react';
import { WindowsFile } from '@/data/mock';
import ReactMarkdown from 'react-markdown';
import minifyIcon from '@/assets/icons/minify.png';
import maxifyIcon from '@/assets/icons/maxify.png';
import closeIcon from '@/assets/icons/close.png';
import Image from 'next/image';

interface FileEditorProps {
  file: WindowsFile;
  onClose: () => void;
  onMinify: () => void;
  onMaxify: () => void;
};

export default function FileEditor ({
  file,
  onClose,
  onMinify,
  onMaxify
}) : FC<FileEditorProps> {
  return <section className={`w-full border-4 bg-black border-windows-tan ${file.isMaxified ? '' : 'md:w-1/3' } ${file.isToggled ? 'visible' : 'hidden'} flex flex-col`}>
      <div className="border-b-4 border-windows-tan justify-between items-center bg-dark-blue flex w-full">
        <span className="text-white gap-2 px-1.5 items-center flex">
          <Image width={15} height={15} src={file.icon} alt={file.name} />
          {file.location}
        </span>
        <div className="mr-1.5 flex">
          <button className="cursor-pointer w-fit h-fit">
            <Image onClick={onMinify} width={18} height={15} src={minifyIcon.src} alt="-" />
          </button>
          <button className="cursor-pointer w-fit h-fit">
            <Image onClick={onMaxify} width={18} height={15} src={maxifyIcon.src} alt="▣" />
          </button>
          <button className="cursor-pointer w-fit h-fit">
            <Image onClick={onClose} width={18} height={15} src={closeIcon.src} alt="x" />
          </button>
        </div>
      </div>
      <div className="text-white p-4">
        <Image src={file.icon} alt={file.name} width={32} height={32} />
        <div id="react-markdown">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {file.markdownContents}
          </ReactMarkdown>
        </div>
      </div>
  </section>
};
