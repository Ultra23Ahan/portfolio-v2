import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Ahan',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} scrollbar-none bg-[#171717] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
