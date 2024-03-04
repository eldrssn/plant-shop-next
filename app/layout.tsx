import type { Metadata } from 'next';

import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PopupCart } from '@/components/popup-cart';
import { StoreProvider } from '@/common/store/context';

export const metadata: Metadata = {
  title: 'Patch Plants: Plants Made Easy | Delivered to your Door| Patch',
  description:
    'Patch makes plants easy. We are loved by 500k happy customers. Why go anywhere else?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="overflow-x-hidden">
          <Header />
          {children}
          <Footer />
          <PopupCart />
        </body>
      </html>
    </StoreProvider>
  );
}
