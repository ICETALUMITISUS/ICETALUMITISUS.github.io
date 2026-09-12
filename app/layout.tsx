import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Creative Portfolio — Graphic Design, Retouching & Motion',
  description: 'พอร์ตโฟลิโอของนักออกแบบที่เปลี่ยนไอเดียให้กลายเป็นภาพที่ชัดเจนและมีความรู้สึก',
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
