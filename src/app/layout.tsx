import type { Metadata } from 'next';

import '@/styles/_index.scss';
import { ReactNode } from 'react';

import { MainLayout } from '@/widgets/main-layout';
import { MediaProvider, mediaStyles } from '@/providers/media-provider';
import { CustomModalProvider } from '@/providers/custom-modal-provider';

export const metadata: Metadata = {
  title: 'My Title',
  description: 'My Description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ru'>
      <head>
        <meta charSet='UTF-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link
          rel='preload'
          href='/fonts/proxima/ProximaNova-Regular.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/proxima/ProximaNova-Semibold.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <style dangerouslySetInnerHTML={{ __html: mediaStyles }} />
      </head>
      <body>
        <MediaProvider>
          <CustomModalProvider>
            <MainLayout>{children}</MainLayout>
          </CustomModalProvider>
        </MediaProvider>
      </body>
    </html>
  );
}
