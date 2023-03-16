import { FC } from 'react';
import { WindowsFile } from '@/data/mock';
import ReactMarkdown from 'react-markdown';

interface FileEditorProps {
  file: WindowsFile;
};

export default function FileEditor ({
  file
}) : FC<FileEditorProps> {
  return <section>
    <div>
      <div>
        <span>{file.location}</span>
      </div>
      <div><ReactMarkdown>{file.markdownContents}</ReactMarkdown></div>
    </div>
  </section>
};
