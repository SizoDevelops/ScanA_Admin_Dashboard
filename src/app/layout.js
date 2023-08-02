import { DataProvider } from '@/components/HomePage/Excel-Files/tableContext'
import './globals.css'
import Providers from '@/components/Providers'

export const metadata = {
  title: 'ScanA Admin Dashboard',
  description: 'By Sizo Develops',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body > 
        <Providers>
          {children}
        </Providers>
        </body>
    </html>

   
  )
}
