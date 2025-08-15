import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ProductStore - Your Shopping Dashboard',
  description: 'A modern product dashboard built with Next.js and ShadCN/UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
