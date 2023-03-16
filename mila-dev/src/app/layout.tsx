import './globals.css';
import { Inconsolata } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

const inconsolata = Inconsolata({ subsets: ['latin'] })

export const metadata = {
  title: 'Full-stack developer Ludmila A.',
  description: 'My recreation of https://zach.dev website.',
}

export default function RootLayout({
  children,
}) : FC<PropsWithChildren> {
  return (
    <html lang="en">
      <body className={`${inconsolata.className}`}>
        {children}
      </body>
    </html>
  )
}
