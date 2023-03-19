import homeIcon from '@/assets/icons/directory.ico';
import blogIcon from '@/assets/icons/notepad.ico';

export const availableFiles = [{
  isToggled: true,
  location: 'C:/mila.dev/home',
  markdownContents: `# About
I decided to recreate https://zach.dev using Typescript, NextJS and TailwindCSS

The The GitHub repo is: https://github.com/milaabl/mila-dev-website`,
  name: 'Home',
  icon: homeIcon.src
},
{
  isToggled: true,
  markdownContents: `In progress...`,
  location: 'C:/mila.dev/blog',
  name: 'Blog',
  icon: blogIcon.src
}];

export const initialOpenedFiles = [
  ...availableFiles
];

export interface WindowsFile {
  location: string;
  markdownContents: string;
  name: string;
  icon: string;
  isToggled: boolean;
};
