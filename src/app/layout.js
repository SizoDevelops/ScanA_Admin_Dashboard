import { DataProvider } from '@/components/HomePage/Excel-Files/tableContext'
import './globals.css'

export const metadata = {
  title: 'ScanA Admin Dashboard',
  description: 'By Sizo Develops',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>

   
  )
}
