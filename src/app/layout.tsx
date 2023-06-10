import { Header } from './_components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Uncle React Portfolio Site',
  description: 'Reactおじさんの自己紹介、技術経歴、キャリアについて記載しているWebサイトです。',
  twitter: {
    card: 'summary_large_image',
    site: '@react_nextjs',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
