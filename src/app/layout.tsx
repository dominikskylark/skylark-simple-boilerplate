import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Session from './_components/Session'
import DashboardLayout from './_components/DashboardLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Session>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </Session>
      </body>
    </html>
  )
}
