import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pitipong Chusawat — Graphic Design Portfolio',
  description: 'รวมผลงานกราฟิก รีทัชภาพ และสื่อออนไลน์ของปิติพงษ์ ชูสวัสดิ์',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
