import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marion Autos - Premium Active Cars in Ghana | Import from USA or Canada',
  description: 'Buy premium cars in Ghana or import from the USA or Canada. Track your delivery, calculate shipping & duty costs. Marion Autos - Your trusted car dealer.',
  keywords: 'cars Ghana, import cars USA, import cars Canada, car dealership Ghana, buy cars Ghana, shipping calculator, duty calculator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
