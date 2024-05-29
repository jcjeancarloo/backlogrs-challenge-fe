'use client'
import { Toaster } from '@/components/ui/toaster'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import PrivateRoute from '@/components/private-route'
import { checkIsPublicRoute } from '@/utils/check-route'
import QueryProvider from '@/utils/providers'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isPublicPage = checkIsPublicRoute(pathname)

  return (
    <html lang="en">
      <head>
        <title>PetAdote - Adote um amigo peludo</title>
      </head>
      <body className={inter.className}>
        <QueryProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            {isPublicPage && children}
            {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
            <Footer />
          </div>
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  )
}
