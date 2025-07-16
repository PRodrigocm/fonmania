import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito',
  display: 'swap',
});

interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2; // 1 for title, 2 for subtitle
}

export default function Title({ children, level = 1 }: TitleProps) {
  const Tag = level === 1 ? 'h1' : 'h2';
  return (
    <Tag
      className={`${nunito.className} font-nunito font-bold`}
      style={{ fontFamily: 'var(--font-nunito)' }}
    >
      {children}
    </Tag>
  );
}
