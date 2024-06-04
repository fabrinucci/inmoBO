import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';

import { Providers } from './providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InmoBO',
  description: 'InmoBO is the best option for buy or renting a property',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='light' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <header>
            <Navbar />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
