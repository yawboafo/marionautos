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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        fontFamily: 'Inter, sans-serif'
      }}>
        <div style={{
          textAlign: 'center',
          color: '#fff',
          padding: '20px'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#DC143C'
          }}>
            Under Construction
          </h1>
          <p style={{
            fontSize: '1.25rem',
            marginTop: '1rem'
          }}>
            by{' '}
            <a 
              href="https://truelight.tech/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#DC143C',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              https://truelight.tech/
            </a>
          </p>
        </div>
      </body>
    </html>
  )
}
