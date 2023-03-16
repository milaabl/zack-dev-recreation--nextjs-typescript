export const availableFiles = [];

export const initialOpenedFiles = [
  {
    location: 'C:/mila.dev/home',
    contents: `# About
      ## Hey
    `
  }
];

export interface WindowsFile {
  location: string;
  markdownContents: string;
};
