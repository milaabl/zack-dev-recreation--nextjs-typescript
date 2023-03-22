import './globals.css';
import { Inconsolata } from 'next/font/google';
import { PropsWithChildren } from 'react';

const inconsolata = Inconsolata({ subsets: ['latin'] })

export const metadata = {
  title: 'Full-stack developer Ludmila A.',
  description: 'My recreation of https://zach.dev website.',
}

export default function RootLayout({
  children,
} : PropsWithChildren) {
  return (
    <html className="bg-black" lang="en">
      <body className={`relative max-w-[1600px] mx-auto before:pointer-events-none before:block before:bg-old-computer-screen before:bg-old-computer-screen-pixel before:absolute before:z-20 before:top-0 before:bottom-0 before:left-0 before:right-0 ${inconsolata.className}`}>
        {children}
      </body>
    </html>
  )
}
