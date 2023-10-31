import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react';
import Provider from './Provider';
import { RecoilRoot } from 'recoil';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SyncCode',
  description: '동시 편집 프로그래밍 에디터',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
            {children}
        </Provider>
      </body>
    </html>
  )
}
