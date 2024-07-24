import { ClerkProvider} from '@clerk/nextjs'
import type {Metadata} from 'next'
import {Inter} from "next/font/google"
import './globals.css';
import {dark} from '@clerk/themes'


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'My App',
  description: 'My app description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance={{baseTheme: dark}}
    >
      <html lang="en">
        <body className={inter.className}>
          <header>
          </header>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
